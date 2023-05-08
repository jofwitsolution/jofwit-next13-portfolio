import "@styles/globals.css";
import "@styles/app.scss";

import Navbar from "@components/Navbar/Navbar";
import AuthProvider from "@components/special/AuthProvider";

export const metadata = {
  title: "Jofwit Portfolio",
  description: "Joseph Oluwafemi Faleye's Portfolio",
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
