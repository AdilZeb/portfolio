import Link from "next/link";
import React from "react";

const Navigation = () => {
  return (
    <header className="max-w-7xl  mx-auto my-2 px-2 rounded-lg flex  py-4">
      <div>
        {" "}
        <h1 className="text-ivory text-3xl">Adil zeb</h1>
      </div>
      <div className="hidden md:block  w-full mx-auto">
        <Link href={"#footer"}>Footer</Link>
      </div>
    </header>
  );
};

export default Navigation;
