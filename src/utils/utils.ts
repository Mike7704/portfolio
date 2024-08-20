"use server";
import { sql } from "@vercel/postgres";

// Fetch projects from database
export async function fetchProjects() {
  try {
    return await sql`
        SELECT * FROM portfolio_projects
      ;`;
  } catch (error) {
    throw new Error("Could not fetch project");
  }
}
