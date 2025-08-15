// import PageHead from "../../../PageHead";
// import { SIDEBAR_ADMIN, SIDEBAR_MEMBER } from "./DashboardLayout.constan";
// import DashboardLayoutSidebar from "./DashboardLayoutSidebar";
// import { useState } from "react";

// //ensure all value props
// interface PropTypes {
//     children: React.ReactNode;
//     title?: string;
//     type?: string;
//     description?: string;
// }

// //render main to determine layout sidebar admin or member
// const DashboardLayout = (props: PropTypes) => {
//     const { children, description, title, type = 'admin' } = props;
//     const [open, setOpen] = useState(false)
//     return (
//         <>
//          <PageHead title={title} />
//          <div className="max-w-screen-3xl 3xl:container flex">
//             <DashboardLayoutSidebar SidebarItems={type === "admin"? SIDEBAR_ADMIN : SIDEBAR_MEMBER}
//             isOpen={open}/>
//             <div className="h-screen w-full overflow-y-auto">
//                 <Navbar className="flex justify-between bg-transparent px-0"
//                 isBlurred = {false}
//                 position = "static">
//                  <h1 className="text-3xl font-bold">{title}</h1>
//                  <NavbarMenuToggle aria-label = {open? "Close Menu : Open Menu"}/>
//                 </Navbar>
//                 <p className="mb-4 text-small">{description}</p>
//                 {children}
//             </div>
//          </div>
//         </>
//     )
// }

// export default DashboardLayout;
import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi"; // react-icons
import PageHead from "../../../PageHead";
import { SIDEBAR_ADMIN, SIDEBAR_MEMBER } from "./DashboardLayout.constan";
import DashboardLayoutSidebar from "./DashboardLayoutSidebar";

interface PropTypes {
  children: React.ReactNode;
  title: string;
  type: string;
  description?: string;
}

const DashboardLayout = ({
  children,
  title,
  type = "admin",
  description,
}: PropTypes) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <PageHead title={title} />
      <div className="max-w-screen-3xl 3xl:container flex">
        {/* Sidebar */}
        <DashboardLayoutSidebar
          SidebarItems={type === "admin" ? SIDEBAR_ADMIN : SIDEBAR_MEMBER}
          isOpen={open}
        />

        {/* Main content */}
        <div className="h-screen w-full overflow-y-auto">
          {/* Navbar */}
          <nav className="sticky top-0 z-40 flex items-center justify-between border-b bg-white px-4 py-3 shadow-sm">
            {/* Left side: Title */}
            <h1 className="text-2xl font-bold">{title}</h1>

            {/* Right side: Description + Mobile Toggle */}
            <div className="flex items-center gap-3">
              {/* Description (desktop only) */}
              <div className="hidden md:block">
                <p className="text-gray-600">{description}</p>
              </div>

              {/* Toggle button (mobile only) */}
              <button
                onClick={() => setOpen(!open)}
                className="block rounded-lg border p-2 hover:bg-gray-100 md:hidden"
                aria-label={open ? "Close Menu" : "Open Menu"}
              >
                {open ? <HiX size={24} /> : <HiMenu size={24} />}
              </button>
            </div>
          </nav>

          {/* Main page content */}
          <div className="p-4">{children}</div>
        </div>
      </div>
    </>
  );
};

export default DashboardLayout;
