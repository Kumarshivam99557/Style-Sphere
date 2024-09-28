import CommonForm from "@/components/common/form";
import { useToast } from "@/hooks/use-toast";
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
  // console.log(formData)
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { toast } = useToast();
  function onSubmit(event) {
    event.preventDefault();
    dispatch(registerUser(formData)).then((data) => {
      if (data?.payload?.success) {
        toast({
          title: data?.payload?.message,
        });
        navigate("/auth/login");
      } else {
        toast({
          title: data?.payload?.message,
          variant: "destructive" 
        });
      }
      console.log(data);
    });
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
