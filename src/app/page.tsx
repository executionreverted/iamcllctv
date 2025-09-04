import { Footer } from "../components/Footer";
import { EmailButton } from "../components/EmailButton";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col text-center">
      <div className="relative flex-1 flex items-center justify-center px-6 py-20">
        <span aria-hidden className="stage-blob" />
        <main className="relative z-10 flex flex-col items-center gap-4">
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-semibold tracking-wide text-black">
            IAMCLLCTV
          </h1>
          <p className="text-base sm:text-lg opacity-80 text-black">i am collective</p>
          <p className="mt-6 opacity-80 text-black">Something amazing is on its way.</p>
          <div className="mt-8">
            <EmailButton email="hello@example.com" />
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
}
