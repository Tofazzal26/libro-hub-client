import Image from "next/image";
import React from "react";

const NotFound = () => {
  return (
    <div className="text-center py-5 lg:py-10">
      <div className="">
        <div className="flex justify-center items-center">
          <Image
            src={"/notfound.jpg"}
            width={400}
            height={400}
            alt="not-found"
          />
        </div>
        <h2 className="text-4xl">{"We've"} lost this page</h2>
        <p>
          Sorry, the page you are looking for {"doesn't"} exist or has been
          moved.
        </p>
      </div>
    </div>
  );
};

export default NotFound;
