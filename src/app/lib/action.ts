"use server";
import { sql } from "@vercel/postgres";
import { unstable_noStore as noStore } from "next/cache";

export async function updateDescription(
  customerID: number,
  description: string
) {
  noStore();
  try {
    await sql`
      UPDATE customers
      SET description = ${description}
      WHERE id = ${customerID}; 
    `;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to Update description ");
  }
}
