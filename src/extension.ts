import * as vscode from "vscode";
import * as path from "path";

export function activate(context: vscode.ExtensionContext) {
  const disposable = vscode.commands.registerCommand("shireee.generateIndex.ts", () => {
    // check if we have open editor tab
    if (vscode.window.activeTextEditor) {
      const activeFileUri = vscode.window.activeTextEditor.document.fileName;
      const indexFileUri = vscode.Uri.joinPath(
        vscode.Uri.file(path.dirname(activeFileUri)),
        "index.ts"
      );

      const fileName = path.basename(activeFileUri, path.extname(activeFileUri));
      const content = new TextEncoder().encode(`export { ${fileName} } from './${fileName}';\n`);

      // Writing index.ts
      try {
        vscode.workspace.fs.writeFile(indexFileUri, content);
        vscode.window.showInformationMessage(`index.ts generated`);
      } catch (error) {
        vscode.window.showErrorMessage(`Failed generated index.ts`);
      }
    } else {
      vscode.window.showInformationMessage("No active editor");
    }
  });

  context.subscriptions.push(disposable);
}

export function deactivate() {}
