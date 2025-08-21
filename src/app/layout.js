// app/layout.js (server)
import ClientRootLayout from "./ClientRootLayout";

export const metadata = {
  title: "LiteMart",
  description: "LiteMart Product App",
};

export default function RootLayout({ children }) {
  return <ClientRootLayout>{children}</ClientRootLayout>;
}
