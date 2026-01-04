"use client";

import Head from "next/head";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

import {
  BuildingOffice2Icon,
  DocumentTextIcon,
  ShieldCheckIcon,
  UserIcon,
  GlobeAltIcon,
  EnvelopeIcon,
  ScaleIcon,
} from "@heroicons/react/24/outline";

interface SectionCardProps {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  children: React.ReactNode;
  delay?: number;
}

const SectionCard: React.FC<SectionCardProps> = ({ icon: Icon, title, children, delay = 0 }) => (
  <motion.div
    className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 mb-8"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
  >
    <div className="flex items-center gap-4 mb-6">
      <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
        <Icon className="w-6 h-6 text-purple-600" />
      </div>
      <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
    </div>
    <div className="text-gray-600 leading-relaxed space-y-4">
      {children}
    </div>
  </motion.div>
);

export default function MentionsLegales() {
  const title = "Mentions Légales | Nuxmi";
  const description = "Mentions légales et informations juridiques de Nuxmi - Energy Prime Consulting Ltd";
  const siteUrl = "https://nuxmi.fr/mentions-legales";

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={siteUrl} />
      </Head>

      <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
        <Navbar />

        <main className="relative z-10">
          {/* Hero Section */}
          <section className="relative overflow-hidden pt-40 pb-16">
            <div className="absolute -top-40 -left-40 w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
            <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
              <motion.div
                className="text-center mb-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <motion.span
                  className="inline-block py-1 px-3 rounded-full bg-purple-100 text-purple-700 text-sm font-medium mb-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                >
                  Informations juridiques
                </motion.span>
                <motion.h1
                  className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  Mentions <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600">Légales</span>
                </motion.h1>
                <motion.div
                  className="w-20 h-1.5 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full mx-auto mb-6"
                  initial={{ opacity: 0, width: 0 }}
                  animate={{ opacity: 1, width: 80 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                />
                <motion.p
                  className="text-xl text-gray-600 max-w-2xl mx-auto"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  Conformément aux dispositions légales, voici les informations relatives à l&apos;éditeur et à l&apos;hébergement du site nuxmi.fr
                </motion.p>
              </motion.div>
            </div>
          </section>

          {/* Content Section */}
          <section className="pb-24">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              
              {/* Éditeur du site */}
              <SectionCard icon={BuildingOffice2Icon} title="Éditeur du site" delay={0.1}>
                <p>
                  Le site <strong>nuxmi.fr</strong> est édité par :
                </p>
                <div className="bg-gray-50 rounded-xl p-6 mt-4">
                  <p className="font-semibold text-gray-900 text-lg mb-3">ENERGY PRIME CONSULTING LTD</p>
                  <ul className="space-y-2">
                    <li><span className="text-gray-500">Numéro d&apos;entreprise :</span> <span className="text-gray-900">16186153</span></li>
                    <li><span className="text-gray-500">Forme juridique :</span> <span className="text-gray-900">Private Limited Company (Société à responsabilité limitée)</span></li>
                    <li><span className="text-gray-500">Siège social :</span> <span className="text-gray-900">71-75 Shelton Street, Covent Garden, London, WC2H 9JQ, United Kingdom</span></li>
                    <li><span className="text-gray-500">Date d&apos;immatriculation :</span> <span className="text-gray-900">15 janvier 2026</span></li>
                    <li><span className="text-gray-500">Statut :</span> <span className="text-green-600 font-medium">Active</span></li>
                  </ul>
                </div>
                <p className="mt-4">
                  <strong>Nuxmi</strong> est une marque commerciale exploitée par Energy Prime Consulting Ltd.
                </p>
              </SectionCard>

              {/* Activités */}
              <SectionCard icon={GlobeAltIcon} title="Activités de l'entreprise" delay={0.2}>
                <p>
                  Conformément à la classification SIC (Standard Industrial Classification), les activités déclarées de l&apos;entreprise sont :
                </p>
                <ul className="list-disc list-inside mt-4 space-y-2 ml-4">
                  <li><strong>43290</strong> - Autres travaux d&apos;installation</li>
                  <li><strong>47910</strong> - Vente au détail par correspondance ou via Internet</li>
                </ul>
                <p className="mt-4">
                  L&apos;activité principale de Nuxmi concerne la génération de leads et l&apos;acquisition client pour les entreprises B2B et B2C.
                </p>
              </SectionCard>

              {/* Directeur de la publication */}
              <SectionCard icon={UserIcon} title="Directeur de la publication" delay={0.3}>
                <p>
                  Le directeur de la publication du site nuxmi.fr est le représentant légal de la société Energy Prime Consulting Ltd.
                </p>
              </SectionCard>

              {/* Contact */}
              <SectionCard icon={EnvelopeIcon} title="Contact" delay={0.4}>
                <p>
                  Pour toute question ou demande concernant le site ou nos services, vous pouvez nous contacter :
                </p>
                <div className="bg-gray-50 rounded-xl p-6 mt-4">
                  <ul className="space-y-2">
                    <li><span className="text-gray-500">Site web :</span> <a href="https://nuxmi.fr" className="text-purple-600 hover:text-purple-800 transition-colors">nuxmi.fr</a></li>
                    <li><span className="text-gray-500">Page de contact :</span> <Link href="/contact" className="text-purple-600 hover:text-purple-800 transition-colors">nuxmi.fr/contact</Link></li>
                    <li><span className="text-gray-500">WhatsApp :</span> <a href="https://wa.me/message/XP2DMY6CM7QXK1" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-800 transition-colors">Nous contacter via WhatsApp</a></li>
                  </ul>
                </div>
              </SectionCard>

              {/* Hébergement */}
              <SectionCard icon={ShieldCheckIcon} title="Hébergement" delay={0.5}>
                <p>
                  Le site nuxmi.fr est hébergé par :
                </p>
                <div className="bg-gray-50 rounded-xl p-6 mt-4">
                  <p className="font-semibold text-gray-900">Vercel Inc.</p>
                  <p className="text-gray-600 mt-2">440 N Barranca Ave #4133<br />Covina, CA 91723<br />United States</p>
                  <p className="mt-2"><span className="text-gray-500">Site web :</span> <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-800 transition-colors">vercel.com</a></p>
                </div>
              </SectionCard>

              {/* Propriété intellectuelle */}
              <SectionCard icon={DocumentTextIcon} title="Propriété intellectuelle" delay={0.6}>
                <p>
                  L&apos;ensemble du contenu du site nuxmi.fr (textes, images, graphismes, logo, icônes, sons, logiciels, etc.) est la propriété exclusive de Energy Prime Consulting Ltd ou de ses partenaires, à l&apos;exception des marques, logos ou contenus appartenant à d&apos;autres sociétés partenaires ou auteurs.
                </p>
                <p>
                  Toute reproduction, représentation, modification, publication, adaptation de tout ou partie des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite, sauf autorisation écrite préalable de Energy Prime Consulting Ltd.
                </p>
                <p>
                  Toute exploitation non autorisée du site ou de l&apos;un quelconque des éléments qu&apos;il contient sera considérée comme constitutive d&apos;une contrefaçon et poursuivie conformément aux dispositions des articles L.335-2 et suivants du Code de Propriété Intellectuelle.
                </p>
              </SectionCard>

              {/* Données personnelles */}
              <SectionCard icon={ShieldCheckIcon} title="Protection des données personnelles" delay={0.7}>
                <p>
                  Conformément au Règlement Général sur la Protection des Données (RGPD) et à la loi Informatique et Libertés, vous disposez d&apos;un droit d&apos;accès, de rectification, de suppression et d&apos;opposition aux données personnelles vous concernant.
                </p>
                <p>
                  Les données collectées sur ce site sont utilisées uniquement dans le cadre de nos services de génération de leads et ne sont jamais revendues à des tiers sans votre consentement explicite.
                </p>
                <p>
                  Pour exercer vos droits ou pour toute question relative au traitement de vos données personnelles, vous pouvez nous contacter via notre <Link href="/contact" className="text-purple-600 hover:text-purple-800 transition-colors">page de contact</Link>.
                </p>
                <p>
                  Pour plus d&apos;informations sur la gestion de vos données personnelles, veuillez consulter notre <Link href="/politique-de-confidentialite" className="text-purple-600 hover:text-purple-800 transition-colors">Politique de Confidentialité</Link>.
                </p>
              </SectionCard>

              {/* Cookies */}
              <SectionCard icon={DocumentTextIcon} title="Cookies" delay={0.8}>
                <p>
                  Le site nuxmi.fr peut être amené à utiliser des cookies pour améliorer l&apos;expérience utilisateur, réaliser des statistiques de visites et proposer des contenus adaptés à vos centres d&apos;intérêt.
                </p>
                <p>
                  En naviguant sur ce site, vous acceptez l&apos;utilisation de cookies conformément à notre politique de cookies. Vous pouvez à tout moment modifier les paramètres de votre navigateur pour désactiver les cookies.
                </p>
              </SectionCard>

              {/* Limitation de responsabilité */}
              <SectionCard icon={ScaleIcon} title="Limitation de responsabilité" delay={0.9}>
                <p>
                  Energy Prime Consulting Ltd s&apos;efforce d&apos;assurer l&apos;exactitude et la mise à jour des informations diffusées sur le site nuxmi.fr. Cependant, elle ne peut garantir l&apos;exactitude, la précision ou l&apos;exhaustivité des informations mises à disposition sur ce site.
                </p>
                <p>
                  En conséquence, Energy Prime Consulting Ltd décline toute responsabilité :
                </p>
                <ul className="list-disc list-inside mt-2 space-y-2 ml-4">
                  <li>Pour toute imprécision, inexactitude ou omission portant sur des informations disponibles sur le site</li>
                  <li>Pour tous dommages résultant d&apos;une intrusion frauduleuse d&apos;un tiers ayant entraîné une modification des informations mises à disposition sur le site</li>
                  <li>Et plus généralement, pour tous dommages, directs ou indirects, quelles qu&apos;en soient les causes, origines, natures ou conséquences</li>
                </ul>
              </SectionCard>

              {/* Droit applicable */}
              <SectionCard icon={ScaleIcon} title="Droit applicable et juridiction" delay={1.0}>
                <p>
                  Les présentes mentions légales sont soumises au droit anglais. En cas de litige, et après échec de toute tentative de recherche d&apos;une solution amiable, les tribunaux anglais seront seuls compétents pour connaître de ce litige.
                </p>
                <p>
                  Pour les utilisateurs résidant dans l&apos;Union Européenne, conformément à la réglementation européenne, vous pouvez également avoir recours à la plateforme de Règlement en Ligne des Litiges (RLL) de la Commission européenne accessible à l&apos;adresse suivante : <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-800 transition-colors">https://ec.europa.eu/consumers/odr</a>
                </p>
              </SectionCard>

              {/* Date de mise à jour */}
              <motion.div
                className="text-center text-gray-500 text-sm mt-12"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 1.1 }}
              >
                <p>Dernière mise à jour : Janvier 2026</p>
              </motion.div>

            </div>
          </section>

          {/* WhatsApp Button */}
          <Link
            href="https://wa.me/message/XP2DMY6CM7QXK1?text=Bonjour%20!"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-50 inline-flex items-center justify-center
                        w-14 h-14 bg-[#25D366] rounded-full shadow-md
                        hover:bg-[#20b358] transition-all"
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
                      -.38-.232" />
            </svg>
          </Link>
        </main>

        <Footer />
      </div>
    </>
  );
}