import "@styles/globals.css";
import "@styles/app.scss";

export const metadata = {
  applicationName: "Portfolio",
  title: "Dashboard",
  description: "Joseph Oluwafemi Faleye's Portfolio Dashboard",
  keywords: [
    "Jofwit",
    "Solution",
    "Jofwit Solution",
    "Portfolio",
    "Jofwit Solution Portfolio",
    "Dashboard",
  ],
  authors: [{ name: "Joseph Oluwafemi Faleye" }],
};

const Layout = ({ children }) => {
  return <div className="pt-[5rem]">{children}</div>;
};

export default Layout;
