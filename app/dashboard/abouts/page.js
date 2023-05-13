import Link from "next/link";
import { FiEdit } from "react-icons/fi";

const About = () => {
  return (
    <div className="w-full">
      <div className="dashboard_main_area">
        <div className="flex justify-between py-2 shadow-md border-b border-blackColor text-blackColor">
          <h1>Abouts</h1>
          <Link href="/dashboard/abouts/create" className="text-[20px]">
            <FiEdit />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
