// components/Footer.tsx
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaLinkedin, FaTwitter, FaInstagram, FaFacebookF, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-gray-50 to-gray-100 border-t border-gray-200">
      {/* Newsletter subscription banner */}
      {/* <div className="bg-purple-600 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between relative overflow-hidden">
            <div className="absolute right-0 top-0 w-64 h-64 bg-purple-100 rounded-full -mr-32 -mt-32 opacity-20"></div>
            <div className="absolute left-0 bottom-0 w-40 h-40 bg-purple-100 rounded-full -ml-20 -mb-20 opacity-20"></div>
            
            <div className="mb-8 md:mb-0 md:max-w-xl relative z-10">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Recevez nos conseils d'experts</h3>
              <p className="text-gray-600">Inscrivez-vous à notre newsletter pour recevoir les dernières actualités et conseils marketing.</p>
            </div>
            
            <div className="w-full md:w-auto relative z-10">
              <div className="flex flex-col sm:flex-row gap-3">
                <input 
                  type="email" 
                  placeholder="Votre email professionnel" 
                  className="px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-purple-700 transition-colors shadow-sm"
                >
                  S'inscrire
                </motion.button>
              </div>
              <p className="text-xs text-gray-500 mt-2">En vous inscrivant, vous acceptez notre politique de confidentialité.</p>
            </div>
          </div>
        </div>
      </div> */}

      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Top section with tagline */}
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Reposez-vous, nous générons vos prochains prospects qualifiés B2B et B2C pour vous.
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Depuis 2018, Nuxmi aide les entreprises à développer leur acquisition client avec des stratégies digitales sur-mesure et mesurables.
          </p>
          <div className="h-1 w-24 bg-purple-600 mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12">
          {/* Branding */}
          <div className="lg:col-span-4 space-y-6">
            <Image
              src="https://cdn.prod.website-files.com/62d355d9727756759479db7a/62d46c98fd4c7100ffdf88fe_Logo%20fond%20transparent-p-500.png"
              alt="Nuxmi"
              width={200}
              height={80}
              className="h-16 w-auto"
            />
            <p className="text-gray-600 text-sm leading-relaxed">
              Architectes de croissance digitale pour marques exigeantes. Nous créons des stratégies d&apos;acquisition client innovantes et mesurables.
            </p>
            <div className="pt-4 flex space-x-3">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="bg-purple-600 text-white px-6 py-2 rounded-lg text-sm font-medium hover:bg-purple-700 transition-colors shadow-sm"
              >
                Demandez un devis
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="bg-white text-purple-600 border border-purple-600 px-6 py-2 rounded-lg text-sm font-medium hover:bg-purple-50 transition-colors"
              >
                Nos résultats
              </motion.button>
            </div>
          </div>

          {/* Solutions Links */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-gray-900 font-semibold text-lg mb-6 relative">
              <span className="inline-block pb-2 relative">
                Solutions
                <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-purple-600"></span>
              </span>
            </h4>
            {[
              "Stratégie LeadGen",
              "Automation Marketing",
              "Optimisation CRO",
              "Publicité Premium",
              "Marketing d'Influence",
              "Analytics & Data",
            ].map((item) => (
              <Link
                key={item}
                href="#"
                className="text-gray-600 hover:text-purple-600 transition-colors block text-sm py-1 flex items-center"
              >
                <span className="inline-block w-1 h-1 bg-purple-600 rounded-full mr-2"></span>
                {item}
              </Link>
            ))}
          </div>

          {/* About Links */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-gray-900 font-semibold text-lg mb-6 relative">
              <span className="inline-block pb-2 relative">
                À propos
                <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-purple-600"></span>
              </span>
            </h4>
            {[
              { label: "Notre équipe", url: "#" },
              { label: "Contact", url: "/contact" },
              { label: "Blog", url: "/blog" },
              { label: "Mentions légales", url: "/mentions-legales" },
              { label: "Témoignages", url: "#" },
              { label: "Carrières", url: "#" },
            ].map((item) => (
              <Link
                key={item.label}
                href={item.url}
                className="text-gray-600 hover:text-purple-600 transition-colors block text-sm py-1 flex items-center"
              >
                <span className="inline-block w-1 h-1 bg-purple-600 rounded-full mr-2"></span>
                {item.label}
              </Link>
            ))}
          </div>

          {/* Contact */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-gray-900 font-semibold text-lg mb-6 relative">
              <span className="inline-block pb-2 relative">
                Contact
                <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-purple-600"></span>
              </span>
            </h4>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="text-gray-600 text-sm space-y-4">
                <p className="flex items-start">
                  <span className="inline-block w-5 mr-3 text-purple-600 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                  </span>
                  <span>34 avenue des Champs Élysées<br />75008 Paris, France</span>
                </p>
                <p className="flex items-start">
                  <span className="inline-block w-5 mr-3 text-purple-600 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                  </span>
                  <span>09.67.07.46.95</span>
                </p>
                <p className="flex items-start">
                  <span className="inline-block w-5 mr-3 text-purple-600 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                      <polyline points="22,6 12,13 2,6"></polyline>
                    </svg>
                  </span>
                  <span>contact@nuxmi.fr</span>
                </p>
              </div>

              {/* Social */}
              <div className="mt-6">
                <h5 className="text-gray-900 font-medium text-sm mb-4">Suivez-nous</h5>
                <div className="flex space-x-3">
                  {[
                    { name: "LinkedIn", icon: <FaLinkedin size={16} /> },
                    { name: "Twitter", icon: <FaTwitter size={16} /> },
                    { name: "Instagram", icon: <FaInstagram size={16} /> },
                    { name: "Facebook", icon: <FaFacebookF size={16} /> },
                    { name: "WhatsApp", icon: <FaWhatsapp size={16} /> },
                  ].map((social) => (
                    <Link key={social.name} href="#" aria-label={social.name}>
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-white text-purple-600 hover:bg-purple-600 hover:text-white p-2 rounded-full shadow-sm transition-colors duration-200 border border-gray-100"
                      >
                        {social.icon}
                      </motion.div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        {/* <div className="mt-20 grid grid-cols-1 md:grid-cols-4 gap-8">
          {[
            { label: "Clients satisfaits", value: "350+" },
            { label: "Leads générés", value: "25K+" },
            { label: "ROI moyen", value: "304%" },
            { label: "Années d'expérience", value: "7" },
          ].map((stat, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center">
              <p className="text-3xl font-bold text-purple-600 mb-2">{stat.value}</p>
              <p className="text-gray-600 text-sm">{stat.label}</p>
            </div>
          ))}
        </div> */}

        <div className="border-t border-gray-200 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            © 2026 Nuxmi. Tous droits réservés.
          </p>
          <div className="mt-4 md:mt-0 flex flex-wrap justify-center gap-4">
            <Link href="/politique-confidentialite" className="text-sm text-gray-500 hover:text-purple-600 transition-colors">
              Politique de confidentialité
            </Link>
            <span className="hidden md:inline text-gray-300">|</span>
            <Link href="/cgu" className="text-sm text-gray-500 hover:text-purple-600 transition-colors">
              CGU
            </Link>
            <span className="hidden md:inline text-gray-300">|</span>
            <Link href="/cookies" className="text-sm text-gray-500 hover:text-purple-600 transition-colors">
              Gestion des cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
