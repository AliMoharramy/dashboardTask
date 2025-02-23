"use client";

import { useState } from "react";
import AddCustomer from "./addCustomer";
import Error from "../error";

export default function AddCustomerBtn() {
  const [isAddCustomer, setIsAddCustomer] = useState(false);
  const [showError, setShowError] = useState(false);

  return (
    <>
      <button
        className="flex bg-blue text-white p-2 rounded-lg items-center"
        onClick={() => setIsAddCustomer(true)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          className="w-4 xl:mr-2"
        >
          <path
            fill="#FFFFFF"
            d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM232 344V280H168c-13.3 0-24-10.7-24-24s10.7-24 24-24h64V168c0-13.3 10.7-24 24-24s24 10.7 24 24v64h64c13.3 0 24 10.7 24 24s-10.7 24-24 24H280v64c0 13.3-10.7 24-24 24s-24-10.7-24-24z"
          />
        </svg>
        <p className="xl:block hidden">Add Customer</p>
      </button>
      {showError && <Error text="server side problems ! , try again later" />}
      {isAddCustomer && (
        <AddCustomer
          cancling={setIsAddCustomer}
          setShowError={setShowError}
          showError={showError}
        />
      )}
    </>
  );
}
