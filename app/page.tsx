import Link from "next/link";
import Card from "@/components/main/Card";

export default function Home() {
  return (
    <>
      <div className="min-h-screen p-4 md:p-6 bg-slate-900 text-slate-50">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4 mx-auto max-w-4xl">
          <Card link="/chat-app-css-illustration" name="Chat App" />
          <Card link="/clipboard-landing-page" name="Clipboard Landing Page" />
          <Card link="/fylo-data-storage-component" name="Fylo Data Storage" />
          <Card
            link="/product-preview-card-component"
            name="Product Preview Card"
          />
          <Card link="/qr-code-component" name="QR Code" />
          <Card link="/testimonials-grid-section" name="Testimonials Grid" />
        </div>
      </div>
    </>
  );
}
