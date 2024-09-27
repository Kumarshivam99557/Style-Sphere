import CommonForm from "@/components/common/form";
import { registerFormControls } from "@/config";
import { registerUser } from "@/Store/Auth-Slice";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

const intialState = {
  userName: "",
  email: "",
  password: "",
};
const AuthRegistration = () => {
  const [formData, setFormData] = useState(intialState);
  console.log(formData)
     const dispatch=useDispatch();
     const nevigate = useNavigate();
  function onSubmit(event) {
      event.preventdefault();
      dispatch(registerUser(formData)).then((data)=>{
        console.log(data)
      })
  }
  return (
    <div className="max-auto w-full max-w-md space-y-6">
      <div className="text-center">
        <h1 className="text-3xl font-bold tracking-tight text-foreground">
          Create new account{" "}
        </h1>
        <p className="mt-2">
          Already have an account
          <Link
            className="font-medium ml-2 text-primary hover:underline"
            to="/auth/login"
          >
            Login
          </Link>
        </p>
      </div>
      <CommonForm
        formsControls={registerFormControls}
        buttonText={"Sign Up"}
        formData={formData}
        setFormData={setFormData}
        onSubmit={onSubmit}
      />
    </div>
  );
};

export default AuthRegistration;
