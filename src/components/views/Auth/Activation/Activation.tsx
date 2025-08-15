import Image from "next/image";
import { useRouter } from "next/router";

interface PropTypes {
  status: "success" | "error";
}
// This component displays a success and failed about activation account.
const Activation = (props: PropTypes) => {
  const router = useRouter();
  const { status } = props;
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
          src={status === "success" ? "/images/ilustration/You are Up to date.svg" : "/images/ilustration/No Messages.svg"}
          alt={status == "success" ? "Activation Success" : "Activation Error"}
          width={300}
          height={300}
        />
      </div>
      <div className="mt-4 flex flex-col items-center gap-2 text-center">
        <h1 className="text-3xl font-bold text-blue-500">
        {status === "success" ? "Activation Success" : "Activation Failed"}
        </h1>
        <p className="text-default-500 text-xl font-bold">
            {status === "success"
                ? "Thanks you for register account in WanCourse."
                : "Confirmation code is invalid"}
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

export default Activation;
