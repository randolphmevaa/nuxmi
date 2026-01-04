"use client";

import Head from "next/head";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

import {
  ShieldCheckIcon,
  DocumentTextIcon,
  UserIcon,
  ServerIcon,
  ClockIcon,
  GlobeAltIcon,
  LockClosedIcon,
  EnvelopeIcon,
  ExclamationTriangleIcon,
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

export default function PolitiqueConfidentialite() {
  const title = "Politique de Confidentialité | Nuxmi";
  const description = "Politique de confidentialité et protection des données personnelles de Nuxmi - Energy Prime Consulting Ltd";
  const siteUrl = "https://nuxmi.fr/politique-confidentialite";

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
                  Protection des données
                </motion.span>
                <motion.h1
                  className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  Politique de <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600">Confidentialité</span>
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
                  Découvrez comment nous collectons, utilisons et protégeons vos données personnelles conformément au RGPD.
                </motion.p>
              </motion.div>
            </div>
          </section>

          {/* Content Section */}
          <section className="pb-24">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

              {/* Introduction */}
              <SectionCard icon={ShieldCheckIcon} title="Introduction" delay={0.1}>
                <p>
                  La présente politique de confidentialité décrit la manière dont <strong>Energy Prime Consulting Ltd</strong>, société de droit anglais immatriculée sous le numéro 16186153, exploitant la marque <strong>Nuxmi</strong>, collecte, utilise, stocke et protège vos données personnelles.
                </p>
                <p>
                  Nous nous engageons à protéger votre vie privée et à traiter vos données personnelles conformément au Règlement Général sur la Protection des Données (RGPD) et aux lois applicables en matière de protection des données.
                </p>
                <div className="bg-gray-50 rounded-xl p-6 mt-4">
                  <p className="font-semibold text-gray-900 mb-2">Responsable du traitement :</p>
                  <p>Energy Prime Consulting Ltd</p>
                  <p>71-75 Shelton Street, Covent Garden</p>
                  <p>London, WC2H 9JQ, United Kingdom</p>
                </div>
              </SectionCard>

              {/* Données collectées */}
              <SectionCard icon={DocumentTextIcon} title="Données collectées" delay={0.2}>
                <p>
                  Nous pouvons collecter et traiter les catégories de données personnelles suivantes :
                </p>
                <div className="mt-4 space-y-4">
                  <div className="bg-gray-50 rounded-xl p-4">
                    <p className="font-semibold text-gray-900 mb-2">Données d&apos;identification</p>
                    <p>Nom, prénom, adresse email, numéro de téléphone, nom de l&apos;entreprise, fonction/poste</p>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-4">
                    <p className="font-semibold text-gray-900 mb-2">Données de navigation</p>
                    <p>Adresse IP, type de navigateur, pages visitées, durée de visite, données de cookies</p>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-4">
                    <p className="font-semibold text-gray-900 mb-2">Données de communication</p>
                    <p>Historique des échanges, messages envoyés via nos formulaires de contact ou WhatsApp</p>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-4">
                    <p className="font-semibold text-gray-900 mb-2">Données commerciales</p>
                    <p>Informations relatives à vos demandes de services, devis, et historique de collaboration</p>
                  </div>
                </div>
              </SectionCard>

              {/* Finalités du traitement */}
              <SectionCard icon={UserIcon} title="Finalités du traitement" delay={0.3}>
                <p>
                  Vos données personnelles sont collectées et traitées pour les finalités suivantes :
                </p>
                <ul className="list-disc list-inside mt-4 space-y-2 ml-4">
                  <li>Répondre à vos demandes de contact et de renseignements</li>
                  <li>Fournir nos services de génération de leads et d&apos;acquisition client</li>
                  <li>Gérer notre relation commerciale et assurer le suivi client</li>
                  <li>Vous envoyer des informations commerciales et newsletters (avec votre consentement)</li>
                  <li>Améliorer nos services et l&apos;expérience utilisateur de notre site</li>
                  <li>Réaliser des statistiques et analyses de fréquentation</li>
                  <li>Respecter nos obligations légales et réglementaires</li>
                  <li>Prévenir la fraude et assurer la sécurité de nos systèmes</li>
                </ul>
              </SectionCard>

              {/* Base légale */}
              <SectionCard icon={ScaleIcon} title="Base légale du traitement" delay={0.4}>
                <p>
                  Le traitement de vos données personnelles repose sur les bases légales suivantes :
                </p>
                <div className="mt-4 space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <p className="font-semibold text-gray-900">Votre consentement</p>
                      <p className="text-gray-600">Pour l&apos;envoi de communications commerciales et l&apos;utilisation de certains cookies</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <p className="font-semibold text-gray-900">L&apos;exécution d&apos;un contrat</p>
                      <p className="text-gray-600">Pour la fourniture de nos services de génération de leads</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <p className="font-semibold text-gray-900">Notre intérêt légitime</p>
                      <p className="text-gray-600">Pour l&apos;amélioration de nos services et la prévention de la fraude</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <p className="font-semibold text-gray-900">Nos obligations légales</p>
                      <p className="text-gray-600">Pour le respect des réglementations applicables</p>
                    </div>
                  </div>
                </div>
              </SectionCard>

              {/* Destinataires des données */}
              <SectionCard icon={GlobeAltIcon} title="Destinataires des données" delay={0.5}>
                <p>
                  Vos données personnelles peuvent être communiquées aux destinataires suivants :
                </p>
                <ul className="list-disc list-inside mt-4 space-y-2 ml-4">
                  <li>Notre équipe interne (service commercial, support client, équipe technique)</li>
                  <li>Nos sous-traitants et prestataires de services (hébergement, emailing, CRM, analytics)</li>
                  <li>Nos partenaires commerciaux (uniquement avec votre consentement explicite)</li>
                  <li>Les autorités administratives ou judiciaires lorsque la loi l&apos;exige</li>
                </ul>
                <p className="mt-4">
                  Nous veillons à ce que nos sous-traitants présentent des garanties suffisantes en matière de protection des données personnelles et nous concluons avec eux des contrats conformes aux exigences du RGPD.
                </p>
              </SectionCard>

              {/* Transferts internationaux */}
              <SectionCard icon={GlobeAltIcon} title="Transferts internationaux" delay={0.55}>
                <p>
                  Certaines de vos données peuvent être transférées vers des pays situés en dehors de l&apos;Espace Économique Européen (EEE), notamment vers les États-Unis (hébergement, outils d&apos;analyse).
                </p>
                <p>
                  Dans ce cas, nous veillons à ce que ces transferts soient encadrés par des garanties appropriées :
                </p>
                <ul className="list-disc list-inside mt-4 space-y-2 ml-4">
                  <li>Décisions d&apos;adéquation de la Commission européenne</li>
                  <li>Clauses contractuelles types approuvées par la Commission européenne</li>
                  <li>Règles d&apos;entreprise contraignantes (BCR)</li>
                </ul>
              </SectionCard>

              {/* Durée de conservation */}
              <SectionCard icon={ClockIcon} title="Durée de conservation" delay={0.6}>
                <p>
                  Vos données personnelles sont conservées pendant une durée qui n&apos;excède pas celle nécessaire aux finalités pour lesquelles elles sont traitées :
                </p>
                <div className="mt-4 overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-900">Type de données</th>
                        <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-900">Durée de conservation</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-200 px-4 py-3">Données de prospects</td>
                        <td className="border border-gray-200 px-4 py-3">3 ans à compter du dernier contact</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="border border-gray-200 px-4 py-3">Données clients</td>
                        <td className="border border-gray-200 px-4 py-3">Durée de la relation contractuelle + 5 ans</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-200 px-4 py-3">Données de facturation</td>
                        <td className="border border-gray-200 px-4 py-3">10 ans (obligations légales)</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="border border-gray-200 px-4 py-3">Données de navigation</td>
                        <td className="border border-gray-200 px-4 py-3">13 mois maximum</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-200 px-4 py-3">Cookies</td>
                        <td className="border border-gray-200 px-4 py-3">13 mois maximum</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </SectionCard>

              {/* Sécurité */}
              <SectionCard icon={LockClosedIcon} title="Sécurité des données" delay={0.7}>
                <p>
                  Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour protéger vos données personnelles contre la destruction accidentelle ou illicite, la perte, l&apos;altération, la divulgation ou l&apos;accès non autorisé :
                </p>
                <ul className="list-disc list-inside mt-4 space-y-2 ml-4">
                  <li>Chiffrement des données sensibles (SSL/TLS)</li>
                  <li>Contrôle strict des accès aux données</li>
                  <li>Sauvegardes régulières et sécurisées</li>
                  <li>Mise à jour régulière de nos systèmes de sécurité</li>
                  <li>Sensibilisation de notre personnel à la protection des données</li>
                  <li>Procédures de gestion des incidents de sécurité</li>
                </ul>
              </SectionCard>

              {/* Vos droits */}
              <SectionCard icon={UserIcon} title="Vos droits" delay={0.8}>
                <p>
                  Conformément au RGPD, vous disposez des droits suivants concernant vos données personnelles :
                </p>
                <div className="mt-4 space-y-4">
                  <div className="bg-gray-50 rounded-xl p-4">
                    <p className="font-semibold text-gray-900 mb-1">Droit d&apos;accès</p>
                    <p>Obtenir la confirmation que vos données sont traitées et accéder à ces données</p>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-4">
                    <p className="font-semibold text-gray-900 mb-1">Droit de rectification</p>
                    <p>Faire corriger vos données inexactes ou incomplètes</p>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-4">
                    <p className="font-semibold text-gray-900 mb-1">Droit à l&apos;effacement</p>
                    <p>Demander la suppression de vos données dans certains cas</p>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-4">
                    <p className="font-semibold text-gray-900 mb-1">Droit à la limitation</p>
                    <p>Demander la limitation du traitement de vos données</p>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-4">
                    <p className="font-semibold text-gray-900 mb-1">Droit à la portabilité</p>
                    <p>Recevoir vos données dans un format structuré et lisible par machine</p>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-4">
                    <p className="font-semibold text-gray-900 mb-1">Droit d&apos;opposition</p>
                    <p>Vous opposer au traitement de vos données, notamment à des fins de prospection</p>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-4">
                    <p className="font-semibold text-gray-900 mb-1">Droit de retirer votre consentement</p>
                    <p>Retirer votre consentement à tout moment lorsque le traitement est basé sur celui-ci</p>
                  </div>
                </div>
              </SectionCard>

              {/* Exercer vos droits */}
              <SectionCard icon={EnvelopeIcon} title="Comment exercer vos droits" delay={0.9}>
                <p>
                  Pour exercer vos droits ou pour toute question relative au traitement de vos données personnelles, vous pouvez nous contacter :
                </p>
                <div className="bg-gray-50 rounded-xl p-6 mt-4">
                  <ul className="space-y-2">
                    <li><span className="text-gray-500">Par courrier :</span> <span className="text-gray-900">Energy Prime Consulting Ltd - 71-75 Shelton Street, Covent Garden, London, WC2H 9JQ, UK</span></li>
                    <li><span className="text-gray-500">Via notre formulaire :</span> <Link href="/contact" className="text-purple-600 hover:text-purple-800 transition-colors">nuxmi.fr/contact</Link></li>
                    <li><span className="text-gray-500">Via WhatsApp :</span> <a href="https://wa.me/message/XP2DMY6CM7QXK1" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-800 transition-colors">Nous contacter</a></li>
                  </ul>
                </div>
                <p className="mt-4">
                  Nous nous engageons à répondre à votre demande dans un délai d&apos;un mois. Ce délai peut être prolongé de deux mois supplémentaires en cas de demandes complexes ou nombreuses.
                </p>
                <p>
                  Pour des raisons de sécurité, nous pouvons vous demander de justifier de votre identité avant de traiter votre demande.
                </p>
              </SectionCard>

              {/* Réclamation */}
              <SectionCard icon={ExclamationTriangleIcon} title="Réclamation auprès d'une autorité de contrôle" delay={1.0}>
                <p>
                  Si vous estimez que le traitement de vos données personnelles constitue une violation du RGPD, vous avez le droit d&apos;introduire une réclamation auprès d&apos;une autorité de contrôle.
                </p>
                <div className="bg-gray-50 rounded-xl p-6 mt-4">
                  <p className="font-semibold text-gray-900 mb-2">Pour la France :</p>
                  <p>Commission Nationale de l&apos;Informatique et des Libertés (CNIL)</p>
                  <p>3 Place de Fontenoy - TSA 80715</p>
                  <p>75334 Paris Cedex 07</p>
                  <p className="mt-2"><a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-800 transition-colors">www.cnil.fr</a></p>
                </div>
                <div className="bg-gray-50 rounded-xl p-6 mt-4">
                  <p className="font-semibold text-gray-900 mb-2">Pour le Royaume-Uni :</p>
                  <p>Information Commissioner&apos;s Office (ICO)</p>
                  <p>Wycliffe House, Water Lane</p>
                  <p>Wilmslow, Cheshire SK9 5AF</p>
                  <p className="mt-2"><a href="https://ico.org.uk" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-800 transition-colors">ico.org.uk</a></p>
                </div>
              </SectionCard>

              {/* Cookies */}
              <SectionCard icon={ServerIcon} title="Cookies" delay={1.1}>
                <p>
                  Notre site utilise des cookies pour améliorer votre expérience de navigation. Pour en savoir plus sur notre utilisation des cookies et gérer vos préférences, veuillez consulter notre <Link href="/cookies" className="text-purple-600 hover:text-purple-800 transition-colors">Politique de Cookies</Link>.
                </p>
              </SectionCard>

              {/* Modifications */}
              <SectionCard icon={DocumentTextIcon} title="Modifications de la politique" delay={1.2}>
                <p>
                  Nous nous réservons le droit de modifier cette politique de confidentialité à tout moment. Toute modification sera publiée sur cette page avec une date de mise à jour actualisée.
                </p>
                <p>
                  Nous vous encourageons à consulter régulièrement cette page pour rester informé(e) de nos pratiques en matière de protection des données.
                </p>
                <p>
                  En cas de modifications substantielles, nous vous en informerons par email ou par une notification visible sur notre site.
                </p>
              </SectionCard>

              {/* Date de mise à jour */}
              <motion.div
                className="text-center text-gray-500 text-sm mt-12"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 1.3 }}
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
