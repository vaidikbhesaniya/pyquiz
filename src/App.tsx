/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useRef } from "react";
import CodeEditor from "./components/CodeEditor";
import Navbar from "./components/Navbar";
import { useEffect } from "react";
import ProblemStatement from "./components/ProblemStatement";
import { usePython } from "react-py";

export default function App(): React.ReactNode {
  const editorRef = useRef<null | any>(null);
  const { runPython, stdout, stderr } = usePython({});

  useEffect(() => {
    window.addEventListener("contextmenu", function (e) {
      e.preventDefault();
    });
  }, []);

  function handleSubmit(questionId: number) {
    console.log(questionId);
    if (editorRef.current) {
      console.log(editorRef.current.getValue());
      runPython(editorRef.current.getValue());
    }
    console.log("");
  }

  return (
    <div className="bg-[#0F0F0F] h-[100dvh] w-[100dvw] text-[#F2F2F2] overflow-hidden">
      <Navbar />
      <div className="h-[90vh]  flex flex-col w-[100vw]  lg:flex-row bg-white">
        <div>
          {stdout}
          {stderr}
        </div>
        <ProblemStatement handleSubmit={handleSubmit} />
        <CodeEditor editorRef={editorRef} />
      </div>
    </div>
  );
}
