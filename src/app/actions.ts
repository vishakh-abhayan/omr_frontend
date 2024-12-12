"use server";

type SubmitResult = {
  success: boolean;
  message: string;
  recordId?: string;
};

export async function submitWaitlist(email: string): Promise<SubmitResult> {
  const scriptUrl = process.env.GOOGLE_SCRIPT_URL;

  if (!scriptUrl) {
    console.error("Missing Google Script URL configuration");
    return { success: false, message: "Server configuration error" };
  }

  try {
    const response = await fetch(scriptUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
      }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return {
      success: data.success,
      message: data.message,
      recordId: data.recordId,
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
