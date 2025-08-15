import Image from "next/image";
import useLogin from "./useLogin";
import { IoIosEye, IoIosEyeOff } from "react-icons/io";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { Controller } from "react-hook-form";
import { cn } from "@/utils/cn";
import Link from "next/link";

const Login = () => {
  const {
    isVisible,
    toggleVisiblity,
    control,
    handleSubmit,
    handleLogin,
    isPendingLogin,
    errors,
  } = useLogin(); // Correctly destructuring handleVisiblePassword
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
          <h2 className="text-2xl font-bold text-blue-500">Login</h2>
          <p className="text-small mt-2">
            Dont have an account?&nbsp;
            <Link href="/auth/register" className="font-semibold text-blue-500">
              Register here
            </Link>
          </p>

          {/* Form for login */}
          <form
            className={cn(
              "mt-6 flex w-80 flex-col",
              Object.keys(errors).length > 0 ? "gap-3" : "gap-5",
            )}
            onSubmit={handleSubmit(handleLogin)}
          >
            {errors.root && (
              <p className="font-medium text-red-500">
                {errors?.root?.message}
              </p>
            )}
            <Controller
              name="identifier"
              control={control}
              render={({ field }) => (
                <div className="relative">
                  <input
                    {...field}
                    type="text"
                    id="identifier"
                    placeholder="Email / Username"
                    autoComplete="off"
                    className={`peer h-10 w-full rounded-md border p-2 pr-10 placeholder-transparent ${
                      errors.identifier
                        ? "border-red-500 focus:border-red-500 focus:ring-red-500"
                        : "border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                    }`}
                  />
                  {errors.identifier && (
                    <p className="mt-1 text-sm text-red-500">
                      {errors.identifier.message}
                    </p>
                  )}

                  <label
                    htmlFor="identifier"
                    className="pointer-events-none absolute top-2 left-2 origin-left -translate-y-2 scale-75 transform text-sm text-gray-500 transition-all peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:text-gray-400"
                  >
                    Email / Username
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
                    type={isVisible ? "text" : "password"}
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
                    onClick={toggleVisiblity}
                    className="absolute top-1/2 right-2 -translate-y-1/2"
                    tabIndex={-1}
                  >
                    {isVisible ? (
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

            {/* button submit register */}
            <button
              type="submit"
              className="flex items-center justify-center rounded-md bg-blue-500 px-4 py-2 font-bold text-white transition-colors duration-200 hover:bg-blue-700"
            >
              {isPendingLogin ? (
                <AiOutlineLoading3Quarters
                  className="text-white-500 animate-spin"
                  size={20}
                />
              ) : (
                "Login"
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
