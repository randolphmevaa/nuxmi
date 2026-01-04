"use client";

import Head from "next/head";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

import {
  CogIcon,
  ShieldCheckIcon,
  DocumentTextIcon,
  ClockIcon,
  AdjustmentsHorizontalIcon,
  ChartBarIcon,
  MegaphoneIcon,
  UserGroupIcon,
  ComputerDesktopIcon,
  EnvelopeIcon,
  InformationCircleIcon,
  ExclamationCircleIcon,
} from "@heroicons/react/24/outline";

interface SectionCardProps {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  children: React.ReactNode;
  delay?: number;
}

interface CookieTableRowProps {
  name: string;
  provider: string;
  purpose: string;
  duration: string;
  type: string;
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

const CookieTypeCard: React.FC<{ icon: React.ComponentType<React.SVGProps<SVGSVGElement>>; title: string; description: string; required?: boolean }> = ({ icon: Icon, title, description, required = false }) => (
  <div className={`bg-gray-50 rounded-xl p-6 ${required ? 'border-2 border-purple-200' : ''}`}>
    <div className="flex items-start gap-4">
      <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-sm flex-shrink-0">
        <Icon className="w-5 h-5 text-purple-600" />
      </div>
      <div>
        <div className="flex items-center gap-2 mb-2">
          <h4 className="font-semibold text-gray-900">{title}</h4>
          {required && (
            <span className="px-2 py-0.5 bg-purple-100 text-purple-700 text-xs font-medium rounded-full">
              Requis
            </span>
          )}
        </div>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
    </div>
  </div>
);

const CookieTableRow: React.FC<CookieTableRowProps> = ({ name, provider, purpose, duration, type }) => (
  <tr className="border-b border-gray-100 hover:bg-gray-50">
    <td className="px-4 py-3 font-medium text-gray-900">{name}</td>
    <td className="px-4 py-3 text-gray-600">{provider}</td>
    <td className="px-4 py-3 text-gray-600">{purpose}</td>
    <td className="px-4 py-3 text-gray-600">{duration}</td>
    <td className="px-4 py-3">
      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
        type === 'Essentiel' ? 'bg-green-100 text-green-700' :
        type === 'Analytique' ? 'bg-blue-100 text-blue-700' :
        type === 'Marketing' ? 'bg-orange-100 text-orange-700' :
        'bg-gray-100 text-gray-700'
      }`}>
        {type}
      </span>
    </td>
  </tr>
);

export default function Cookies() {
  const title = "Politique de Cookies | Nuxmi";
  const description = "Politique de cookies du site Nuxmi - Découvrez comment nous utilisons les cookies et gérez vos préférences";
  const siteUrl = "https://nuxmi.fr/cookies";

  const cookiesData: CookieTableRowProps[] = [
    {
      name: "cookieconsent_status",
      provider: "Nuxmi",
      purpose: "Stocke le consentement de l'utilisateur pour les cookies",
      duration: "1 an",
      type: "Essentiel"
    },
    {
      name: "PHPSESSID",
      provider: "Nuxmi",
      purpose: "Identifiant de session pour maintenir l'état de connexion",
      duration: "Session",
      type: "Essentiel"
    },
    {
      name: "_ga",
      provider: "Google Analytics",
      purpose: "Distingue les utilisateurs uniques pour les statistiques",
      duration: "2 ans",
      type: "Analytique"
    },
    {
      name: "_ga_*",
      provider: "Google Analytics",
      purpose: "Maintient l'état de la session",
      duration: "2 ans",
      type: "Analytique"
    },
    {
      name: "_gid",
      provider: "Google Analytics",
      purpose: "Distingue les utilisateurs pour les statistiques quotidiennes",
      duration: "24 heures",
      type: "Analytique"
    },
    {
      name: "_gat",
      provider: "Google Analytics",
      purpose: "Limite le taux de requêtes",
      duration: "1 minute",
      type: "Analytique"
    },
    {
      name: "_fbp",
      provider: "Facebook",
      purpose: "Suivi des conversions publicitaires Facebook",
      duration: "3 mois",
      type: "Marketing"
    },
    {
      name: "_gcl_au",
      provider: "Google Ads",
      purpose: "Stocke les informations de conversion publicitaire",
      duration: "3 mois",
      type: "Marketing"
    },
    {
      name: "IDE",
      provider: "Google DoubleClick",
      purpose: "Mesure l'efficacité des publicités",
      duration: "1 an",
      type: "Marketing"
    },
    {
      name: "NID",
      provider: "Google",
      purpose: "Personnalisation des annonces Google",
      duration: "6 mois",
      type: "Marketing"
    },
  ];

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
                  Transparence
                </motion.span>
                <motion.h1
                  className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  Politique de <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600">Cookies</span>
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
                  Découvrez comment nous utilisons les cookies sur notre site et comment gérer vos préférences.
                </motion.p>
              </motion.div>
            </div>
          </section>

          {/* Content Section */}
          <section className="pb-24">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

              {/* Qu'est-ce qu'un cookie */}
              <SectionCard icon={InformationCircleIcon} title="Qu'est-ce qu'un cookie ?" delay={0.1}>
                <p>
                  Un cookie est un petit fichier texte déposé sur votre terminal (ordinateur, tablette, smartphone) lors de la visite d&apos;un site web. Il permet au site de mémoriser des informations sur votre visite, comme votre langue préférée et d&apos;autres paramètres.
                </p>
                <p>
                  Les cookies sont largement utilisés pour faire fonctionner les sites web, les rendre plus efficaces, ainsi que pour fournir des informations aux propriétaires du site.
                </p>
                <div className="bg-purple-50 border border-purple-100 rounded-xl p-4 mt-4">
                  <p className="text-purple-800">
                    <strong>Bon à savoir :</strong> Les cookies ne peuvent pas exécuter de programmes ni transmettre de virus à votre appareil.
                  </p>
                </div>
              </SectionCard>

              {/* Types de cookies */}
              <SectionCard icon={CogIcon} title="Types de cookies utilisés" delay={0.2}>
                <p>
                  Nous utilisons différents types de cookies sur notre site, chacun ayant une fonction spécifique :
                </p>
                <div className="mt-6 space-y-4">
                  <CookieTypeCard
                    icon={ShieldCheckIcon}
                    title="Cookies essentiels"
                    description="Ces cookies sont indispensables au fonctionnement du site. Ils vous permettent de naviguer sur le site et d'utiliser ses fonctionnalités de base. Sans ces cookies, le site ne peut pas fonctionner correctement."
                    required={true}
                  />
                  <CookieTypeCard
                    icon={ChartBarIcon}
                    title="Cookies analytiques"
                    description="Ces cookies nous permettent de comprendre comment les visiteurs utilisent notre site en collectant des informations de manière anonyme. Ils nous aident à améliorer le fonctionnement et le contenu du site."
                  />
                  <CookieTypeCard
                    icon={AdjustmentsHorizontalIcon}
                    title="Cookies de fonctionnalité"
                    description="Ces cookies permettent au site de mémoriser vos choix (comme votre nom d'utilisateur, votre langue ou votre région) et de fournir des fonctionnalités améliorées et personnalisées."
                  />
                  <CookieTypeCard
                    icon={MegaphoneIcon}
                    title="Cookies de ciblage/publicitaires"
                    description="Ces cookies sont utilisés pour diffuser des publicités plus pertinentes pour vous et vos centres d'intérêt. Ils sont également utilisés pour limiter le nombre de fois que vous voyez une publicité et pour mesurer l'efficacité des campagnes publicitaires."
                  />
                </div>
              </SectionCard>

              {/* Cookies first-party vs third-party */}
              <SectionCard icon={UserGroupIcon} title="Cookies propriétaires et tiers" delay={0.25}>
                <div className="grid md:grid-cols-2 gap-4 mt-4">
                  <div className="bg-gray-50 rounded-xl p-6">
                    <h4 className="font-semibold text-gray-900 mb-2">Cookies propriétaires (first-party)</h4>
                    <p className="text-gray-600 text-sm">
                      Ces cookies sont définis par notre site lui-même. Ils sont généralement utilisés pour mémoriser vos préférences et maintenir votre session de navigation.
                    </p>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-6">
                    <h4 className="font-semibold text-gray-900 mb-2">Cookies tiers (third-party)</h4>
                    <p className="text-gray-600 text-sm">
                      Ces cookies sont définis par des services tiers que nous utilisons, comme Google Analytics ou Facebook. Ils permettent des fonctionnalités supplémentaires et des analyses.
                    </p>
                  </div>
                </div>
              </SectionCard>

              {/* Liste des cookies */}
              <SectionCard icon={DocumentTextIcon} title="Liste des cookies utilisés" delay={0.3}>
                <p>
                  Voici la liste détaillée des cookies utilisés sur notre site :
                </p>
                <div className="mt-6 overflow-x-auto">
                  <table className="w-full border-collapse min-w-[600px]">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="px-4 py-3 text-left font-semibold text-gray-900 border-b border-gray-200">Nom</th>
                        <th className="px-4 py-3 text-left font-semibold text-gray-900 border-b border-gray-200">Fournisseur</th>
                        <th className="px-4 py-3 text-left font-semibold text-gray-900 border-b border-gray-200">Finalité</th>
                        <th className="px-4 py-3 text-left font-semibold text-gray-900 border-b border-gray-200">Durée</th>
                        <th className="px-4 py-3 text-left font-semibold text-gray-900 border-b border-gray-200">Type</th>
                      </tr>
                    </thead>
                    <tbody>
                      {cookiesData.map((cookie, idx) => (
                        <CookieTableRow key={idx} {...cookie} />
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="mt-4 text-sm text-gray-500">
                  Cette liste peut évoluer en fonction des services que nous utilisons. Nous nous engageons à la maintenir à jour.
                </p>
              </SectionCard>

              {/* Durée de conservation */}
              <SectionCard icon={ClockIcon} title="Durée de conservation des cookies" delay={0.35}>
                <p>
                  La durée de conservation des cookies varie selon leur type et leur finalité :
                </p>
                <ul className="list-disc list-inside mt-4 space-y-2 ml-4">
                  <li><strong>Cookies de session</strong> : supprimés automatiquement à la fermeture de votre navigateur</li>
                  <li><strong>Cookies persistants</strong> : conservés pendant une durée maximale de 13 mois conformément aux recommandations de la CNIL</li>
                  <li><strong>Votre consentement</strong> : valable 6 mois, après quoi nous vous demanderons de renouveler vos choix</li>
                </ul>
              </SectionCard>

              {/* Base légale */}
              <SectionCard icon={ShieldCheckIcon} title="Base légale et consentement" delay={0.4}>
                <p>
                  Conformément à la réglementation européenne (RGPD) et aux recommandations de la CNIL, nous sollicitons votre consentement avant de déposer des cookies non essentiels sur votre terminal.
                </p>
                <div className="mt-4 space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <p className="font-semibold text-gray-900">Cookies essentiels</p>
                      <p className="text-gray-600">Ne nécessitent pas votre consentement (base légale : intérêt légitime)</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <p className="font-semibold text-gray-900">Autres cookies</p>
                      <p className="text-gray-600">Déposés uniquement après obtention de votre consentement explicite</p>
                    </div>
                  </div>
                </div>
                <p className="mt-4">
                  Vous êtes libre d&apos;accepter ou de refuser ces cookies. Votre choix est enregistré et mémorisé pour une durée de 6 mois.
                </p>
              </SectionCard>

              {/* Gérer vos préférences */}
              <SectionCard icon={AdjustmentsHorizontalIcon} title="Gérer vos préférences" delay={0.45}>
                <p>
                  Vous pouvez à tout moment gérer vos préférences en matière de cookies de plusieurs façons :
                </p>
                
                <div className="mt-6 space-y-6">
                  <div className="bg-purple-50 rounded-xl p-6">
                    <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                      <span className="w-6 h-6 bg-purple-600 text-white rounded-full flex items-center justify-center text-sm">1</span>
                      Bandeau de consentement
                    </h4>
                    <p className="text-gray-600">
                      Lors de votre première visite, un bandeau vous permet de choisir les cookies que vous acceptez. Vous pouvez modifier ces choix à tout moment en cliquant sur le lien &quot;Gérer les cookies&quot; en bas de page.
                    </p>
                  </div>
                  
                  <div className="bg-gray-50 rounded-xl p-6">
                    <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                      <span className="w-6 h-6 bg-gray-600 text-white rounded-full flex items-center justify-center text-sm">2</span>
                      Paramètres de votre navigateur
                    </h4>
                    <p className="text-gray-600 mb-4">
                      Vous pouvez configurer votre navigateur pour accepter ou refuser les cookies. Voici les liens vers les instructions des principaux navigateurs :
                    </p>
                    <ul className="space-y-2 text-sm">
                      <li>
                        <a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-800 transition-colors">
                          → Google Chrome
                        </a>
                      </li>
                      <li>
                        <a href="https://support.mozilla.org/fr/kb/cookies-informations-sites-enregistrent" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-800 transition-colors">
                          → Mozilla Firefox
                        </a>
                      </li>
                      <li>
                        <a href="https://support.apple.com/fr-fr/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-800 transition-colors">
                          → Safari
                        </a>
                      </li>
                      <li>
                        <a href="https://support.microsoft.com/fr-fr/microsoft-edge/supprimer-les-cookies-dans-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-800 transition-colors">
                          → Microsoft Edge
                        </a>
                      </li>
                      <li>
                        <a href="https://help.opera.com/en/latest/web-preferences/#cookies" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-800 transition-colors">
                          → Opera
                        </a>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-gray-50 rounded-xl p-6">
                    <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                      <span className="w-6 h-6 bg-gray-600 text-white rounded-full flex items-center justify-center text-sm">3</span>
                      Plateformes de gestion des cookies tiers
                    </h4>
                    <p className="text-gray-600 mb-4">
                      Pour les cookies tiers, vous pouvez également gérer vos préférences directement auprès des fournisseurs :
                    </p>
                    <ul className="space-y-2 text-sm">
                      <li>
                        <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-800 transition-colors">
                          → Google Analytics Opt-out
                        </a>
                      </li>
                      <li>
                        <a href="https://www.facebook.com/help/568137493302217" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-800 transition-colors">
                          → Paramètres publicitaires Facebook
                        </a>
                      </li>
                      <li>
                        <a href="https://www.youronlinechoices.com/fr/controler-ses-cookies/" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-800 transition-colors">
                          → Your Online Choices (plateforme européenne)
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </SectionCard>

              {/* Conséquences du refus */}
              <SectionCard icon={ExclamationCircleIcon} title="Conséquences du refus des cookies" delay={0.5}>
                <p>
                  Le refus de certains cookies peut avoir des conséquences sur votre expérience de navigation :
                </p>
                <ul className="list-disc list-inside mt-4 space-y-2 ml-4">
                  <li><strong>Cookies essentiels</strong> : leur blocage peut empêcher le bon fonctionnement du site</li>
                  <li><strong>Cookies analytiques</strong> : leur refus n&apos;affecte pas votre navigation, mais nous empêche d&apos;améliorer notre site</li>
                  <li><strong>Cookies de fonctionnalité</strong> : vous devrez peut-être ressaisir certaines informations à chaque visite</li>
                  <li><strong>Cookies publicitaires</strong> : vous verrez toujours des publicités, mais elles seront moins pertinentes</li>
                </ul>
                <div className="bg-yellow-50 border border-yellow-100 rounded-xl p-4 mt-4">
                  <p className="text-yellow-800">
                    <strong>Note :</strong> Le refus des cookies non essentiels n&apos;affecte pas votre accès au contenu principal du site.
                  </p>
                </div>
              </SectionCard>

              {/* Technologies similaires */}
              <SectionCard icon={ComputerDesktopIcon} title="Technologies similaires" delay={0.55}>
                <p>
                  En plus des cookies, nous pouvons utiliser d&apos;autres technologies de suivi similaires :
                </p>
                <div className="mt-4 space-y-4">
                  <div className="bg-gray-50 rounded-xl p-4">
                    <p className="font-semibold text-gray-900 mb-1">Pixels de suivi (Web Beacons)</p>
                    <p className="text-gray-600 text-sm">Petites images invisibles utilisées pour comprendre comment vous interagissez avec nos emails et notre site.</p>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-4">
                    <p className="font-semibold text-gray-900 mb-1">Stockage local (Local Storage)</p>
                    <p className="text-gray-600 text-sm">Permet de stocker des données localement dans votre navigateur pour améliorer les performances.</p>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-4">
                    <p className="font-semibold text-gray-900 mb-1">Identifiants de session</p>
                    <p className="text-gray-600 text-sm">Utilisés pour maintenir votre session de navigation active.</p>
                  </div>
                </div>
                <p className="mt-4">
                  Ces technologies sont soumises aux mêmes règles de consentement que les cookies.
                </p>
              </SectionCard>

              {/* Mise à jour de la politique */}
              <SectionCard icon={DocumentTextIcon} title="Mise à jour de cette politique" delay={0.6}>
                <p>
                  Nous pouvons mettre à jour cette politique de cookies à tout moment pour refléter les changements dans nos pratiques ou pour d&apos;autres raisons opérationnelles, légales ou réglementaires.
                </p>
                <p>
                  Nous vous encourageons à consulter régulièrement cette page pour rester informé(e) de notre utilisation des cookies.
                </p>
                <p>
                  En cas de modifications substantielles, nous afficherons un avis visible sur notre site pour vous en informer.
                </p>
              </SectionCard>

              {/* Liens utiles */}
              <SectionCard icon={ShieldCheckIcon} title="Pour en savoir plus" delay={0.65}>
                <p>
                  Pour plus d&apos;informations sur la protection de vos données et vos droits, consultez :
                </p>
                <ul className="list-disc list-inside mt-4 space-y-2 ml-4">
                  <li>Notre <Link href="/politique-confidentialite" className="text-purple-600 hover:text-purple-800 transition-colors">Politique de Confidentialité</Link></li>
                  <li>Nos <Link href="/cgu" className="text-purple-600 hover:text-purple-800 transition-colors">Conditions Générales d&apos;Utilisation</Link></li>
                  <li>Le site de la <a href="https://www.cnil.fr/fr/cookies-et-autres-traceurs" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-800 transition-colors">CNIL sur les cookies</a></li>
                </ul>
              </SectionCard>

              {/* Contact */}
              <SectionCard icon={EnvelopeIcon} title="Contact" delay={0.7}>
                <p>
                  Pour toute question concernant notre utilisation des cookies, vous pouvez nous contacter :
                </p>
                <div className="bg-gray-50 rounded-xl p-6 mt-4">
                  <ul className="space-y-2">
                    <li><span className="text-gray-500">Par courrier :</span> <span className="text-gray-900">Energy Prime Consulting Ltd - 71-75 Shelton Street, Covent Garden, London, WC2H 9JQ, UK</span></li>
                    <li><span className="text-gray-500">Via notre formulaire :</span> <Link href="/contact" className="text-purple-600 hover:text-purple-800 transition-colors">nuxmi.fr/contact</Link></li>
                    <li><span className="text-gray-500">Via WhatsApp :</span> <a href="https://wa.me/message/XP2DMY6CM7QXK1" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-800 transition-colors">Nous contacter</a></li>
                  </ul>
                </div>
              </SectionCard>

              {/* Date de mise à jour */}
              <motion.div
                className="text-center text-gray-500 text-sm mt-12"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.75 }}
              >
                <p>Dernière mise à jour : Janvier 2025</p>
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