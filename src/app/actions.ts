"use server";

import { headers } from "next/headers";

type SubmitResult = {
  success: boolean;
  message: string;
  recordId?: string;
};

export async function submitWaitlist(email: string): Promise<SubmitResult> {
  const apiKey = process.env.NEXT_PUBLIC_AIRTABLE_API_KEY;
  const baseId = process.env.NEXT_PUBLIC_AIRTABLE_BASE_ID;
  const tableName = process.env.NEXT_PUBLIC_AIRTABLE_TABLE_NAME;

  if (!apiKey || !baseId || !tableName) {
    console.error("Missing Airtable configuration");
    return { success: false, message: "Server configuration error" };
  }

  try {
    const response = await fetch(
      `https://api.airtable.com/v0/${baseId}/${tableName}`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          records: [
            {
              fields: {
                Email: email,
              },
            },
          ],
        }),
      }
    );

    if (!response.ok) {
      const errorData = await response.json();
      console.error("Airtable API error:", errorData);
      throw new Error(`Airtable API error: ${JSON.stringify(errorData)}`);
    }

    const data = await response.json();
    return {
      success: true,
      message: "Email added to waitlist successfully",
      recordId: data.records[0].id,
    };
  } catch (error) {
    console.error("Error adding email to waitlist:", error);
    return {
      success: false,
      message:
        error instanceof Error ? error.message : "Unknown error occurred",
    };
  }
}
