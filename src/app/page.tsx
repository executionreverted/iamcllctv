import { Footer } from "../components/Footer";
import { EmailButton } from "../components/EmailButton";
import { ScrollbarController } from "../components/ScrollbarController";
import { ToastManager } from "../components/ToastManager";
import Image from "next/image";
import config from "../config.json";

export default function Home() {
  return (
    <>
      <ScrollbarController />
      <ToastManager />
      <div className="min-h-screen flex flex-col text-center">
      <div className="relative flex-1 flex items-start justify-center px-6 pt-40 -mt-20 pb-0">
        <span aria-hidden className="stage-blob" />
        <main className="relative z-10 flex flex-col items-center gap-6 sm:gap-8">
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-semibold tracking-wide text-black relative z-10 reveal-up">
            <span className="iam-gradient-text">iam</span> — collective
          </h1>
          <p className="opacity-80 text-black leading-relaxed reveal-up reveal-delay-1">From nothing to everything.</p>
          <p className="opacity-80 text-black leading-relaxed flex gap-1 sm:gap-4 flex-wrap items-center justify-center reveal-up reveal-delay-2">
            <span className="hover-transition hover-idea cursor-default">Idea</span>
            <span>→</span>
            <span className="hover-transition hover-strategy cursor-default">Strategy</span>
            <span>→</span>
            <span className="hover-transition hover-identity cursor-default">Identity</span>
            <span>→</span>
            <span className="hover-transition hover-design cursor-default">Design</span>
            <span>→</span>
            <span className="hover-transition hover-website cursor-default">Website</span>
          </p>
          <div className="reveal-up reveal-delay-3">
            <EmailButton email={config.email} />
          </div>
        </main>
      </div>
      
      {/* Fixed positioned logo with rotating objects */}
      <div className="logo-container reveal-up reveal-delay-4">
        <Image 
          src="/logo.png" 
          alt="IAMCLLCTV Logo" 
          width={512}
          height={512}
          priority
          className="logo-image"
        />
        <div className="logo-objects">
          <Image 
            src="/object1.png" 
            alt="Rotating decorative element" 
            width={100}
            height={100}
            className="logo-object logo-object-left reveal-down reveal-delay-5"
          />
          <Image 
            src="/object2.png" 
            alt="Rotating decorative element" 
            width={100}
            height={100}
            className="logo-object logo-object-right reveal-down reveal-delay-5"
          />
        </div>
      </div>
      
      <div className="reveal-up reveal-delay-6 relative z-5">
        <Footer />
      </div>
      </div>
    </>
  );
}
