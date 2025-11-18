import "./globals.css";

export const metadata = {
  title: "SwiftPay dashboard-temp",
  description: "dashboard-temp for SwiftPay payment gateway",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
