import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input"

import Image from "next/image";

export default function Home() {
  const tipPercentages = [5, 10, 15, 25, 50];
  return (
    <main className="flex flex-col items-center justify-start">
      <h1 className="flex-grow-0 text-3xl p-10  font-bold">S P L I <br />T T E R</h1>


      <div className="bg-white rounded-lg shadow-lg p-8 w-full ">

        <div className="mb-8">
          <label htmlFor="billAmount" className="block text-sm font-bold">Bill</label>

          <div className="mt-2 flex items-center rounded-md shadow-sm">

            <Input
              type="number"
              id="billAmount"
              className="text-right text-very-dark-cyan font-bold text-xl focus-visible:ring-white border-very-light-grayish-cyan focus-visible:border-2 focus-visible:border-cyan flex-grow  w-full rounded-md"
              placeholder="0"
            />
          </div>

        </div>

        <div className="mb-8">
          <span className="block text-sm font-bold">Select Tip %</span>
          <div className="mt-4 grid sm:grid-cols-3 grid-cols-2 gap-2">
            {tipPercentages.map((percentage) => (
              <Button key={percentage} className="bg-very-dark-cyan hover:bg-cyan text-white py-2 rounded font-bold text-xl hover:text-very-dark-cyan">{percentage}%</Button>
            ))}
            <Input type="number"
              className="bg-very-light-grayish-cyan 
              text-right 
              text-very-dark-cyan 
              font-bold 
              text-xl 
              focus-visible:ring-white 
              border-very-light-grayish-cyan 
              focus-visible:border-2 
              focus-visible:border-cyan 
              flex-grow  w-full rounded-md"
              placeholder="Custom" />
          </div>
        </div>

        <div className="mb-8">
          <label htmlFor="numberOfPeople" className="block text-sm font-bold">Number of People</label>
          <Input type="number" id="numberOfPeople"
            className="
            mt-2
            bg-very-light-grayish-cyan 
            
            text-right 
            text-very-dark-cyan 
            font-bold 
            text-xl 
            focus-visible:ring-white 
            border-very-light-grayish-cyan 
            focus-visible:border-2 
            focus-visible:border-cyan 
            rounded-md"
              
              placeholder="1" />
        </div>

        <div className="bg-very-dark-cyan text-white p-8 rounded-lg">
          <div className="flex justify-between">
            <div className="flex flex-col justify-between">
              <span className="block text-sm font-medium">Tip Amount</span>
              <span className="block text-xs font-extralight text-grayish-cyan">/ person</span>
            </div>
            <div className="text-3xl font-bold text-cyan">$4.27</div>
          </div>
          <div className="flex justify-between mt-4">
            <div className="flex flex-col justify-between">
              <span className="block text-sm font-medium">Total</span>
              <span className="block text-xs text-grayish-cyan">/ person</span>
            </div>
            <div className="text-3xl font-bold text-cyan ">$32.79</div>
          </div>
          <Button className="mt-8 w-full text-xl bg-cyan text-very-dark-cyan py-2 font-extrabold rounded hover:bg-teal-600">RESET</Button>
        </div>

      </div>
    </main >
  );
}
