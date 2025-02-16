"use client";

import Head from "next/head";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Contact() {
  return (
    <>
      <Head>
        <title>Nuxmi | Contact</title>
        <meta name="description" content="Contactez-nous pour en savoir plus sur nos solutions." />
      </Head>
      <div className="min-h-screen bg-white">
        <Navbar />
        <main className="pt-28 pb-12 max-w-7xl mx-auto px-4">
          <header className="text-center mb-12">
            <h1 className="text-5xl font-bold text-gray-900">Contact</h1>
            <p className="mt-4 text-xl text-gray-700">
              Pour toute demande d&apos;information, contactez-nous via le formulaire ci-dessous.
            </p>
          </header>
          <section className="bg-gray-50 p-8 rounded-2xl shadow-lg max-w-3xl mx-auto">
            <form className="space-y-6">
              <div>
                <label className="block text-xl font-semibold text-gray-700" htmlFor="name">Nom</label>
                <input
                  type="text"
                  id="name"
                  className="mt-2 w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                  placeholder="Votre nom"
                />
              </div>
              <div>
                <label className="block text-xl font-semibold text-gray-700" htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  className="mt-2 w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                  placeholder="Votre email"
                />
              </div>
              <div>
                <label className="block text-xl font-semibold text-gray-700" htmlFor="message">Message</label>
                <textarea
                  id="message"
                  rows={5}
                  className="mt-2 w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                  placeholder="Votre message"
                ></textarea>
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="px-10 py-4 bg-purple-600 text-white rounded-2xl text-xl font-semibold shadow-xl hover:shadow-2xl transition-all"
                >
                  Envoyer
                </button>
              </div>
            </form>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
}
