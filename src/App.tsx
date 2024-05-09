import React from "react";
import CodeEditor from "./components/CodeEditor";
import Navbar from "./components/Navbar";
// import Split from "react-split";
import { useEffect } from "react";
import ProblemStatement from "./components/ProblemStatement";

export default function App(): React.ReactNode {
    useEffect(() => {
        window.addEventListener("contextmenu", function (e) {
            e.preventDefault();
        });
    }, []);

    return (
        <div className="bg-[#0F0F0F] h-[100dvh] w-[100dvw] text-[#F2F2F2] overflow-hidden">
            <Navbar />
            <div className="h-[90vh]  flex flex-col w-[100vw]  lg:flex-row bg-white">
                <ProblemStatement />
                <CodeEditor />
            </div>
        </div>
    );
}
