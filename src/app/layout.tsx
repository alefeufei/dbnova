import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Slide } from './../components/slide/index';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`$antialiased`}>
          <Header />
          <Slide/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
