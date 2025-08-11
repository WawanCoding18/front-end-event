import PageHead from "../../PageHead";
import {ReactNode} from "react";


// interface proptype to ensure children and title values
interface PropTypes {
    children: ReactNode;
    title?: string;
}

// Make sure to pass the title prop to the Head component
const AuthLayout = (props: PropTypes) => {
  const { children, title } = props;

  
  return (
    <>  
    {/* This is the AuthLayout component that wraps around the children components and includes a PageHead for SEO purposes */}
        <PageHead title={title} />
        <section className="max-w-screen-3xl 3xl:container p-6">
            {children}
        </section>
    </>
  )
}

export default AuthLayout;