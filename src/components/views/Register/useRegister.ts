// import { useState } from "react";
// import * as yup from "yup";
// import { useForm } from "react-hook-form";
// import { yupResolver } from "@hookform/resolvers/yup";
// import { IRegister } from "../../../types/Auth";
// import authService from "../../../services/auth.service";
// import { useMutation } from "@tanstack/react-query";
// import { useRouter } from "next/navigation";

// // Validation schema for the registration form using Yup
// const registerSchema = yup.object().shape({
//   fullName: yup.string().required("Please input your fullname"),
//   username: yup.string().required("Please input your username"),
//   email: yup
//     .string()
//     .email("Email format not valid")
//     .required("Please input your email"),
//   password: yup
//     .string()
//     .min(8, "Password must be at least 8 characters")
//     .required("Please input your password"),
//   confirmPassword: yup
//     .string()
//     .oneOf([yup.ref("password"), ""], "Passwords must match")
//     .required("Please input your password confirmation"),
// });

// const useRegister = () => {
//   const router = useRouter();
//   // State to manage the visibility of password and confirm password fields
//   const [visiblePassword, setVisiblePassword] = useState({
//     password: false,
//     confirmPassword: false,
//   });

//   // Function to toggle the visibility of the password fields
//   const handleVisiblePassword = (key: "password" | "confirmPassword") => {
//     setVisiblePassword({
//       ...visiblePassword,
//       [key]: !visiblePassword[key],
//     });
//   };

//   // React Hook Form setup with validation schema
//   // Using yupResolver to integrate Yup validation with React Hook Form
//   const {
//     control,
//     handleSubmit,
//     formState: { errors },

//     // Reset function to clear the form after successful submission
//     reset,
//     setError,
//   } = useForm({
//     resolver: yupResolver(registerSchema),
//   });

//   // Function to handle form submission
//   const registerService = async (payload: IRegister) => {
//     const result = await authService.register(payload);
//     return result;
//   };

//   // Using React Query's useMutation to handle the registration process
//   // This allows for better state management and error handling during the API call
//   const { mutate: mutateRegister, isPending: isPendingRegister } = useMutation({
//     mutationFn: registerService,
//     onError(error) {
//       setError("root", {
//         message: error.message,
//       });
//     },
//     onSuccess: () => {
//       router.push("/auth/register/success");
//       reset();
//     },
//   });

//   const handleRegister = (data: IRegister) => mutateRegister(data);

//   return {
//     // Exposing the state and function to the component using this hook
//     visiblePassword,
//     handleVisiblePassword,
//     control,
//     handleSubmit,
//     handleRegister,
//     isPendingRegister,
//     errors,
//   };
// };

// export default useRegister;
