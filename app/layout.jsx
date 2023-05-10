import "@styles/globals.css";
import "@styles/app.scss";

import Navbar from "@components/Navbar/Navbar";
import AuthProvider from "@components/special/AuthProvider";

export const metadata = {
  applicationName: "Portfolio",
  title: "Jofwit Portfolio",
  description: "Joseph Oluwafemi Faleye's Portfolio",
  icons: {
    icon: "/images/logo.png",
  },
  keywords: [
    "Jofwit",
    "Solution",
    "Jofwit Solution",
    "Portfolio",
    "Jofwit Solution Portfolio",
  ],
  authors: [{ name: "Joseph Oluwafemi Faleye" }],
};

const RootLayout = ({ children }) => (
  <html lang="en">
    <body>
      <AuthProvider>
        <div className="main">
          <div className="gradient" />
        </div>

        <main className="app">
          <Navbar />
          {children}
        </main>
      </AuthProvider>
    </body>
  </html>
);

export default RootLayout;
