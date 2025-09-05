import type { Metadata } from "next";
import { IBM_Plex_Sans_Condensed } from "next/font/google";
import "./globals.css";
import SideBar from "@/components/SideBar";
import Navbar from "@/components/Navbar";

const geistSans = IBM_Plex_Sans_Condensed({
  weight:"300",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://portfoliojackonek.vercel.app"),
  title: "Développeur Fullstack Next.js|react.js|node.js",
  description:
    "Développeur Full-Stack basé à Kinshasa, RDC – spécialisé en Next.js, React et Node.js . Je crée des applications web performantes et des solutions sur mesure.",
  icons: {
    icon: "./assets/favicon.ico",
  },
  // Facebook
  openGraph: {
    title: "Jack Onek - Développeur Fullstack Next.js",
    description:
      "Développeur Full-Stack basé à Kinshasa, RDC – spécialisé en Next.js, React et Node.js. Je crée des applications web performantes et des solutions sur mesure.",
    url: "https://portfoliojackonek.vercel.app",
    type: "website",
    images: [
      {
        url: "https://portfoliojackonek.vercel.app/preview.jpeg",
        width: 1200,
        height: 630,
        alt: "Image de couverture du Porfolio Jacques onek  ",
      },
    ],
  },
};

export default  function LocaleLayout({
  children,
}: {
  children: React.ReactNode
}) {


  return (
    <html >
      <body className={`  ${geistSans} flex flex-col text-white antialiased bg-[#111315] `} >
          <div className="flex flex-row overflow-hidden justify-between  !important">
               <div>
                   <SideBar/>
              </div>
              <div className="w-[95vw]">
                <div className="flex flex-col  justify-around gap-24 lg:gap-y-40">
                  <div>
                  <Navbar/>
                  </div>
                  <div  className=" pl-12 pr-2 lg:justify-center lg:px-10">
                    {children}
                  </div>
              </div>
              </div>
          </div>
           
           

      </body>
    </html>
  );
}


