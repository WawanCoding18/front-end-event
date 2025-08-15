import { useState } from "react";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ILogin } from "@/types/Auth";
import { useMutation } from "@tanstack/react-query";
import { useRouter, useSearchParams } from "next/navigation";
import { signIn } from "next-auth/react";

// Validation schema for the login form using Yup
const loginSchema = yup.object().shape({
  identifier: yup.string().required("Please input your email or username"),
  password: yup
    .string()
    .min(8, "Password must be at least 8 characters")
    .required("Please input your password"),
});

const useLogin = () => {
  const router = useRouter();
  // State to manage the visibility of password
  const [isVisible, setVisiblity] = useState(false);
  const toggleVisiblity = () => setVisiblity(!isVisible);
  
  // Get the callback URL from search params or default to "/"
  const searchParams = useSearchParams();
  const callbackUrl: string = searchParams.get("callbackUrl") || "/";

  // React Hook Form setup with validation schema
  // Using yupResolver to integrate Yup validation with React Hook Form
  const {
    control,
    handleSubmit,
    formState: { errors },

    // Reset function to clear the form after successful submission
    reset,
    setError,
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  // Function to handle form submission
  const loginService = async (payload: ILogin) => {
    const result = await signIn("credentials",{
        ...payload,
        redirect: false,
        callbackUrl
    })
     if(result?.error){
        throw new Error("Login Failed")
     }
  };

  // Using React Query's useMutation to handle the registration process
  // This allows for better state management and error handling during the API call
  const { mutate: mutateLogin, isPending: isPendingLogin } = useMutation({
    mutationFn: loginService,
    onError(error) {
      setError("root", {
        message: error.message,
      });
    },
    onSuccess: () => {
      router.push(callbackUrl);
      reset();
    },
  });

  const handleLogin = (data: ILogin) => mutateLogin(data);

  return {
    // Exposing the state and function to the component using this hook
    isVisible,
    toggleVisiblity,
    control,
    handleSubmit,
    handleLogin,
    isPendingLogin,
    errors,
  };
};

export default useLogin;
