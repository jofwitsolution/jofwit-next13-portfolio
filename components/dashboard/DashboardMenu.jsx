"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { GiSkills, GiCalendarHalfYear } from "react-icons/gi";
import { BiUser } from "react-icons/bi";
import { BsPersonWorkspace } from "react-icons/bs";
import { GrStatusGood, GrContact } from "react-icons/gr";
import { MdWorkspaces, MdBrandingWatermark } from "react-icons/md";

const menuItems = [
  {
    title: "Abouts",
    path: "/dashboard/abouts",
    icon: BiUser,
  },
  {
    title: "Skills",
    path: "/dashboard/skills",
    icon: GiSkills,
  },
  {
    title: "Works",
    path: "/dashboard/works",
    icon: BsPersonWorkspace,
  },
  {
    title: "Experiences",
    path: "/dashboard/experiences",
    icon: GiCalendarHalfYear,
  },
  {
    title: "Work Experience",
    path: "/dashboard/work-experience",
    icon: MdWorkspaces,
  },
  {
    title: "Brands",
    path: "/dashboard/brands",
    icon: MdBrandingWatermark,
  },
  {
    title: "Testimonials",
    path: "/dashboard/testimonials",
    icon: GrStatusGood,
  },
  {
    title: "Contact",
    path: "/dashboard/contact",
    icon: GrContact,
  },
];

const DashboardMenu = () => {
  const router = useRouter();

  return (
    <div className="dashboard_menu">
      <ul className="list-none my-3">
        <li className="text-[18px] py-2 text-center font-semibold hidden 900px:block">
          Content
        </li>
        {menuItems.map((item) => (
          <li key={item.title}>
            <Link
              href={item.path}
              className="flex gap-4 py-4 px-2 hover:bg-lightGrayColor rounded-md"
            >
              <span className="text-[24px] text-brownColor">
                <item.icon />
              </span>{" "}
              <span className="hidden 900px:inline">{item.title}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DashboardMenu;
