import * as vscode from "vscode";
import { rgCreateComponentTemplate, rgCreateIndexFile } from './commands'

export function activate(context: vscode.ExtensionContext) {
    rgCreateIndexFile(context);
    rgCreateComponentTemplate(context);
}

export function deactivate() {}
