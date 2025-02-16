"use client";

import Head from "next/head";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Expertises() {
  return (
    <>
      <Head>
        <title>Nuxmi | Nos Expertises</title>
        <meta name="description" content="Découvrez nos expertises en marketing digital." />
      </Head>
      <div className="min-h-screen bg-white">
        <Navbar />
        <main className="pt-28 pb-12 max-w-7xl mx-auto px-4">
          <header className="text-center mb-12">
            <h1 className="text-5xl font-bold text-gray-900">Nos Expertises</h1>
            <p className="mt-4 text-xl text-gray-700">
              Nous mettons notre savoir-faire en marketing digital au service de votre croissance.
            </p>
          </header>
          <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 border border-gray-200 rounded-2xl shadow-lg bg-gray-50">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Stratégie Digitale</h2>
              <p className="text-gray-700">
                Élaboration de stratégies complètes pour augmenter votre visibilité et vos leads.
              </p>
            </div>
            <div className="p-8 border border-gray-200 rounded-2xl shadow-lg bg-gray-50">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Automation Marketing</h2>
              <p className="text-gray-700">
                Optimisation des processus marketing pour un engagement client accru.
              </p>
            </div>
            <div className="p-8 border border-gray-200 rounded-2xl shadow-lg bg-gray-50">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Optimisation CRO</h2>
              <p className="text-gray-700">
                Amélioration de votre taux de conversion grâce à des tests et analyses approfondis.
              </p>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
}
