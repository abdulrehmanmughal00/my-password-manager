import "./globals.css";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta
          name="google-site-verification"
          content="PEczm1L0N6wB84I2zYd_-vR7Wpxd-ObZcE4yVfbdgMc"
        />

        <script src="https://cdn.lordicon.com/lordicon.js"></script>
      </head>

      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}