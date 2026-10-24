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
          docker build --tag "${DOCKER_IMAGE}" .
        """
      }
    }

    stage('Quality checks and Playwright tests') {
      steps {
        sh '''
          set -eu
          mkdir -p "$WORKSPACE/playwright-report" "$WORKSPACE/test-results"

          docker run --rm \
            -e CI=true \
            -v "$WORKSPACE/playwright-report:/app/playwright-report" \
            -v "$WORKSPACE/test-results:/app/test-results" \
            "${DOCKER_IMAGE}" \
            sh -c "pnpm lint && pnpm typecheck && pnpm format:check && pnpm exec playwright test"
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

      sh '''
        docker image rm -f "${DOCKER_IMAGE}" >/dev/null 2>&1 || true
        rm -rf "$WORKSPACE/playwright-report" "$WORKSPACE/test-results" || true
      '''
    }

    success {
      echo 'Quality checks and Playwright suite passed.'
    }

    failure {
      echo 'Quality checks or Playwright tests failed. Reports were archived when present.'
    }
  }
}

/*
 * Prerequisites:
 * - Jenkins agent with Docker installed and access to a Docker daemon.
 * - The agent must be able to build and run the repository's existing Docker image.
 * - This pipeline does not assume Docker-in-Docker is enabled; run it on a Docker-capable agent.
 */
