import { ReactNode, useRef } from "react";
import { useState } from "react";
import { Button } from "../../@/components/ui/button";
export default function ProblemStatement({
  handleSubmit,
}: {
  handleSubmit: (questionId: number) => void;
}): ReactNode {
  const slideRef = useRef<HTMLDivElement>(null);

  function sideToTop() {
    if (slideRef.current) {
      slideRef.current.scrollTop = 0;
    }
  }

  const questions = [
    {
      id: 1,
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
      Constraints: ["1≤a≤10^10", "1≤b≤10^10"],
      AnotherExample: {
        SampleInput: ["3", "2"],
        SampleOutput: ["5", "1", "7"],
      },
    },

    {
      id: 2,
      Task: {
        Head: "You are given two integers, N and M. Write a program to perform the following operations:",
        Conditions: [
          "Calculate the sum of the first N natural numbers raised to the power of M.",
          "Calculate the product of the first M prime numbers.",
          "Calculate the difference between the sum of the squares of the first N odd numbers and the sum of the squares of the first M even numbers.",
        ],
      },
      Example: {
        Input: ["N = 3;", "M = 2;"],
        Output: ["Sum: 36", "Product: 15", "Difference: 47"],
      },
      InputFormat: [
        "The first line contains an integer N (1 ≤ N ≤ 1000), representing the number of natural numbers.",
        "The second line contains an integer M (1 ≤ M ≤ 1000), representing the number of prime numbers.",
      ],
      OutputFormat: [
        "Print three lines:",
        "The first line should contain the sum of the first N natural numbers raised to the power of M.",
        "The second line should contain the product of the first M prime numbers.",
        "The third line should contain the difference between the sum of the squares of the first N odd numbers and the sum of the squares of the first M even numbers.",
      ],
      Constraints: ["1 ≤ N ≤ 1000", "1 ≤ M ≤ 1000"],
      AnotherExample: {
        SampleInput: ["4", "3"],
        SampleOutput: ["Sum: 1900", "Product: 30", "Difference: 337"],
      },
    },
  ];

  const [VisibleQue, setVisibleQue] = useState(questions[0]);

  return (
    <div
      className="bg-black lg:h-[100%]  w-[100%] h-[50%] overflow-auto poppins-medium  scroll-smooth scrollbar-hide "
      id="slider"
      ref={slideRef}
    >
      <div className="w-[100%] h-[120%]  lg:h-[60%] pl-5">
        <strong className="text-white font-extrabold">
          {`Question ${VisibleQue.id}`}
          <br />
        </strong>
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
        <strong className="text-white font-extrabold">Input Format:</strong>
        <div className="m-5 p-1">
          {VisibleQue.InputFormat.map((data, index) => (
            <p key={index}>{data}</p>
          ))}
        </div>
      </div>

      <div className="w-[100%] lg:h-[40%] h-[40%] pl-5">
        <strong className="text-white font-extrabold">Constrains:</strong>
        <div className="m-5 p-1">
          {VisibleQue.Constraints.map((data, index) => (
            <p key={index}>{data}</p>
          ))}
        </div>
      </div>
      <div className="w-[100%] lg:h-[70%] h-[130%] pl-5">
        <strong className="text-white font-extrabold">Sample Input 0:</strong>
        <div className="bg-[#696969] m-8 rounded-xl p-5 ">
          {VisibleQue.AnotherExample.SampleInput.map((data, index) => (
            <p key={index}>{data}</p>
          ))}
        </div>

        <strong className="text-white font-extrabold">Sample Output 0:</strong>
        <div className="bg-[#696969] m-8 rounded-xl p-5 ">
          {VisibleQue.AnotherExample.SampleOutput.map((data, index) => (
            <p key={index}>{data}</p>
          ))}
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
          onClick={() => {
            handleSubmit(VisibleQue.id);
            setVisibleQue(questions[1]);
            sideToTop();
          }}
        >
          Submit & Next
        </Button>
      </div>
    </div>
  );
}
