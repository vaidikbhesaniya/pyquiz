import { ReactNode } from "react";
import { useState } from "react";
import { Button } from "../../@/components/ui/button";
export default function ProblemStatement(): ReactNode {
    const questions = [
        {
            Task: {
                Head: "The provided code stub reads two integers from STDIN. a and b . Add code to print three lines where:",
                Conditions: [
                    " The first line contains the sum of the two numbers. ",
                    " The second line contains the difference of the two numbers (first - second). ",
                    " The third line contains the product of the two numbers. ",
                ],
            },
            Example: {
                Input: ["a = 10;", "b = 20;"],
                Output: ["8", "-2", "15"],
            },
            InputFormat: [
                "1) The first line contains the first integer, a.",
                "2) The second line contains the second integer, b.",
            ],
            OutputFormat: ["print the three line as explained above"],
            Constrains: ["1≤a≤10^10", "1≤b≤10^10"],
            AnotherExample: {
                SampleInput: ["3", "2"],
                SampleOutput: ["5", "1", "7"],
            },
        },
    ];

    const [VisibleQue, setVisibleQue] = useState(questions[0]);

    return (
        <div
            className="bg-black lg:h-[100%]  w-[100%] h-[50%] overflow-auto poppins-medium  "
            id="slider"
        >
            <div className="w-[100%] h-[120%]  lg:h-[60%] pl-5">
                <strong className="text-white font-extrabold">Task:</strong>

                <div className="m-5 pl-5">
                    <div>{VisibleQue.Task.Head}</div>

                    <div>
                        {VisibleQue.Task.Conditions.map((data, index) => (
                            <div className="m-2 pl-8" key={index}>{`${
                                index + 1 + "."
                            } ${data}`}</div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="w-[100%] lg:h-[50%] h-[90%] pl-5">
                <strong className="text-white font-extrabold">Example:</strong>
                <div>
                    {VisibleQue.Example.Input.map((data, index) => (
                        <p key={index} className="m-2 pl-8">
                            {data}
                        </p>
                    ))}
                </div>
                <div className="ml-5">Print The Following</div>
                <div className="bg-[#696969] m-8 rounded-xl p-5 ">
                    {VisibleQue.Example.Output.map((data, index) => (
                        <p key={index}>{data}</p>
                    ))}
                </div>
            </div>

            <div className="w-[100%] lg:h-[20%] h-[50%] pl-5">
                <strong className="text-white font-extrabold">
                    Input Format:
                </strong>
                <div className="m-5 p-1">
                    {VisibleQue.InputFormat.map((data, index) => (
                        <p key={index}>{data}</p>
                    ))}
                </div>
            </div>

            <div className="w-[100%] lg:h-[40%] h-[40%] pl-5">
                <strong className="text-white font-extrabold">
                    Constrains:
                </strong>
                <div className="m-5 p-1">
                    {VisibleQue.Constrains.map((data, index) => (
                        <p key={index}>{data}</p>
                    ))}
                </div>
            </div>
            <div className="w-[100%] lg:h-[40%] h-[130%] pl-5">
                <strong className="text-white font-extrabold">
                    Sample Input 0:
                </strong>
                <div className="bg-[#696969] m-8 rounded-xl p-5 ">
                    {VisibleQue.AnotherExample.SampleInput.map(
                        (data, index) => (
                            <p key={index}>{data}</p>
                        )
                    )}
                </div>

                <strong className="text-white font-extrabold">
                    Sample Output 0:
                </strong>
                <div className="bg-[#696969] m-8 rounded-xl p-5 ">
                    {VisibleQue.AnotherExample.SampleOutput.map(
                        (data, index) => (
                            <p key={index}>{data}</p>
                        )
                    )}
                </div>
            </div>
            <div className="w-[100%] lg:h-[40%] h-[20%] m-2 flex justify-around ">
                <Button
                    variant="outline"
                    className="m-2 w-[100px] text-black h-[40px] rounded-sm bg-yellow-300"
                >
                    Run
                </Button>
                <Button
                    variant="outline"
                    className="m-2  w-[150px] text-white h-[40px] rounded-sm bg-green-600"
                    onClick={() => setVisibleQue(questions[0])}
                >
                    Submit & Next
                </Button>
            </div>
        </div>
    );
}
