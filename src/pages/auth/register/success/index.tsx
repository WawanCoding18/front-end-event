import AuthLayout from "@/components/Commons/PageHead/layouts/AuthLayout";
import RegisterSuccess from "@/components/views/Auth/RegisterSuccess/RegisterSuccess";

// for register page load
const RegisterSuccessPage = () => {
  return (
    <AuthLayout title="WanCourse | Register Success">
      <RegisterSuccess />
    </AuthLayout>
  );
};

export default RegisterSuccessPage;
