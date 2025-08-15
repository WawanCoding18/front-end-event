import AuthLayout from "@/components/Commons/PageHead/layouts/AuthLayout";
import Login from "@/components/views/Auth/Login";

// for login page load
const LoginPage = () => {
  return (
    <AuthLayout title="WanCourse | Login">
      <Login />
    </AuthLayout>
  );
};

export default LoginPage;