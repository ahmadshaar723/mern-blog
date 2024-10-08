import { Button } from "flowbite-react";
import React from "react";

const CallToAction = () => {
  return (
    <div className="flex flex-col gap-3 sm:flex-row p-3 border mt-5 border-teal-500 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center">
      <div className="flex-1 justify-center flex flex-col gap-2 ">
        <h2 className="text-2xl">
            Want to learn more about JavaScript
        </h2>
        <p className="text-gray-500 my-2">
            Checkout these resources with 100 JavaScript Projects
        </p>
        <Button gradientDuoTone='purpleToPink' className="rounded-tl-xl rounded-bl-none rounded-br-xl rounded-tr-none "><a href="https://www.100jsprojects.com" target="_blank" rel="noopener noreferrer">100 JavaScript Projects</a></Button>
      </div>
      <div className="flex-1">
        <img src="https://radicalhub.com/wp-content/uploads/2018/07/javascript.jpg" />
      </div>
    </div>
  );
};

export default CallToAction;
