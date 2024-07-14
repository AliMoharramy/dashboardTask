"use client";
import { useState } from "react";
import { customer } from "../lib/definition";
import CustomerData from "./customerData";
import sortOn from "sort-on";

export default function DataTable({
  customers,
}: {
  customers: Array<customer>;
}) {
  const [sort, setSort] = useState("default");
  const byNames = sortOn(customers, "firstname");
  const byStatus = sortOn(customers, "status");

  return (
    <table className="table-auto customer-table w-full rounded-b-lg">
      <thead className="bg-tableTop text-grayText">
        <tr>
          <th className="text-left px-5 py-3">
            <input
              type="checkbox"
              className="rounded-lg w-4 h-4 cursor-pointer border border-grayText bg-none"
            />
          </th>
          <th>
            <div
              className={`${
                sort === "name" && "text-black"
              } flex text-left cursor-pointer`}
              onClick={() => setSort(sort !== "name" ? "name" : "default")}
            >
              NAME
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
                className="w-2 mx-2"
              >
                <path
                  fill={`${sort === "name" ? "#000000" : "#7E8595"}`}
                  d="M137.4 41.4c12.5-12.5 32.8-12.5 45.3 0l128 128c9.2 9.2 11.9 22.9 6.9 34.9s-16.6 19.8-29.6 19.8H32c-12.9 0-24.6-7.8-29.6-19.8s-2.2-25.7 6.9-34.9l128-128zm0 429.3l-128-128c-9.2-9.2-11.9-22.9-6.9-34.9s16.6-19.8 29.6-19.8H288c12.9 0 24.6 7.8 29.6 19.8s2.2 25.7-6.9 34.9l-128 128c-12.5 12.5-32.8 12.5-45.3 0z"
                />
              </svg>
            </div>
          </th>
          <th className="text-left">DESCRIPTION</th>
          <th>RATE</th>
          <th>BALANCE</th>
          <th>DEPOSIT</th>
          <th>
            <div
              className={`${
                sort === "status" && "text-black"
              } flex items-center justify-center cursor-pointer`}
              onClick={() => setSort(sort !== "status" ? "status" : "default")}
            >
              STATUS
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
                className="w-2 mx-2"
              >
                <path
                  fill={`${sort === "status" ? "#000000" : "#7E8595"}`}
                  d="M137.4 41.4c12.5-12.5 32.8-12.5 45.3 0l128 128c9.2 9.2 11.9 22.9 6.9 34.9s-16.6 19.8-29.6 19.8H32c-12.9 0-24.6-7.8-29.6-19.8s-2.2-25.7 6.9-34.9l128-128zm0 429.3l-128-128c-9.2-9.2-11.9-22.9-6.9-34.9s16.6-19.8 29.6-19.8H288c12.9 0 24.6 7.8 29.6 19.8s2.2 25.7-6.9 34.9l-128 128c-12.5 12.5-32.8 12.5-45.3 0z"
                />
              </svg>
            </div>
          </th>
          <th>
            <div className="flex justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                className="w-5"
              >
                <path
                  fill="#7E8595"
                  d="M8 256a56 56 0 1 1 112 0A56 56 0 1 1 8 256zm160 0a56 56 0 1 1 112 0 56 56 0 1 1 -112 0zm216-56a56 56 0 1 1 0 112 56 56 0 1 1 0-112z"
                />
              </svg>
            </div>
          </th>
        </tr>
      </thead>
      <tbody>
        {sort === "default" &&
          Array.from({ length: customers.length }, (_, i) => (
            <CustomerData customer={customers[i]} key={i} />
          ))}
        {sort === "name" &&
          Array.from({ length: customers.length }, (_, i) => (
            <CustomerData customer={byNames[i]} key={i} />
          ))}
        {sort === "status" &&
          Array.from({ length: customers.length }, (_, i) => (
            <CustomerData customer={byStatus[i]} key={i} />
          ))}
      </tbody>
    </table>
  );
}
