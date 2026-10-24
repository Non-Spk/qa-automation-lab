pipeline {
  agent any

  options {
    timestamps()
    timeout(time: 60, unit: 'MINUTES')
    buildDiscarder(logRotator(numToKeepStr: '20'))
  }

  environment {
    DOCKER_IMAGE = "qa-automation-lab:${env.BUILD_NUMBER}"
  }

  stages {
    stage('Checkout') {
      steps {
        checkout scm
      }
    }

    stage('Build Docker image') {
      steps {
        sh """
          docker build --tag \"${DOCKER_IMAGE}\" .
        """
      }
    }

    stage('Code quality and Playwright validation') {
      steps {
        sh '''
          mkdir -p playwright-report test-results
          docker run --rm \
            -e CI=true \
            -v "$WORKSPACE/playwright-report:/app/playwright-report" \
            -v "$WORKSPACE/test-results:/app/test-results" \
            "${DOCKER_IMAGE}" \
            sh -c "pnpm lint && pnpm typecheck && pnpm format:check && pnpm i18n:check && pnpm exec playwright test"
        '''
      }
    }
  }

  post {
    always {
      script {
        archiveArtifacts(
          artifacts: 'playwright-report/**, test-results/**',
          allowEmptyArchive: true,
          fingerprint: false
        )
      }
    }

    success {
      echo 'Quality checks and Playwright suite passed.'
    }

    failure {
      echo 'Quality checks or Playwright tests failed. Reports have been archived when present.'
    }

    cleanup {
      sh '''
        docker image rm -f "${DOCKER_IMAGE}" || true
        rm -rf playwright-report test-results || true
      '''
    }
  }
}

/*
 * Prerequisites for this pipeline:
 * - Jenkins agent with Docker CLI installed and access to a reachable Docker daemon.
 * - The agent must be able to build and run the repo's existing Docker image.
 * - This does not assume Docker-in-Docker is configured; if your Jenkins setup does not
 *   provide Docker on the agent, this pipeline must be run on a node that does.
 */
