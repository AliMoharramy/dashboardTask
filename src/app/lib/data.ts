import { sql } from "@vercel/postgres";
import { unstable_noStore as noStore } from "next/cache";
import { customer } from "./definition";
import { updateDescription } from "./action";
import { redirect } from "next/navigation";

export async function fetchCustomers() {
  noStore();
  try {
    const data = await sql<customer>`
    SELECT * FROM customers
    `;
    const allcustomers = data.rows.map((customer) => ({
      ...customer,
    }));
    return allcustomers;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch the customers.");
  }
}

export function validateData(formData: FormData) {
  console.log(formData);
}

const ITEMS_PER_PAGE = 7;
export async function fetchFilteredCustomers(
  query: string,
  currentPage: number
) {
  const offset = (currentPage - 1) * ITEMS_PER_PAGE;
  noStore();
  try {
    const customers = await sql<customer>`
    SELECT * FROM customers
    WHERE customers.firstname ILIKE ${`%${query}%`}
    LIMIT ${ITEMS_PER_PAGE} OFFSET ${offset}
  `;

    return customers.rows;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch customers.");
  }
}

export async function fetchCustomersPages(query: string) {
  noStore();
  try {
    const count = await sql<customer>`
    SELECT * FROM customers
    WHERE customers.firstname ILIKE ${`%${query}%`}
  `;

    const totalPages = Math.ceil(Number(count.rows.length) / ITEMS_PER_PAGE);
    return totalPages;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch customers.");
  }
}

export async function fetchSortedCustomers(
  query: string,
  currentPage: number,
  sort: string
) {
  const offset = (currentPage - 1) * ITEMS_PER_PAGE;
  noStore();
  try {
    const customers =
      sort === "name"
        ? await sql<customer>`
    SELECT * FROM customers
    WHERE customers.firstname ILIKE ${`%${query}%`}
    ORDER BY customers.firstname
    LIMIT ${ITEMS_PER_PAGE} OFFSET ${offset}
  `
        : await sql<customer>`
  SELECT * FROM customers
  WHERE customers.firstname ILIKE ${`%${query}%`}
  ORDER BY customers.status
  LIMIT ${ITEMS_PER_PAGE} OFFSET ${offset}
`;

    return customers.rows;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch customers.");
  }
}

export async function editDescription(customerID: number, formData: FormData) {
  const description = formData.get("description")?.toString() || "";
  await updateDescription(customerID, description);
  redirect(".");
}
