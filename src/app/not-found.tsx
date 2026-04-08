import Link from "next/link";
import { Navbar } from "@/components/ui/Navbar";
import { Footer } from "@/components/ui/Footer";

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main className="min-h-[80vh] flex items-center justify-center px-6 py-28">
        <div className="max-w-lg mx-auto text-center">
          {/* Decorative thread illustration */}
          <div className="relative mb-8 inline-block">
            <span className="font-serif text-[10rem] md:text-[14rem] leading-none text-accent/15 select-none">
              404
            </span>
            <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-hand text-3xl md:text-4xl text-accent rotate-[-6deg] whitespace-nowrap">
              Oups, fil perdu !
            </span>
          </div>

          <h1 className="font-serif text-3xl md:text-5xl mb-6 italic">
            Page introuvable
          </h1>
          <p className="text-muted text-base md:text-lg leading-relaxed mb-10 max-w-md mx-auto">
            On dirait que ce fil s&apos;est emmêlé… La page que tu cherches
            n&apos;existe pas ou a été déplacée.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/"
              className="bg-accent text-white font-bold text-sm px-8 py-4 rounded-full hover:bg-foreground transition-all duration-300 shadow-md"
            >
              Retour à l&apos;accueil
            </Link>
            <Link
              href="/contact"
              className="border-2 border-accent text-accent font-bold text-sm px-8 py-4 rounded-full hover:bg-accent hover:text-white transition-all duration-300"
            >
              Nous contacter
            </Link>
          </div>

          {/* Decorative scissors */}
          <div className="mt-16 text-accent/30 text-4xl select-none">✂ - - - - - - -</div>
        </div>
      </main>
      <Footer />
    </>
  );
}
