import React from "react";
import CustomInput from "../input/CustomInput";
import Button from "../button/Button";
import { FaFireFlameCurved } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

function SignIn() {
  const navigate = useNavigate();
  return (
    <div className="container grid place-items-center pt-[8%] pb-12">
      <img className="w-[7rem]" src="/logo/nova-logo.png" alt="logo" />
      <h3 className="text-2xl tracking-tighter 880:text-3xl font-semibold text-center text-primary-900 my-6 880:my-8 mx-0">
        Test Your Knowledge
      </h3>
      <p className="text-neutral-700 my-1 880:my-2 font-medium">
        Do you have what it takes to be a top scholar?
      </p>
      <p className="text-neutral-700 my-1 880:my-2 font-medium">
        Win some awesome prizes.
      </p>
      <div className="mt-12 mb-4">
        <CustomInput placeholder="+234" type="tel" />
        <CustomInput placeholder="Password" type="password" />
      </div>
      <Button text="Get Started" onClick={() => navigate("/courses")} />
    </div>
  );
}

export default SignIn;
