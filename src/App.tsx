/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from "react";
import CodeEditor from "./components/CodeEditor";
import Navbar from "./components/Navbar";
import ProblemStatement from "./components/ProblemStatement";
import { Question, questions } from "./data";

export default function App(): React.ReactNode {
  const [visibleQuestion, setVisibleQuestion] = useState<Question>(
    questions[0]
  );

  useEffect(() => {
    window.addEventListener("contextmenu", function (e) {
      e.preventDefault();
    });
  }, []);

  return (
    <div className="bg-[#0F0F0F] h-[100dvh] w-[100dvw] text-[#F2F2F2] overflow-hidden">
      <Navbar />
      <div className="h-[90vh]  flex flex-col w-[100vw]  lg:flex-row">
        <ProblemStatement visibleQuestion={visibleQuestion} />
        <CodeEditor
          visibleQuestionId={visibleQuestion.id}
          setVisibleQuestion={setVisibleQuestion}
        />
      </div>
    </div>
  );
}
