import path from "node:path";
import { fileURLToPath } from "node:url";
import ts from "typescript";

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(scriptDir, "../../../../");
const translationsDir = path.join(projectRoot, "src/resources/translations");

const configPath = path.join(projectRoot, "tsconfig.json");

const configFile = ts.readConfigFile(configPath, ts.sys.readFile);

if (configFile.error) {
  console.error(
    ts.flattenDiagnosticMessageText(configFile.error.messageText, "\n"),
  );
  process.exit(1);
}

const parsedConfig = ts.parseJsonConfigFileContent(
  configFile.config,
  ts.sys,
  projectRoot,
);

const translationFiles = [
  path.join(translationsDir, "en.ts"),
  path.join(translationsDir, "th.ts"),
];

const program = ts.createProgram({
  rootNames: translationFiles,
  options: parsedConfig.options,
});

const diagnostics = [
  ...parsedConfig.errors,
  ...ts
    .getPreEmitDiagnostics(program)
    .filter(
      (diagnostic) =>
        diagnostic.file &&
        path
          .resolve(diagnostic.file.fileName)
          .startsWith(path.resolve(translationsDir) + path.sep),
    ),
];

if (diagnostics.length > 0) {
  const formatHost = {
    getCanonicalFileName: (fileName: string) => fileName,
    getCurrentDirectory: () => projectRoot,
    getNewLine: () => "\n",
  };

  console.error(
    ts.formatDiagnosticsWithColorAndContext(diagnostics, formatHost),
  );

  console.error("\ni18n validation failed.");
  process.exit(1);
}

console.log("i18n validation passed: en and th match TranslationType.");
