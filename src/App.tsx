import React from "react";
import CodeEditor from "./components/CodeEditor";
import Navbar from "./components/Navbar";
import Split from "react-split";
import ProblemStatement from "./components/ProblemStatement";

export default function App(): React.ReactNode {
  return (
    <div className="bg-[#0F0F0F] h-screen w-full text-[#F2F2F2] overflow-hidden">
      <Navbar />
      <Split
        className="h-[calc(100vh - 64px)] flex flex-col lg:flex-row bg-black"
        gutterSize={10}
        gutterAlign="start"
        minSize={0}
      >
        <ProblemStatement />
        <CodeEditor />
      </Split>
    </div>
  );
}
