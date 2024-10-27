import { Metadata } from "next";
import { generateBaseMetadata } from "../../utils/metadata";
import WaitlistForm from "../../sections/waitlist-form";

export const metadata: Metadata = generateBaseMetadata("Waitlist");

export default function WaitlistPage() {
  return <WaitlistForm />;
}
