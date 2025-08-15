import Image from "next/image";
import { useRouter } from "next/router";

// This component displays a success message after user registration.
const RegisterSuccess = () => {
  const router = useRouter();
  return (
    <div className="flex w-screen flex-col">
      <div className="flex flex-col items-center justify-center gap-10">
        <Image
          src="/images/general/WanCourse.svg"
          alt="WanCourse Logo"
          width={200}
          height={200}
        />
        <Image
          src="/images/ilustration/Sent Message.svg"
          alt="Sent Messages"
          width={300}
          height={300}
        />
      </div>
      <div className="mt-4 flex flex-col items-center gap-2 text-center">
        <h1 className="text-3xl font-bold text-blue-500">
          Create Account Success
        </h1>
        <p className="text-default-500 text-xl font-bold">
          check your email in Zoho for account activation
        </p>

        <button
          className="mt-4 w-fit rounded-lg border border-blue-500 px-6 py-3 font-bold text-blue-500 transition-colors duration-200 hover:bg-gray-100 hover:text-blue-600"
          onClick={() => router.push("/")}
        >
          back to home
        </button>
      </div>
    </div>
  );
};

export default RegisterSuccess;
