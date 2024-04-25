import { ThemeProvider } from "next-themes";
import "./globals.css";
import { Nav, Footer } from "@/components";
export const metadata = {
  title: "Waniatex Garments",
  description: "By online Products",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Nav />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
