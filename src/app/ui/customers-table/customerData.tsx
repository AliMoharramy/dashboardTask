"use client";
import { useState } from "react";
import { customer } from "../../lib/definition";
import Status from "./status";
import { editDescription } from "../../lib/data";

export default function CustomerData({ customer }: { customer: customer }) {
  const [isEditind, setIsEditing] = useState(false);
  const [isOptionOpen, setIsOptionsOpen] = useState(false);

  function closeEdit() {
    setTimeout(() => setIsEditing(false), 300);
  }

  const balance =
    customer.balance == 0
      ? "text-grayText"
      : customer.balance > 0
      ? "text-green"
      : "text-red";
  return (
    <tr className="relative">
      <td className="p-5 mobilehidden">
        <input type="checkbox" className="rounded-lg w-4 h-4 cursor-pointer" />
      </td>
      <td>
        <div className="ml-5 xl:ml-0">
          <p>{`${customer.firstname} ${customer.lastname}`}</p>
          <p className="text-grayText text-xs">{customer.id}</p>
        </div>
      </td>
      <td className="relative mobilehidden" onClick={() => setIsEditing(true)}>
        <p className="cursor-cell description-text w-72">
          {customer.description}
        </p>
        {isEditind && (
          <form
            action={(e) => editDescription(customer.id, e)}
            className="absolute border popup-center w-full flex justify-between rounded-lg"
          >
            <button className="p-3 bg-white" type="button" onClick={closeEdit}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
                className="w-3 bg-white"
              >
                <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
              </svg>
            </button>
            <input
              type="text"
              className="w-full"
              maxLength={249}
              name="description"
            />
            <button className="p-3 bg-white" type="submit">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                className="w-3"
              >
                <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
              </svg>
            </button>
          </form>
        )}
      </td>
      <td className="text-center mobilehidden">{customer.rate}</td>
      <td className={`${balance} text-center mobilehidden`}>
        {customer.balance}
      </td>
      <td className="text-center mobilehidden">{customer.deposit}</td>
      <td>
        <div className="flex justify-center">
          <Status value={customer.status} />
        </div>
      </td>
      <td>
        <div className="flex justify-center ">
          {/* use popup items in mobile */}
          <div
            className={` ${
              isOptionOpen ? "flex" : "hidden"
            } flex-col xl:hidden absolute mr-2 top-0 gap-2 h-full items-center justify-center`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              className="w-4  cursor-pointer [&>path]:fill-grayText [&:hover>path]:fill-black"
            >
              <path d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 384 512"
              onClick={() => setIsOptionsOpen(false)}
              className="w-4 cursor-pointer [&>path]:fill-grayText [&:hover>path]:fill-black"
            >
              <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              className="w-4  mx-2 cursor-pointer [&>path]:fill-grayText [&:hover>path]:fill-black"
            >
              <path d="M135.2 17.7C140.6 6.8 151.7 0 163.8 0H284.2c12.1 0 23.2 6.8 28.6 17.7L320 32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 96 0 81.7 0 64S14.3 32 32 32h96l7.2-14.3zM32 128H416V448c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V128zm96 64c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16z" />
            </svg>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            className="w-4 mobilehidden cursor-pointer [&>path]:fill-grayText [&:hover>path]:fill-black"
          >
            <path d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z" />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            className="w-4 mobilehidden mx-2 cursor-pointer [&>path]:fill-grayText [&:hover>path]:fill-black"
          >
            <path d="M135.2 17.7C140.6 6.8 151.7 0 163.8 0H284.2c12.1 0 23.2 6.8 28.6 17.7L320 32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 96 0 81.7 0 64S14.3 32 32 32h96l7.2-14.3zM32 128H416V448c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V128zm96 64c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16z" />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            onClick={() => setIsOptionsOpen(true)}
            className={`${
              isOptionOpen ? "hidden" : "flex"
            } xl:flex w-5 cursor-pointer mr-2 xl:mr-0 [&>path]:fill-grayText [&:hover>path]:fill-black`}
          >
            <path d="M8 256a56 56 0 1 1 112 0A56 56 0 1 1 8 256zm160 0a56 56 0 1 1 112 0 56 56 0 1 1 -112 0zm216-56a56 56 0 1 1 0 112 56 56 0 1 1 0-112z" />
          </svg>
        </div>
      </td>
    </tr>
  );
}
