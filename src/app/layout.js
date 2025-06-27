import "./globals.css";
import ClientLayout from "./PagesCompoents/ClientLayout";
import Header from "./sharecompoents/Header";
import Footer  from "./sharecompoents/Footer";

export const metadata = {
  title: "Expo",
  description: "",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo (2).png" type="image/png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>

      <body>
      

        <Header />
        <ClientLayout>{children}</ClientLayout>
        <Footer />

      </body>
    </html>
  );
}
