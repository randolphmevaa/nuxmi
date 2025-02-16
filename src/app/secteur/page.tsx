"use client";

import Head from "next/head";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Secteur() {
  return (
    <>
      <Head>
        <title>Nuxmi | Secteur d&apos;activité</title>
        <meta name="description" content="Découvrez nos secteurs d'activité." />
      </Head>
      <div className="min-h-screen bg-white">
        <Navbar />
        <main className="pt-28 pb-12 max-w-7xl mx-auto px-4">
          <header className="text-center mb-12">
            <h1 className="text-5xl font-bold text-gray-900">Secteur d&apos;activité</h1>
            <p className="mt-4 text-xl text-gray-700">
              Explorez les domaines dans lesquels nous excellons et comment nous transformons votre acquisition de clients.
            </p>
          </header>
          <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 border border-gray-200 rounded-2xl shadow-lg bg-gray-50">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Finance</h2>
              <p className="text-gray-700">
                Stratégies sur mesure pour booster la croissance dans le secteur financier.
              </p>
            </div>
            <div className="p-8 border border-gray-200 rounded-2xl shadow-lg bg-gray-50">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Immobilier</h2>
              <p className="text-gray-700">
                Acquisition de leads de qualité pour transformer votre approche immobilière.
              </p>
            </div>
            <div className="p-8 border border-gray-200 rounded-2xl shadow-lg bg-gray-50">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Énergie</h2>
              <p className="text-gray-700">
                Optimisez vos campagnes pour générer des prospects dans le secteur énergétique.
              </p>
            </div>
            <div className="p-8 border border-gray-200 rounded-2xl shadow-lg bg-gray-50">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Assurance</h2>
              <p className="text-gray-700">
                Des solutions innovantes pour augmenter votre portefeuille de clients.
              </p>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
}
