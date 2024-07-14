"use client";

import { useState } from "react";
import ProgressBar from "./progresBar";

export default function AddCustomer({
  cancling,
  showError,
  setShowError,
}: {
  cancling: Function;
  setShowError: Function;
  showError: boolean;
}) {
  const [step, setStep] = useState(0);
  function cancleAdd() {
    cancling(false);
  }
  function submitData(e: any) {
    cancling(false);
    setShowError(true);
    setTimeout(() => setShowError(false), 2000);
    console.log(e);
  }
  return (
    <div className="w-full h-full fixed top-0 left-0 bg-blur">
      <div className="bg-white rounded-lg popup-center fixed">
        <p className="font-bold text-lg mb-8 bg-tableTop p-5 rounded-t-lg text-grayText">
          New Customer
        </p>
        <form action={(e) => submitData(e)}>
          <div className={`${step === 0 ? "flex" : "hidden"} px-5 gap-5`}>
            <div className="flex flex-col">
              <label htmlFor="firstname">FirstName :</label>
              <input type="text" className="rounded-lg border p-2 mt-2 mb-5" />
            </div>
            <div className="flex flex-col">
              <label htmlFor="lastname">LastName :</label>
              <input type="text" className="rounded-lg border p-2 mt-2 mb-5" />
            </div>
          </div>

          <div className={`${step === 1 ? "flex" : "hidden"} px-5 gap-5`}>
            <div className="flex flex-col">
              <label htmlFor="firstname">Rate :</label>
              <input
                type="number"
                className="rounded-lg border p-2 mt-2 mb-5"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="lastname">Balance :</label>
              <input
                type="number"
                className="rounded-lg border p-2 mt-2 mb-5"
              />
            </div>
          </div>

          <div
            className={`${
              step === 2 ? "grid" : "hidden"
            } grid-cols-2 px-5 gap-5`}
          >
            <div className="flex flex-col">
              <label htmlFor="firstname">Deposit :</label>
              <input
                required
                type="number"
                className="rounded-lg border p-2 mt-2 mb-5"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="lastname">Status :</label>
              <select
                name="status"
                className="rounded-lg border p-2 mt-2 mb-5 bg-white cursor-pointer"
              >
                <option value="active" selected>
                  active
                </option>
                <option value="inactive">inactive</option>
              </select>
            </div>
            <div className="flex flex-col col-span-2">
              <label htmlFor="discription">Description :</label>
              <textarea
                name="discription"
                className="rounded-lg border p-2 mt-2 mb-5 h-32"
                maxLength={249}
              ></textarea>
            </div>
          </div>
          <ProgressBar setStep={setStep} step={step} />
        </form>
      </div>
      <button className="fixed mt-6 mr-8 right-0" onClick={cancleAdd}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 384 512"
          className="w-8"
        >
          <path
            fill="#FFFFFF"
            d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"
          />
        </svg>
      </button>
    </div>
  );
}
