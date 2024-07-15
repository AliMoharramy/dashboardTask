"use client";
import { usePathname, useSearchParams } from "next/navigation";

export default function TableHeader({ sort }: { sort: string }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const sortValue = sort.toString() || "";

  const sortCustomers = (sortBy: string) => {
    const params = new URLSearchParams(searchParams);
    if (sortBy) {
      params.set("sort", sortBy.toString());
    } else {
      params.delete("sort");
    }
    return `${pathname}?${params.toString()}`;
  };

  return (
    <tr>
      <th className="text-left px-5 py-3">
        <input
          type="checkbox"
          className="rounded-lg w-4 h-4 cursor-pointer border border-grayText bg-none"
        />
      </th>
      <th>
        <a
          href={sortCustomers(sortValue === "name" ? "" : "name")}
          className={`${
            sortValue === "name" && "text-black"
          } flex text-left cursor-pointer`}
        >
          NAME
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 320 512"
            className="w-2 mx-2"
          >
            <path
              fill={`${sortValue === "name" ? "#000000" : "#7E8595"}`}
              d="M137.4 41.4c12.5-12.5 32.8-12.5 45.3 0l128 128c9.2 9.2 11.9 22.9 6.9 34.9s-16.6 19.8-29.6 19.8H32c-12.9 0-24.6-7.8-29.6-19.8s-2.2-25.7 6.9-34.9l128-128zm0 429.3l-128-128c-9.2-9.2-11.9-22.9-6.9-34.9s16.6-19.8 29.6-19.8H288c12.9 0 24.6 7.8 29.6 19.8s2.2 25.7-6.9 34.9l-128 128c-12.5 12.5-32.8 12.5-45.3 0z"
            />
          </svg>
        </a>
      </th>
      <th className="text-left">DESCRIPTION</th>
      <th>RATE</th>
      <th>BALANCE</th>
      <th>DEPOSIT</th>
      <th>
        <a
          href={sortCustomers(sortValue === "status" ? "" : "status")}
          className={`${
            sortValue === "status" && "text-black"
          } flex items-center justify-center cursor-pointer`}
        >
          STATUS
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 320 512"
            className="w-2 mx-2"
          >
            <path
              fill={`${sortValue === "status" ? "#000000" : "#7E8595"}`}
              d="M137.4 41.4c12.5-12.5 32.8-12.5 45.3 0l128 128c9.2 9.2 11.9 22.9 6.9 34.9s-16.6 19.8-29.6 19.8H32c-12.9 0-24.6-7.8-29.6-19.8s-2.2-25.7 6.9-34.9l128-128zm0 429.3l-128-128c-9.2-9.2-11.9-22.9-6.9-34.9s16.6-19.8 29.6-19.8H288c12.9 0 24.6 7.8 29.6 19.8s2.2 25.7-6.9 34.9l-128 128c-12.5 12.5-32.8 12.5-45.3 0z"
            />
          </svg>
        </a>
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
  );
}
