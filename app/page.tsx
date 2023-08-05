import Gallery from "@/components/Gallery";

export default function Home() {
  const Projects = [
    {
      name: "Chat App",
      link: "/chat-app-css-illustration",
    },
    {
      name: "Clipboard Landing Page",
      link: "/clipboard-landing-page",
    },
    {
      name: "Fylo Data Storage",
      link: "/fylo-data-storage-component",
    },
    {
      name: "Product Preview Card",
      link: "/product-preview-card-component",
    },
    {
      name: "QR Code",
      link: "/qr-code-component",
    },
    {
      name: "Testimonials Grid",
      link: "/testimonials-grid-section",
    },
    {
      name: "Newsletter Sign Up Form",
      link: "/newsletter-sign-up-with-success-message-component",
    },
  ];

  return (
    <>
      <Gallery Projects={Projects} />
    </>
  );
}
