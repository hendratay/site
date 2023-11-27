import "@fortawesome/fontawesome-svg-core/styles.css";
import type { Metadata } from "next";
import { Navbar } from "./_components/nav";
import "./globals.css";

export const metadata: Metadata = {
  title: "laziest.site",
  description: "-",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body className="max-w-2xl flex flex-col mx-4 mt-8 mb-40 md:flex-row md:mx-auto lg:mx-auto">
        <main className="min-w-0 flex-auto flex flex-col mt-4 px-2 md:px-0">
          <Navbar />
          {children}
        </main>
      </body>
    </html>
  );
}
