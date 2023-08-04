import React from "react";
import { Pages, IPage } from "@/components/pages";

interface Props {
  page: IPage;
}

const Card = ({ page }: Props) => {
  return (
    <>
      <div className="border border-slate-400 rounded-md group">
        <img
          src={`${page.link}/img/desktop.png`}
          className="h-60 w-full object-cover object-top duration-1000 group-hover:object-bottom"
          alt=""
        />
      </div>
    </>
  );
};

export default Card;
