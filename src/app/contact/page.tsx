"use client";

import React, { useState } from "react";
import Head from "next/head";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { FiMapPin, FiPhone, FiMail, FiSend } from "react-icons/fi";
import Link from "next/link";

interface BlurBackgroundProps {
  children?: React.ReactNode;
  className?: string;
}

const BlurBackground = ({ children, className }: BlurBackgroundProps) => (
  <div className={`relative ${className}`}>
    <div className="absolute -top-40 -left-40 w-96 h-96 bg-gradient-to-r from-purple-400 to-pink-300 rounded-full mix-blend-soft-light filter blur-[100px] opacity-30 animate-blob"></div>
    <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-gradient-to-r from-blue-400 to-cyan-300 rounded-full mix-blend-soft-light filter blur-[100px] opacity-30 animate-blob animation-delay-2000"></div>
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-pink-400 to-rose-300 rounded-full mix-blend-soft-light filter blur-[100px] opacity-30 animate-blob animation-delay-4000"></div>
    {children}
  </div>
);

export default function Contact() {
  // Define state for the contact form fields.
  const [contactData, setContactData] = useState({
    fullName: "",
    email: "",
    message: ""
  });
  const [contactSent, setContactSent] = useState(false);

  // Handle changes in the input fields.
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setContactData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle form submission.
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted:", contactData);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(contactData),
      });

      const data = await response.json();
      console.log("Response from server:", data);

      // Optionally reset the form upon success.
      setContactData({
        fullName: "",
        email: "",
        message: "",
      });
      // Set the state to display a confirmation message.
      setContactSent(true);
    } catch (error) {
      console.error("Error submitting contact form:", error);
    }
  };

  return (
    <>
      <Head>
        <title>Nuxmi | Contact</title>
        <meta
          name="description"
          content="Contactez-nous pour en savoir plus sur nos solutions."
        />
      </Head>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        <BlurBackground className="absolute inset-0" />
        <Navbar />

        <main className="relative z-10 pt-48 pb-16 max-w-7xl mx-auto px-4">
          <header className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-block mb-4 px-6 py-2 bg-purple-100 rounded-full"
            >
              <span className="text-purple-700 font-medium">
                Discutons ensemble
              </span>
            </motion.div>
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-600"
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Contactez-nous
            </motion.h1>
            <motion.p
              className="mt-6 text-lg md:text-xl text-gray-700 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Pour toute demande d&apos;information, remplissez le formulaire ci-dessous ou contactez-nous directement.
            </motion.p>
          </header>

          <div className="grid lg:grid-cols-2 gap-16 max-w-7xl mx-auto">
            {/* Contact Information */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {/* Address + Map */}
              <div className="p-8 bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-100">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-4 bg-purple-100 rounded-xl">
                    <FiMapPin className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">
                      Notre siège
                    </h3>
                    <p className="text-gray-600">
                      34 avenue des Champs Élysées
                      <br />
                      75008 Paris, France
                    </p>
                  </div>
                </div>
                <div className="h-48 rounded-xl overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.3378857420216!2d2.304682215385276!3d48.86989117928827!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66fc4202dfd21%3A0xa86133236c13c83f!2s34%20Av.%20des%20Champs-%C3%89lys%C3%A9es%2C%2075008%20Paris%2C%20France!5e0!3m2!1sen!2sus!4v1674758661576!5m2!1sen!2sus"
                    className="w-full h-full rounded-lg border-0"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Phone and Email */}
              <div className="space-y-6">
                <div className="p-6 bg-white/90 backdrop-blur-sm rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-blue-100 rounded-lg">
                      <FiPhone className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">
                        Téléphone
                      </h3>
                      <p className="text-gray-600 font-medium">09.67.07.46.95</p>
                    </div>
                  </div>
                </div>
                <div className="p-6 bg-white/90 backdrop-blur-sm rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-pink-100 rounded-lg">
                      <FiMail className="w-6 h-6 text-pink-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">
                        Email
                      </h3>
                      <p className="text-gray-600 font-medium">
                        contact@nuxmi.fr
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              className="bg-white/90 backdrop-blur-sm p-10 rounded-2xl shadow-2xl border border-gray-100"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              {contactSent ? (
                <div className="text-center">
                  <h3 className="text-xl font-bold text-gray-900">Merci !</h3>
                  <p className="text-gray-700">
                    Votre message a bien été envoyé. Nous vous contacterons sous peu.
                  </p>
                </div>
              ) : (
                <form className="space-y-8" onSubmit={handleSubmit}>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nom complet
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        name="fullName"
                        value={contactData.fullName}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 text-gray-700 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all placeholder-gray-400 hover:border-gray-300"
                        placeholder="Jean Dupont"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Adresse email
                    </label>
                    <div className="relative">
                      <input
                        type="email"
                        name="email"
                        value={contactData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 text-gray-700 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all placeholder-gray-400 hover:border-gray-300"
                        placeholder="jean@exemple.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Message
                    </label>
                    <textarea
                      rows={5}
                      name="message"
                      value={contactData.message}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 text-gray-700 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all placeholder-gray-400 hover:border-gray-300"
                      placeholder="Décrivez votre projet..."
                    />
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="w-full px-6 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-shadow flex items-center justify-center gap-2"
                  >
                    <FiSend className="w-5 h-5" />
                    Envoyer le message
                  </motion.button>
                </form>
              )}
            </motion.div>
          </div>

          <motion.div
            className="mt-24 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <p className="text-gray-600">
              Nous répondons généralement sous{" "}
              <span className="font-semibold text-purple-600">24 heures</span>
            </p>
            <div className="mt-4 flex justify-center gap-4">
              {/* Social media links can be added here */}
            </div>
          </motion.div>

          <Link
            href="https://wa.me/message/XP2DMY6CM7QXK1?text=Bonjour%20!"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-50 inline-flex items-center justify-center w-14 h-14 bg-[#25D366] rounded-full shadow-md hover:bg-[#20b358] transition-all"
            aria-label="WhatsApp Chat"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              viewBox="0 0 16 16"
              className="text-white w-7 h-7"
            >
              <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 
                .068 3.558.064 7.926c0 1.399.366 2.76 1.057 
                3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 
                0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 
                14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433
                -.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 
                6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 
                1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934
                c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099
                -.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1
                -.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114
                -.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114
                .133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445
                -1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247
                -.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 
                1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47
                .205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171
                -.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133
                -.38-.232"/>
            </svg>
          </Link>
        </main>
        <Footer />
      </div>
    </>
  );
}
