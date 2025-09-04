import { Footer } from "../components/Footer";
import { EmailButton } from "../components/EmailButton";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col text-center">
      <div className="relative flex-1 flex items-center justify-center px-6 py-20">
        <span aria-hidden className="stage-blob" />
        <main className="relative z-10 flex flex-col items-center gap-6 sm:gap-8">
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-semibold tracking-wide text-black relative z-10">
            <span className="iam-gradient-text">iam</span> — collective
          </h1>
          <p className="opacity-80 text-black leading-relaxed">From nothing to everything.</p>
          <p className="opacity-80 text-black leading-relaxed flex gap-2 flex-wrap items-center justify-center">
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
          <div>
            <EmailButton email="hello@example.com" />
          </div>
        </main>
      </div>
      
      {/* Fixed positioned logo */}
      <div className="logo-container">
        <img 
          src="/logo.png" 
          alt="Logo" 
          className="logo-image"
        />
      </div>
      
      <Footer />
    </div>
  );
}
