import Header from "./ui/header";
import SearchBox from "./ui/customers-table/searchBox";
import DataTable from "./ui/customers-table/dataTable";
import SideNavbar from "./ui/sideNavbar";
import AddCustomerBtn from "./ui/customers-table/addCustomerBtn";

export default async function Page({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
    sort?: string;
  };
}) {
  const query = searchParams?.query || "";
  const sort = searchParams?.sort || "";
  const currentPage = Number(searchParams?.page) || 1;

  return (
    <>
      <Header />
      <main className="flex flex-row h-85vh">
        <SideNavbar />
        <div className="w-full rounded-lg mx-6 mb-3 mt-5 border-navborderColor">
          <div className="bg-tableTop flex justify-between p-4 rounded-t-lg">
            <SearchBox />
            <AddCustomerBtn />
          </div>
          <DataTable query={query} currentPage={currentPage} sort={sort} />
        </div>
      </main>
    </>
  );
}
