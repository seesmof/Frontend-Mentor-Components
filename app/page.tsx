import Card from "@/components/main/Card";
import Navbar from "@/components/main/Navbar";

export default function Home() {
  return (
    <>
      <div className="min-h-screen p-4 md:p-6 bg-slate-900 text-slate-100">
        <div className="flex flex-col mx-auto max-w-4xl">
          <Navbar />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4 pt-4">
            <Card link="/chat-app-css-illustration" name="Chat App" />
            <Card
              link="/clipboard-landing-page"
              name="Clipboard Landing Page"
            />
            <Card
              link="/fylo-data-storage-component"
              name="Fylo Data Storage"
            />
            <Card
              link="/product-preview-card-component"
              name="Product Preview Card"
            />
            <Card link="/qr-code-component" name="QR Code" />
            <Card link="/testimonials-grid-section" name="Testimonials Grid" />
            <Card
              link="/newsletter-sign-up-with-success-message-component"
              name="Newsletter Sign Up Form"
            />
          </div>
        </div>
      </div>
    </>
  );
}
