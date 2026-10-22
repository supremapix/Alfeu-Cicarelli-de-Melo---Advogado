import { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { FloatingButtons } from "./FloatingButtons";

export function PageTransition({ children }: { children: ReactNode }) {
  return <div className="flex flex-col min-h-screen">{children}</div>;
}

export function Layout({ children }: { children: ReactNode }) {
  return <>
    <a href="#conteudo" className="sr-only focus:not-sr-only focus:fixed focus:top-0 focus:z-[100] bg-white text-black p-3">Pular para o conteúdo</a>
    <Header />
    <main id="conteudo" className="flex-grow">{children}</main>
    <Footer />
    <FloatingButtons />
  </>;
}
