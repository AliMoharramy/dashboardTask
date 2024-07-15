"use client";

import { usePathname, useSearchParams } from "next/navigation";

export default function Pagination({
  totalPages,
  customerNum,
}: {
  totalPages: number;
  customerNum: number;
}) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get("page")) || 1;

  const createPageURL = (pageNumber: number | string) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", pageNumber.toString());
    return `${pathname}?${params.toString()}`;
  };

  return (
    <>
      <div className="flex justify-between xl:flex-row flex-col px-5 xl:mt-10 mt-5 xl:pb-0 pb-10">
        <div className="flex gap-8 justify-between mb-5 xl:mb-0">
          <a
            className="flex items-center cursor-pointer"
            href={createPageURL(
              currentPage <= 1 ? currentPage : currentPage - 1
            )}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 320 512"
              className="w-2 mr-1"
            >
              <path d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
            </svg>
            <p className="text-sm">Prev</p>
          </a>
          <a
            className="flex items-center cursor-pointer"
            href={createPageURL(
              currentPage >= totalPages ? currentPage : currentPage + 1
            )}
          >
            <p className="text-sm">Next</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 320 512"
              className="w-2 ml-1"
            >
              <path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" />
            </svg>
          </a>
        </div>
        <div className="flex -space-x-px">
          <p className="text-sm">
            showing
            <span className="font-bold"> {customerNum}</span> customers of
            <span className="font-bold"> page {currentPage}</span>
          </p>
        </div>
      </div>
    </>
  );
}
