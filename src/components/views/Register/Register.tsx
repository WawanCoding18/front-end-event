import Image from "next/image";
import useRegister from "./useRegister";
import { IoIosEye, IoIosEyeOff } from "react-icons/io";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { Controller } from "react-hook-form";
import { cn } from "@/utils/cn";

const Register = () => {
  const {
    visiblePassword,
    handleVisiblePassword,
    control,
    handleSubmit,
    handleRegister,
    isPendingRegister,
    errors,
  } = useRegister(); // Correctly destructuring handleVisiblePassword
  console.log(errors);
  return (
    <div className="flex w-full flex-col items-center justify-center gap-10 lg:flex-row lg:gap-20">
      <div className="flex w-full flex-col items-center justify-center gap-10 lg:w-1/3">
        {/* image ilustratir register page */}
        <Image
          src="/images/general/WanCourse.svg"
          alt="WanCourse Logo"
          width={200}
          height={200}
        />
        <Image
          src="/images/ilustration/095-gamer-colour.svg"
          alt="gamer ilustration"
          className="w-2/3 lg:w-full"
          width={1024}
          height={1024}
        />
      </div>
      <div>
        {/* For head title form */}
        <div className="bg-white-500 border-2-white rounded-lg p-5 shadow-[0_0_5px_0_rgba(0,0,0,0.5)]">
          <h2 className="text-2xl font-bold text-blue-500">Create Account</h2>
          <p className="text-small">
            Have an account?&nbsp;
            <a href="/login" className="font-semibold text-blue-500">
              Login here
            </a>
          </p>
          {errors.root && (
            <p className="text-danger mb-2 font-medium">
              {errors?.root?.message}
            </p>
          )}

          {/* Form for register */}
          <form
            className={cn("mt-6 flex w-80 flex-col", Object.keys(errors).length > 0 ? "gap-3" : "gap-5")}
            onSubmit={handleSubmit(handleRegister)}
          >
            <Controller
              name="fullName"
              control={control}
              render={({ field }) => (
                <div className="relative">
                  <input
                    {...field}
                    type="text"
                    id="fullName"
                    placeholder="FullName"
                    autoComplete="off"
                    className={`peer h-10 w-full rounded-md border p-2 pr-10 placeholder-transparent ${
                      errors.fullName
                        ? "border-red-500 focus:border-red-500 focus:ring-red-500"
                        : "border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                    }`}
                  />
                  {errors.fullName && (
                    <p className="mt-1 text-sm text-red-500">
                      {errors.fullName.message}
                    </p>
                  )}

                  <label
                    htmlFor="fullName"
                    className="pointer-events-none absolute top-2 left-2 origin-left -translate-y-2 scale-75 transform text-sm text-gray-500 transition-all peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:text-gray-400"
                  >
                    FullName
                  </label>
                </div>
              )}
            />

            <Controller
              name="username"
              control={control}
              render={({ field }) => (
                <div className="relative">
                  <input
                    {...field}
                    type="text"
                    id="username"
                    placeholder="Username"
                    autoComplete="off"
                    className={`peer h-10 w-full rounded-md border p-2 pr-10 placeholder-transparent ${
                      errors.fullName
                        ? "border-red-500 focus:border-red-500 focus:ring-red-500"
                        : "border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                    }`}
                  />
                  {errors.username && (
                    <p className="mt-1 text-sm text-red-500">
                      {errors.username.message}
                    </p>
                  )}

                  <label
                    htmlFor="username"
                    className="pointer-events-none absolute top-2 left-2 origin-left -translate-y-2 scale-75 transform text-sm text-gray-500 transition-all peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:text-gray-400"
                  >
                    Username
                  </label>
                </div>
              )}
            />

            <Controller
              name="email"
              control={control}
              render={({ field }) => (
                <div className="relative">
                  <input
                    {...field}
                    type="text"
                    id="email"
                    placeholder="Email"
                    autoComplete="off"
                    className={`peer h-10 w-full rounded-md border p-2 pr-10 placeholder-transparent ${
                      errors.email
                        ? "border-red-500 focus:border-red-500 focus:ring-red-500"
                        : "border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                    }`}
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-500">
                      {errors.email.message}
                    </p>
                  )}

                  <label
                    htmlFor="email"
                    className="pointer-events-none absolute top-2 left-2 origin-left -translate-y-2 scale-75 transform text-sm text-gray-500 transition-all peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:text-gray-400"
                  >
                    Email
                  </label>
                </div>
              )}
            />
            <Controller
              name="password"
              control={control}
              render={({ field }) => (
                <div className="relative">
                  <input
                    {...field}
                    type={visiblePassword.password ? "text" : "password"}
                    id="password"
                    placeholder="Password"
                    autoComplete="off"
                    className={`peer h-10 w-full rounded-md border p-2 pr-10 placeholder-transparent focus:ring-1 ${
                      errors.password
                        ? "border-red-500 focus:border-red-500 focus:ring-red-500"
                        : "border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                    }`}
                  />

                  <button
                    type="button"
                    onClick={() => handleVisiblePassword("password")}
                    className="absolute top-1/2 right-2 -translate-y-1/2"
                    tabIndex={-1}
                  >
                    {visiblePassword.password ? (
                      <IoIosEye className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                    ) : (
                      <IoIosEyeOff className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                    )}
                  </button>

                  <label
                    htmlFor="password"
                    className="pointer-events-none absolute top-2 left-2 origin-left -translate-y-2 scale-75 transform text-sm transition-all peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:text-gray-400 peer-focus:-translate-y-2 peer-focus:scale-75 peer-focus:text-blue-500"
                  >
                    Password
                  </label>

                  {errors.password && (
                    <p className="mt-1 text-sm text-red-500">
                      {errors.password.message}
                    </p>
                  )}
                </div>
              )}
            />

            <Controller
              name="confirmPassword"
              control={control}
              render={({ field }) => (
                <div className="relative">
                  <input
                    {...field}
                    type={visiblePassword.confirmPassword ? "text" : "password"}
                    id="passwordConfirmation"
                    placeholder="Password Confirmation"
                    autoComplete="off"
                    className={`peer h-10 w-full rounded-md border p-2 pr-10 placeholder-transparent focus:ring-1 ${
                      errors.confirmPassword
                        ? "border-red-500 focus:border-red-500 focus:ring-red-500"
                        : "border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                    }`}
                  />

                  <button
                    type="button"
                    onClick={() => handleVisiblePassword("confirmPassword")}
                    className="absolute top-1/2 right-2 -translate-y-1/2"
                    tabIndex={-1}
                  >
                    {visiblePassword.confirmPassword ? (
                      <IoIosEye className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                    ) : (
                      <IoIosEyeOff className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                    )}
                  </button>

                  <label
                    htmlFor="passwordConfirmation"
                    className="pointer-events-none absolute top-2 left-2 origin-left -translate-y-2 scale-75 transform text-sm transition-all peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:text-gray-400 peer-focus:-translate-y-2 peer-focus:scale-75 peer-focus:text-blue-500"
                  >
                    Password Confirmation
                  </label>

                  {errors.confirmPassword && (
                    <p className="mt-1 text-sm text-red-500">
                      {errors.confirmPassword.message}
                    </p>
                  )}
                </div>
              )}
            />

            {/* button submit register */}
            <button
              type="submit"
              className="rounded-md bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
            >
              {isPendingRegister ? (
                <AiOutlineLoading3Quarters
                  className="text-white-500 animate-spin"
                  size={20}
                />
              ) : (
                "Register"
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
