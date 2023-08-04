import Link from "next/link";
import { Pages, IPage } from "@/components/pages";
import Card from "@/components/main/Card";

export default function Home() {
  return (
    <>
      <div className="min-h-screen mx-auto max-w-4xl p-4 md:p-6 flex flex-col">
        <div className="grid grid-cols-1">
          {Pages.map((page: IPage, index: number) => (
            <Card key={index} page={page} />
          ))}
        </div>
      </div>
    </>
  );
}
