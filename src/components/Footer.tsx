// components/Footer.tsx
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-100">
      <div className="max-w-8xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Branding */}
          <div className="space-y-6">
            <Image
              src="https://cdn.prod.website-files.com/62d355d9727756759479db7a/62d46c98fd4c7100ffdf88fe_Logo%20fond%20transparent-p-500.png"
              alt="Nuxmi"
              width={200}
              height={80}
              className="h-16 w-auto"
            />
            <p className="text-gray-500 text-sm leading-relaxed">
              Architectes de croissance digitale pour marques exigeantes.
            </p>
          </div>

          {/* Solutions Links */}
          <div className="space-y-4">
            <h4 className="text-gray-900 font-semibold text-lg mb-4">Solutions</h4>
            {[
              "Stratégie LeadGen",
              "Automation Marketing",
              "Optimisation CRO",
              "Publicité Premium",
            ].map((item) => (
              <Link
                key={item}
                href="#"
                className="text-gray-500 hover:text-purple-600 transition-colors block text-sm"
              >
                {item}
              </Link>
            ))}
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-gray-900 font-semibold text-lg mb-4">Contact</h4>
            <div className="text-gray-500 text-sm space-y-2">
              <p>18 Avenue George V</p>
              <p>75008 Paris, France</p>
              <p>contact@nuxmi.com</p>
              <p>+33 1 84 88 42 16</p>
            </div>
          </div>

          {/* Social */}
          <div className="space-y-4">
            <h4 className="text-gray-900 font-semibold text-lg mb-4">Suivez-nous</h4>
            <div className="flex space-x-4">
              {[
                { name: "LinkedIn", icon: <FaLinkedin size={20} /> },
                { name: "Twitter", icon: <FaTwitter size={20} /> },
                { name: "Instagram", icon: <FaInstagram size={20} /> },
              ].map((social) => (
                <Link key={social.name} href="#" aria-label={social.name}>
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="text-gray-500 hover:text-purple-600 transition-colors"
                  >
                    {social.icon}
                  </motion.div>
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-16 pt-8 text-center">
          <p className="text-gray-500 text-sm">
            © 2024 Nuxmi. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}
