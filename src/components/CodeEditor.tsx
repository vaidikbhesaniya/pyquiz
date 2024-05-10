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
    <div className="w-[100%] h-[55%] lg:h-[100%] flex flex-col">
      <Editor
        height="90%"
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
      <div className="w-[100%] my-[1rem] flex-1 gap-[2rem] flex items-center justify-center font-semibold">
        <Button
          variant="outline"
          className="px-[1rem] text-black h-[40px] rounded-sm bg-yellow-300"
        >
          Run
        </Button>
        <Button
          variant="outline"
          className="px-[1rem] text-white h-[40px] rounded-sm bg-green-600"
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
