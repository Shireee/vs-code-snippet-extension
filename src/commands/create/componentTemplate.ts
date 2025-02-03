import * as vscode from "vscode";
import * as path from "path";

function createIndexFile(folderPath: string, componentName: string) {
  const filePath = path.join(folderPath, "index.ts");
  const fileUri = vscode.Uri.file(filePath);
  const content = new TextEncoder().encode(
    `export { ${componentName} } from './${componentName}';\n`
  );

  vscode.workspace.fs.writeFile(fileUri, content).then(
    () => {},
    () => vscode.window.showErrorMessage(`❌ Failed to generate index.ts`)
  );
}

function createStyleFile(folderPath: string, componentName: string) {
  const filePath = path.join(folderPath, `${componentName}.module.scss`);
  const fileUri = vscode.Uri.file(filePath);
  const content = new TextEncoder().encode("");

  vscode.workspace.fs.writeFile(fileUri, content).then(
    () => {},
    () => vscode.window.showErrorMessage(`❌ Failed to generate style file`)
  );
}

function createComponentFile(folderPath: string, componentName: string) {
  const filePath = path.join(folderPath, `${componentName}.tsx`);
  const fileUri = vscode.Uri.file(filePath);
  const content = new TextEncoder().encode(
    `import styles from "./${componentName}.module.scss";\n\nexport const ${componentName}: React.FC = () => {\n  return <div className={styles.container}>${componentName}</div>;\n};\n`
  );

  vscode.workspace.fs.writeFile(fileUri, content).then(
    () => {},
    () => vscode.window.showErrorMessage(`❌ Failed to generate component file`)
  );
}

async function createComponentTemplate(folderPath: string) {
  const componentName = await vscode.window.showInputBox({
    placeHolder: "Enter component name",
    prompt: "Type the name of your new component",
    validateInput: (input) => (input.trim() === "" ? "Component name cannot be empty" : null),
  });

  if (!componentName) {
    vscode.window.showErrorMessage("Operation cancelled");
    return;
  }

  const componentFolderPath = path.join(folderPath, componentName);
  const folderUri = vscode.Uri.file(componentFolderPath);

  try {
    await vscode.workspace.fs.createDirectory(folderUri);
    createIndexFile(componentFolderPath, componentName);
    createStyleFile(componentFolderPath, componentName);
    createComponentFile(componentFolderPath, componentName);
  } catch (error) {
    vscode.window.showErrorMessage(`❌ Failed to create folder`);
  }
}

export function rgCreateComponentTemplate(context: vscode.ExtensionContext) {
  const disposable = vscode.commands.registerCommand(
    "shireee.create.componentTemplate",
    (uri: vscode.Uri) => {
      if (!uri) {
        vscode.window.showErrorMessage("❌ No folder selected!");
        return;
      }

      createComponentTemplate(uri.fsPath);
    }
  );

  context.subscriptions.push(disposable);
}
