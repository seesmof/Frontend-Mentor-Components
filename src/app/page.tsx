import Gallery from "@/components/Gallery";

export interface Project {
  name: string;
  href: string;
}

const projects: Project[] = [
  {
    name: "Chat App",
    href: "/chat-app-css-illustration",
  },
  {
    name: "Clipboard Landing Page",
    href: "/clipboard-landing-page",
  },
  {
    name: "Fylo Data Storage",
    href: "/fylo-data-storage-component",
  },
  {
    name: "Product Preview Card",
    href: "/product-preview-card-component",
  },
  {
    name: "QR Code",
    href: "/qr-code-component",
  },
  {
    name: "Testimonials Grid",
    href: "/testimonials-grid-section",
  },
  {
    name: "Newsletter Sign Up Form",
    href: "/newsletter-sign-up-with-success-message-component",
  },
];

export default function Home() {
  return (
    <>
      <Gallery projects={projects} />
    </>
  );
}
