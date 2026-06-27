import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/jack/Navbar";
import { ContactSection } from "@/components/jack/ContactSection";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Abhay Sengar — Data Analyst" },
      {
        name: "description",
        content:
          "Contact Abhay Sengar for data analyst roles, internships, freelance analytics work, SQL, Python, Power BI and dashboard projects.",
      },
      { property: "og:title", content: "Contact Abhay Sengar — Data Analyst" },
      {
        property: "og:description",
        content:
          "Email, phone, LinkedIn and GitHub links for Abhay Sengar's data analyst portfolio.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <main style={{ overflowX: "clip" }}>
      <Navbar />
      <ContactSection />
    </main>
  );
}