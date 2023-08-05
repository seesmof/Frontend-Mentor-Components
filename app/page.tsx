import Card from "@/components/main/Card";
import Navbar from "@/components/main/Navbar";

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

export default function Home() {
  return (
    <>
      <div className="min-h-screen p-4 md:p-6 bg-slate-900 text-slate-100">
        <div className="flex flex-col mx-auto max-w-4xl">
          <Navbar />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4 pt-4">
            {Projects.map((project) => (
              <Card
                key={project.name}
                link={project.link}
                name={project.name}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
