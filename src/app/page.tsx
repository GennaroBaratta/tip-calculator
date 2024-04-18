"use client"

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input"

import Image from "next/image";
import { Dispatch, SetStateAction, useState } from "react";

export default function Home() {
  const tipPercentages = [5, 10, 15, 25, 50];
  const [billAmount, setBillAmount] = useState(0);
  const [tipPercentage, setTipPercentage] = useState(0);
  const [numberOfPeople, setNumberOfPeople]: [number, Dispatch<SetStateAction<number>> | Dispatch<SetStateAction<null>>] = useState(1);
  const [customTip, setCustomTip] = useState(0);
  return (
    <main className="flex flex-col items-center justify-start">
      <h1 className="flex-grow-0 text-3xl p-12  font-bold">S P L I <br />T T E R</h1>


      <div className="bg-white rounded-lg shadow-lg p-8 w-full ">

        <div className="mb-8">
          <label htmlFor="billAmount" className="block text-sm font-bold">Bill</label>

          <div className="mt-2 flex items-center rounded-md shadow-sm">

            <Input
              type="number"
              id="billAmount"
              className="text-right text-very-dark-cyan font-bold text-xl focus-visible:ring-white border-very-light-grayish-cyan focus-visible:border-2 focus-visible:border-cyan flex-grow  w-full rounded-md"
              onChange={(event) => { setBillAmount(Number(event.target.value)) }}
              value={billAmount}
            />
          </div>

        </div>

        <div className="mb-8">
          <span className="block text-sm font-bold">Select Tip %</span>
          <div className="mt-4 grid sm:grid-cols-3 grid-cols-2 gap-2">
            {tipPercentages.map((percentage) => (
              <Button
                onClick={() => { setTipPercentage(percentage) }}
                key={percentage}
                className={`hover:bg-cyan py-2 rounded font-bold text-xl hover:text-very-dark-cyan
                ${percentage === tipPercentage ? 'bg-teal-200 text-very-dark-cyan' : 'bg-very-dark-cyan  text-white'}
                
                `}

              >{percentage}%</Button>
            ))}
            <Input type="number"
              className={`hover:bg-cyan py-2 rounded font-bold text-xl hover:text-very-dark-cyan 
              text-right text-very-dark-cyan  focus-visible:ring-white border-very-light-grayish-cyan focus-visible:border-2 focus-visible:border-cyan flex-grow  w-full 
              ${customTip === tipPercentage ? 'bg-teal-200 text-very-dark-cyan' : 'bg-very-dark-cyan  text-white'}
               
               `}
              value={customTip}
              placeholder="Custom"
              onChange={(event) => {
                if (Number(event.target.value) > 0) {
                  setTipPercentage(Number(event.target.value))
                  setCustomTip(Number(event.target.value))
                }
              }}
              onClick={() => { setTipPercentage(customTip) }}
            />
          </div>
        </div>

        <div className="mb-8">
          <label htmlFor="numberOfPeople" className="block text-sm font-bold">Number of People
            {numberOfPeople === 0 && <span className="text-red-500 text-xs font-bold float-end">Can't be zero</span>}
          </label>
          <Input type="number" id="numberOfPeople"
            className={`
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
            rounded-md

            ${numberOfPeople === 0 ? 'border-red-500 border-2' : 'border-very-light-grayish-cyan'}
            `}
            onChange={(event) => {
              if (!!event.target.value) {
                setNumberOfPeople(Math.floor(Number(event.target.value)))
              } else {
                setNumberOfPeople(null)
              }
            }}
            value={numberOfPeople}
          />
        </div>

        <div className="bg-very-dark-cyan text-white p-8 rounded-lg">
          <div className="flex justify-between">
            <div className="flex flex-col justify-between">
              <span className="block text-sm font-medium">Tip Amount</span>
              <span className="block text-xs font-extralight text-grayish-cyan">/ person</span>
            </div>
            <div className="text-3xl font-bold text-cyan">${numberOfPeople !== 0 ? (billAmount * tipPercentage * 0.01 / numberOfPeople).toFixed(2) : 0}</div>
          </div>
          <div className="flex justify-between mt-4">
            <div className="flex flex-col justify-between">
              <span className="block text-sm font-medium">Total</span>
              <span className="block text-xs text-grayish-cyan">/ person</span>
            </div>
            <div className="text-3xl font-bold text-cyan ">${numberOfPeople !== 0 ? (billAmount / numberOfPeople).toFixed(2) : 0}</div>
          </div>
          <Button className="mt-8 w-full text-xl bg-cyan text-very-dark-cyan py-2 font-extrabold rounded hover:bg-teal-600"
            onClick={() => {
              setBillAmount(0)
              setTipPercentage(0)
              setNumberOfPeople(1)
              setCustomTip(0)
            }}>RESET</Button>
        </div>

      </div>
    </main >
  );
}
