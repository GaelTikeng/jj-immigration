// import "@/node_modules/react-modal-video/css/modal-video.css";
import "../public/assets/css/font-awesome-all.css";
import "../public/assets/css/bootstrap.css";
import "../public/assets/css/style.css";
import "swiper/css";
// import "swiper/css/navigation"
import "swiper/css/pagination";
import "swiper/css/free-mode";
import { Inter } from "next/font/google";
import "./globals.css";
import { maven_pro, heebo } from "../lib/font";
// import { EdgeStoreProvider } from "@/lib/edgestore";
import {EdgeStoreProvider} from "../lib/edgestore"
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "jj-immigration",
  description: "Immigration web site",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${maven_pro.variable} ${heebo.variable}`}>
      <body>
        <ToastContainer />
        <EdgeStoreProvider>{children}</EdgeStoreProvider>
      </body>
    </html>
  );
}
