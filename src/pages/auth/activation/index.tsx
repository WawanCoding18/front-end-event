import AuthLayout from "@/components/Commons/PageHead/layouts/AuthLayout";
import authServices from "@/services/auth.service";
import Activation from "@/components/views/Auth/Activation";

interface PropTypes {
   status: 'success' | 'error';
}
// Activation page component
const ActivationPage = (props: PropTypes) => {
    console.log(props)
  return (
    <AuthLayout title="WanCourse | Activation">
      <Activation {...props}/>
      {/* Add activation form or component here */}
    </AuthLayout>
  );
};

export async function getServerSideProps(context: { query: { code: string } }) {
  try {

    const result = await authServices.activation({code: context.query.code})
    // If the code is not provided, redirect to the home page
    console.log(result.data)
    if (result.data.data) {
      return {
        props: {
          status: "success",
          message: "Activation successful. You can now log in.",
        },
      };
    } else {
      return {
        props: {
          status: "error",
          message: "Activation failed. Please check your activation code.",
        },
      };
    }
  } catch (error) {
    return {
       props:{
          message: `An error occurred during activation. Please try again later. ${error}`
       }
    };
  }
}

export default ActivationPage;
