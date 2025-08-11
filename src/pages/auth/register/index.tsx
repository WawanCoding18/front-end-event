import AuthLayout from "@/components/Commons/PageHead/layouts/AuthLayout";
import Register from "@/components/views/Register";

// for register page load
const RegisterPage = () => {
  return (
    <AuthLayout title="WanCourse | Register">
      <Register />
    </AuthLayout>
  );
};


export default RegisterPage;