import { ReactNode, useRef } from "react";
import Editor from "@monaco-editor/react";

export default function CodeEditor(): ReactNode {
  const editorRef = useRef(null);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function handleEditorDidMount(editor: any) {
    editorRef.current = editor;
  }

  return (
    <div className="calc(100vh - 64px) p-[]">
      <Editor
        height="90vh"
        defaultValue="# Write Code Here
        "
        defaultLanguage="python"
        theme="vs-dark"
        onMount={handleEditorDidMount}
        options={{
          minimap: {
            enabled: false,
          },
          fontSize: 18,
          wordWrap: "on",
          autoDetectHighContrast: false,
        }}
      />
    </div>
  );
}
