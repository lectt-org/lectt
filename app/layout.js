import "./globals.css";
import { Toaster } from "react-hot-toast";
import NextTopLoader from "nextjs-toploader";

export const metadata = {
  title: "Modern ERP for Schools, Coaching Centres & Colleges | Lectt",
  description: "Lectt is a modern, complete, and user-friendly ERP solution for managing educational institutions - with custom features for schools, coaching centres and colleges.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">
        <NextTopLoader color="#5a4bda" height={4} showSpinner={false} shadow="0 0 10px #5a4bda,0 0 5px #5a4bda" />
        <Toaster
          position="top-right"
          toastOptions={{
            style: {  
              marginTop: "24px",
              marginRight: "24px",
            },
            success: {
              duration: 5000,
              style: {
                backgroundColor: "#faf5ff",
                border: "1px solid #7c3aed",
              }
            },
            loading: {
              duration: 5000,
              style: {
                backgroundColor: "#faf5ff",
                border: "1px solid #7c3aed",
              }
            },
            error: {
              duration: 8000,
              style: {
                backgroundColor: "#fef2f2",
                border: "1px solid #fb2c36",
              }
            }
          }}
        />
        {children}
      </body>
    </html>
  );
}
