import { sql } from "@vercel/postgres";
import { unstable_noStore as noStore } from "next/cache";
import { customer } from "./definition";

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
