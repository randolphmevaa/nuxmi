"use client";

import Head from "next/head";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function About() {
  return (
    <>
      <Head>
        <title>Nuxmi | À Propos</title>
        <meta name="description" content="Apprenez-en plus sur Nuxmi et notre histoire." />
      </Head>
      <div className="min-h-screen bg-white">
        <Navbar />
        <main className="pt-28 pb-12 max-w-7xl mx-auto px-4">
          <header className="text-center mb-12">
            <h1 className="text-5xl font-bold text-gray-900">À Propos</h1>
            <p className="mt-4 text-xl text-gray-700">
              Découvrez l&apos;histoire de Nuxmi, notre mission et l&apos;équipe qui transforme le digital.
            </p>
          </header>
          <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="flex justify-center">
              <img
                src="https://via.placeholder.com/500x300?text=Notre+Histoire"
                alt="Notre Histoire"
                className="rounded-2xl shadow-lg"
              />
            </div>
            <div className="flex flex-col justify-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Notre Histoire</h2>
              <p className="text-xl text-gray-700">
                Fondée sur la passion du digital, Nuxmi s&apos;est imposée comme une référence en génération de leads premium. Nous aidons des marques exigeantes à transformer leur acquisition client grâce à des stratégies sur mesure et une technologie de pointe.
              </p>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
}
