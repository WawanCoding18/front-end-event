// import { signOut } from "next-auth/react";
// import { JSX } from "react";
// import { CiLogout } from "react-icons/ci";
// import Image from "next/image";
// import { useRouter } from "next/router";
// import { cn } from "@/utils/cn";
// import Link from "next/link";

// //interface all value sidebaritem
// interface SidebarItem {
//   key: string;
//   label: string;
//   href: string;
//   icon: JSX.Element;
// }

// //ensure all sidebar items are in this format and for mobile action
// interface ProTypes {
//   SidebarItems: SidebarItem[];
//   isOpen: boolean;
// }

// //render dashboard layout sidebar
// const DashboardLayoutSidebar = (props: ProTypes) => {
//   const { SidebarItems, isOpen } = props;
//   const router = useRouter();
//   return (
//     <div className="border-default-200 relative z-50 flex h-screen w-full max-w-[300px] flex-col justify-between border-r-1 bg-white px-4 py-6 transition-all">
//       <div>
//         <div className="flex justify-center">
//           <Image
//             src="/images/general/WanCourse.svg"
//             alt="logo"
//             width={180}
//             height={180}
//             className="mb-6 w-32"
//             onClick={() => router.push("/")}
//           />
//           {/* <Listbox
//             items={SidebarItems}
//             variant="solid"
//             aria-label="Dashboard Menu"
//           >
//             {(item) => (
//                 <ListboxItem key={item.key} className={cn("my-1 h-12 text-2xl",{
//                     "bg-blue-500 text-white": router.pathname.startsWith(item.href)
//                 })}></ListboxItem>
//                 startContent = {item.icon}
//                 textValue = {items.label}
//                 aria-labelledby = {items.label}
//                 aria-describedby = {items.label}
//             )}
//           </Listbox> */}
//            <aside className="w-64 bg-gray-100 h-screen p-4">
//       <ul className="space-y-2">
//         {sidebarItems.map((item) => (
//           <li key={item.key}>
//             <Link
//               href={item.href}
//               className={`flex items-center gap-3 p-3 rounded-lg text-lg
//                 ${router.pathname.startsWith(item.href)
//                   ? "bg-blue-500 text-white"
//                   : "hover:bg-gray-200"
//                 }`}
//             >
//               {item.icon}
//               <span>{item.label}</span>
//             </Link>
//           </li>
//         ))}
//       </ul>
//     </aside>
//         </div>
//       </div>
//       <div className="flex items-center p-1">
//         <button
//           className="flex w-full justify-start rounded-lg px-2 py-4 font-bold text-blue-500 hover:bg-blue-50"
//           onClick={() => signOut()}
//         >
//           <CiLogout />
//           Logout
//         </button>
//       </div>
//     </div>
//   );
// };

// export default DashboardLayoutSidebar;

// import { signOut } from "next-auth/react";
// import { JSX } from "react";
// import { CiLogout } from "react-icons/ci";
// import Image from "next/image";
// import { useRouter } from "next/router";
// import Link from "next/link";

// // interface for each sidebar item
// interface SidebarItem {
//   key: string;
//   label: string;
//   href: string;
//   icon: JSX.Element;
// }

// // props interface
// interface ProTypes {
//   SidebarItems: SidebarItem[];
//   isOpen: boolean;
// }

// const DashboardLayoutSidebar = (props: ProTypes) => {
//   const { SidebarItems, isOpen } = props;
//   const router = useRouter();

//   return (
//     <div className="border-default-200 relative z-50 flex h-screen w-full max-w-[300px] flex-col justify-between border-r-1 bg-white px-4 py-6 transition-all">
//       <div>
//         <div className="flex justify-center">
//           <Image
//             src="/images/general/WanCourse.svg"
//             alt="logo"
//             width={180}
//             height={180}
//             className="mb-6 w-32 cursor-pointer"
//             onClick={() => router.push("/")}
//           />
//         </div>

//         {/* Sidebar Items */}
//         <aside className="w-full p-4 rounded-lg">
//           <ul className="space-y-2">
//             {SidebarItems.map((item) => (
//               <li key={item.key}>
//                 <Link
//                   href={item.href}
//                   className={`flex items-center gap-3 p-3 rounded-lg text-lg transition
//                     ${
//                       item.href === router.pathname
//                         ? "bg-blue-500 text-white"
//                         : "hover:bg-gray-200"
//                     }`}
//                 >
//                   {item.icon}
//                   <span>{item.label}</span>
//                 </Link>
//               </li>
//             ))}
//           </ul>
//         </aside>
//       </div>

//       {/* Logout Button */}
//       <div className="flex items-center p-1">
//         <button
//           className="flex w-full items-center gap-2 rounded-lg px-2 py-4 font-bold text-blue-500 hover:bg-blue-50"
//           onClick={() => signOut()}
//         >
//           <CiLogout className="w-5 h-5" />
//           Logout
//         </button>
//       </div>
//     </div>
//   );
// };

// export default DashboardLayoutSidebar;

import { signOut } from "next-auth/react";
import { JSX } from "react";
import { CiLogout } from "react-icons/ci";
import Image from "next/image";
import { useRouter } from "next/router";
import Link from "next/link";
import { cn } from "@/utils/cn"; // pastikan path ini sesuai

interface SidebarItem {
  key: string;
  label: string;
  href: string;
  icon: JSX.Element;
}

interface ProTypes {
  SidebarItems: SidebarItem[];
  isOpen: boolean;
}

const DashboardLayoutSidebar = (props: ProTypes) => {
  const { SidebarItems, isOpen } = props;
  const router = useRouter();

  return (
    <div className={cn('border-default-200 fixed z-50 flex h-screen w-full max-w-[300px] -translate-x-full flex-col justify-between border-r bg-white px-4 py-6 transition-all lg:translate-x-0',
        {"translate-0": isOpen},
    )}>
      {/* Logo */}
      <div>
        <div className="flex justify-center">
          <Image
            src="/images/general/WanCourse.svg"
            alt="logo"
            width={180}
            height={180}
            className="mb-6 w-32 cursor-pointer"
            onClick={() => router.push("/")}
          />
        </div>

        {/* Sidebar Items */}
        <aside className="w-full p-4 rounded-lg">
          <ul className="space-y-2">
            {SidebarItems.map((item) => {
              const isActive = router.pathname.startsWith(item.href);

              return (
                <li key={item.key}>
                  <Link
                    href={item.href}
                    className={cn(
                      "flex items-center gap-3 p-3 rounded-lg text-lg transition-colors",
                      {
                        "bg-blue-500 text-white": isActive,
                        "hover:bg-gray-200": !isActive,
                      }
                    )}
                  >
                    {item.icon}
                    <span>{item.label}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </aside>
      </div>

      {/* Logout Button */}
      <div className="flex items-center p-1">
        <button
          className="flex w-full items-center gap-2 rounded-lg px-2 py-4 font-bold text-blue-500 hover:bg-blue-50"
          onClick={() => signOut()}
        >
          <CiLogout className="w-5 h-5" />
          Logout
        </button>
      </div>
    </div>
  );
};

export default DashboardLayoutSidebar;

