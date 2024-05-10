/* eslint-disable @typescript-eslint/no-explicit-any */
import Editor from "@monaco-editor/react";
import { Dispatch, ReactNode, useRef } from "react";
import { Button } from "../../@/components/ui/button";
import { Question, questions } from "../data/index";

interface CodeEditorProps {
  visibleQuestionId: number;
  setVisibleQuestion: Dispatch<React.SetStateAction<Question>>;
}

export default function CodeEditor({
  visibleQuestionId,
  setVisibleQuestion,
}: CodeEditorProps): ReactNode {
  const editorRef = useRef<null | any>(null);

  function handleEditorDidMount(editor: any) {
    editorRef.current = editor;
  }

  function handleSubmit(questionId: number) {
    console.log(questionId);
    if (editorRef.current) {
      console.log(editorRef.current.getValue());
    }
    console.log("");
  }

  return (
    <div className="w-[100%] h-[100%]">
      <Editor
        height="80vh"
        defaultValue="# Write Code Here"
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
      <div>
        <Button
          variant="outline"
          className="m-2 w-[100px] text-black h-[40px] rounded-sm bg-yellow-300"
        >
          Run
        </Button>
        <Button
          variant="outline"
          className="m-2  w-[150px] text-white h-[40px] rounded-sm bg-green-600"
          onClick={() => {
            handleSubmit(visibleQuestionId);
            setVisibleQuestion(questions[1]);
            // sideToTop();
          }}
        >
          Submit & Next
        </Button>
      </div>
    </div>
  );
}
