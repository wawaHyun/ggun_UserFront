
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./component/navigation/header";
import Alarm from "./component/util/alarm";
import Footer from "./component/box/footer";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="ko">
      <head>
        <link rel="icon" href="/imgs/chart.png" type="image/<generated>" sizes="<generated" border-radius="50%" />
        <title>최고의 주식거래소:: GGUN</title>
      </head>
      <body className={inter.className}>
        <div className="bg-white">
            <div className="h-[80px]">
              <div className="fixed h-[70px] top-0 left-0 fixed z-10">
                <Header />
              </div>
              <div className="h-screen hover:w-[500px] top-0 right-0 fixed z-10">
                <Alarm />
              </div>
            </div>
            <div className="justify-center flex z-1">
              {children}
            </div>
              <div className="border-t-[1px] relative bottom-0 f-full"><Footer /></div>
        </div>
      </body>
    </html>
  );
}
