import CustomerData from "./customerData";

import {
  fetchCustomersPages,
  fetchFilteredCustomers,
  fetchSortedCustomers,
} from "../../lib/data";
import Pagination from "./pagination";
import TableHeader from "./tableHeader";

export default async function DataTable({
  query,
  currentPage,
  sort,
}: {
  query: string;
  currentPage: number;
  sort: string;
}) {
  const totalPage = await fetchCustomersPages(query);
  const sortValue = sort.toString() || "";
  const customers = sortValue
    ? await fetchSortedCustomers(query, currentPage, sortValue)
    : await fetchFilteredCustomers(query, currentPage);
  return (
    <>
      <table className="table-auto customer-table w-full h-80vh xl:h-auto rounded-b-lg">
        <thead className="bg-tableTop text-grayText">
          <TableHeader sort={sort} />
        </thead>
        <tbody>
          {/* Create a row for each custmor */}
          {Array.from({ length: customers.length }, (_, i) => (
            <CustomerData customer={customers[i]} key={i} />
          ))}
        </tbody>
      </table>
      <Pagination totalPages={totalPage} customerNum={customers.length} />
    </>
  );
}
