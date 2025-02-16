"use client";

import Head from "next/head";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Terms() {
  return (
    <>
      <Head>
        <title>Nuxmi | Conditions Générales</title>
        <meta name="description" content="Consultez nos conditions générales d'utilisation." />
      </Head>
      <div className="min-h-screen bg-white">
        <Navbar />
        <main className="pt-28 pb-12 max-w-7xl mx-auto px-4">
          <header className="text-center mb-12">
            <h1 className="text-5xl font-bold text-gray-900">Conditions Générales</h1>
            <p className="mt-4 text-xl text-gray-700">
              Veuillez lire attentivement nos conditions générales d&apos;utilisation.
            </p>
          </header>
          <article className="prose lg:prose-xl max-w-4xl mx-auto">
            <h2>1. Introduction</h2>
            <p>
              Bienvenue sur le site de Nuxmi. En utilisant notre site, vous acceptez nos conditions générales d&apos;utilisation.
            </p>
            <h2>2. Propriété intellectuelle</h2>
            <p>
              Tout le contenu de ce site, y compris les textes, images, et graphiques, est protégé par le droit d&apos;auteur.
            </p>
            <h2>3. Utilisation du site</h2>
            <p>
              Vous vous engagez à utiliser ce site conformément à toutes les lois applicables et à nos conditions d&apos;utilisation.
            </p>
            <h2>4. Responsabilités</h2>
            <p>
              Nuxmi ne saurait être tenue responsable des dommages résultant de l&apos;utilisation de ce site.
            </p>
            <h2>5. Modifications</h2>
            <p>
              Nous nous réservons le droit de modifier ces conditions à tout moment. Les modifications prendront effet dès leur publication.
            </p>
            <h2>6. Contact</h2>
            <p>
              Pour toute question relative à ces conditions, veuillez nous contacter via notre page de contact.
            </p>
          </article>
        </main>
        <Footer />
      </div>
    </>
  );
}
