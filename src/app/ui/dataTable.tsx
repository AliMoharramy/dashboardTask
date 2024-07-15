import CustomerData from "./customerData";
import sortOn from "sort-on";
import { fetchCustomersPages, fetchFilteredCustomers } from "../lib/data";
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
  const customers = await fetchFilteredCustomers(query, currentPage);
  const totalPage = await fetchCustomersPages(query);
  const sortValue = sort.toString() || "";
  const byNames = sortOn(customers, "firstname");
  const byStatus = sortOn(customers, "status");

  return (
    <>
      <table className="table-auto customer-table w-full rounded-b-lg">
        <thead className="bg-tableTop text-grayText">
          <TableHeader sort={sort} />
        </thead>
        <tbody>
          {sortValue === "" &&
            Array.from({ length: customers.length }, (_, i) => (
              <CustomerData customer={customers[i]} key={i} />
            ))}
          {sortValue === "name" &&
            Array.from({ length: customers.length }, (_, i) => (
              <CustomerData customer={byNames[i]} key={i} />
            ))}
          {sortValue === "status" &&
            Array.from({ length: customers.length }, (_, i) => (
              <CustomerData customer={byStatus[i]} key={i} />
            ))}
        </tbody>
      </table>
      <Pagination totalPages={totalPage} customerNum={customers.length} />
    </>
  );
}
