import "@styles/globals.css";
import {Inter} from "next/font/google";
import Nav from "@components/Nav";
const inter = Inter({subsets: ["latin"]});

export const metadata = {
  title: "Book Oasis",
  description:
    "Buy books of any categories on lowest price online at Book Oasis.",
};

export default function RootLayout({children}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Nav />
        {children}
      </body>
    </html>
  );
}
