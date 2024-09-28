import CommonForm from "@/components/common/form";
import { loginFormControls } from "@/config";
import { loginUser } from "@/Store/Auth-Slice";
import { useToast } from "@/hooks/use-toast"
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const intialState = {
  email: "",
  password: "",
};
const AuthLogin = () => {
  const [formData, setFormData] = useState(intialState);
  const dispatch = useDispatch();
  const { toast } = useToast()
  // console.log(formData)
  function onSubmit(event) {
      event.preventDefault();
     dispatch(loginUser(formData)).then((data)=>{
      if(data?.payload?.success){
        toast({
          title: data?.payload?.message,
          
        })
      }else{
        toast({
          title: data?.payload?.message,
          variant: "destructive"
        })
      }
      console.log("after login",data)
     })
  }
  return (
    <div className="max-auto w-full max-w-md space-y-6">
      <div className="text-center">
        <h1 className="text-3xl font-bold tracking-tight text-foreground">
          Sign in your account 
        </h1>
        <p className="mt-2">
          Don't have an account
          <Link
            className="font-medium ml-2 text-primary hover:underline"
            to="/auth/registration"
          >
            Register
          </Link>
        </p>
      </div>
      <CommonForm
        formsControls={loginFormControls}
        buttonText={"Sign in"}
        formData={formData}
        setFormData={setFormData}
        onSubmit={onSubmit}
      />
    </div>
  );
};

export default AuthLogin;


// github checking purpouse
