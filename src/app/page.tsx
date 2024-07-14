import Image from "next/image";
import Header from "./ui/header";
import SearchBox from "./ui/searchBox";
import AddCustomer from "./ui/addCustomer";
import DataTable from "./ui/dataTable";
import SideNavbar from "./ui/sideNavbar";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex flex-row h-85vh">
        <SideNavbar />
        <div className="w-full rounded-lg mx-6 mb-16 border border-borderColor">
          <div className="bg-tableTop flex justify-between p-4 rounded-t-lg">
            <SearchBox />
            <AddCustomer />
          </div>
          <DataTable />
        </div>
      </main>
    </>
  );
}
