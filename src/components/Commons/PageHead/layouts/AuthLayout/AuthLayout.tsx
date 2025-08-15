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
    <div className="flex min-h-screen min-w-full flex-col items-center justify-between gap-10 py-10 lg:py">  
    {/* This is the AuthLayout component that wraps around the children components and includes a PageHead for SEO purposes */}
        <PageHead title={title} />
        <section className="max-w-screen-3xl 3xl:container p-6">
            {children}
        </section>
    </div>
  )
}

export default AuthLayout;