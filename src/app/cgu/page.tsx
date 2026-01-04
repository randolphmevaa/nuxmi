"use client";

import Head from "next/head";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

import {
  DocumentTextIcon,
  BuildingOffice2Icon,
  UserIcon,
  ShieldCheckIcon,
  CurrencyDollarIcon,
  ScaleIcon,
  ExclamationTriangleIcon,
  NoSymbolIcon,
  ClockIcon,
  GlobeAltIcon,
  EnvelopeIcon,
  CheckCircleIcon,
} from "@heroicons/react/24/outline";

interface SectionCardProps {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  children: React.ReactNode;
  delay?: number;
  articleNumber?: string;
}

const SectionCard: React.FC<SectionCardProps> = ({ icon: Icon, title, children, delay = 0, articleNumber }) => (
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
      <div>
        {articleNumber && (
          <p className="text-sm text-purple-600 font-medium">{articleNumber}</p>
        )}
        <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
      </div>
    </div>
    <div className="text-gray-600 leading-relaxed space-y-4">
      {children}
    </div>
  </motion.div>
);

export default function CGU() {
  const title = "Conditions Générales d'Utilisation | Nuxmi";
  const description = "Conditions générales d'utilisation du site Nuxmi - Energy Prime Consulting Ltd";
  const siteUrl = "https://nuxmi.fr/cgu";

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
                  Cadre juridique
                </motion.span>
                <motion.h1
                  className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  Conditions Générales <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600">d&apos;Utilisation</span>
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
                  Les présentes conditions régissent l&apos;utilisation du site nuxmi.fr et les relations entre Nuxmi et ses utilisateurs.
                </motion.p>
              </motion.div>
            </div>
          </section>

          {/* Content Section */}
          <section className="pb-24">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

              {/* Préambule */}
              <SectionCard icon={DocumentTextIcon} title="Préambule" delay={0.1}>
                <p>
                  Les présentes Conditions Générales d&apos;Utilisation (ci-après « CGU ») ont pour objet de définir les modalités et conditions d&apos;utilisation du site internet <strong>nuxmi.fr</strong> (ci-après le « Site »), ainsi que les droits et obligations des parties dans ce cadre.
                </p>
                <p>
                  L&apos;accès au Site et son utilisation impliquent l&apos;acceptation pleine et entière des présentes CGU. Si vous n&apos;acceptez pas ces conditions, vous êtes invité à ne pas utiliser le Site.
                </p>
                <div className="bg-purple-50 border border-purple-100 rounded-xl p-4 mt-4">
                  <p className="text-purple-800 font-medium">
                    En naviguant sur ce Site, vous reconnaissez avoir lu, compris et accepté sans réserve les présentes CGU.
                  </p>
                </div>
              </SectionCard>

              {/* Article 1 - Définitions */}
              <SectionCard icon={DocumentTextIcon} title="Définitions" delay={0.15} articleNumber="Article 1">
                <p>
                  Dans les présentes CGU, les termes suivants ont la signification indiquée ci-après :
                </p>
                <ul className="list-disc list-inside mt-4 space-y-2 ml-4">
                  <li><strong>« Éditeur »</strong> : Energy Prime Consulting Ltd, société exploitant le Site et la marque Nuxmi</li>
                  <li><strong>« Site »</strong> : le site internet accessible à l&apos;adresse nuxmi.fr</li>
                  <li><strong>« Utilisateur »</strong> : toute personne physique ou morale accédant au Site</li>
                  <li><strong>« Services »</strong> : l&apos;ensemble des services proposés par Nuxmi via le Site</li>
                  <li><strong>« Client »</strong> : tout Utilisateur ayant souscrit à un ou plusieurs Services</li>
                  <li><strong>« Contenu »</strong> : l&apos;ensemble des éléments présents sur le Site (textes, images, vidéos, etc.)</li>
                </ul>
              </SectionCard>

              {/* Article 2 - Éditeur */}
              <SectionCard icon={BuildingOffice2Icon} title="Éditeur du Site" delay={0.2} articleNumber="Article 2">
                <p>
                  Le Site est édité par :
                </p>
                <div className="bg-gray-50 rounded-xl p-6 mt-4">
                  <p className="font-semibold text-gray-900 text-lg mb-3">ENERGY PRIME CONSULTING LTD</p>
                  <ul className="space-y-2">
                    <li><span className="text-gray-500">Numéro d&apos;entreprise :</span> <span className="text-gray-900">16186153</span></li>
                    <li><span className="text-gray-500">Forme juridique :</span> <span className="text-gray-900">Private Limited Company</span></li>
                    <li><span className="text-gray-500">Siège social :</span> <span className="text-gray-900">71-75 Shelton Street, Covent Garden, London, WC2H 9JQ, United Kingdom</span></li>
                    <li><span className="text-gray-500">Date d&apos;immatriculation :</span> <span className="text-gray-900">15 janvier 2025</span></li>
                  </ul>
                </div>
                <p className="mt-4">
                  <strong>Nuxmi</strong> est une marque commerciale exploitée par Energy Prime Consulting Ltd.
                </p>
              </SectionCard>

              {/* Article 3 - Accès au Site */}
              <SectionCard icon={GlobeAltIcon} title="Accès au Site" delay={0.25} articleNumber="Article 3">
                <p>
                  Le Site est accessible gratuitement à tout Utilisateur disposant d&apos;un accès à Internet. Tous les coûts afférents à l&apos;accès au Site (matériel informatique, logiciels, connexion Internet, etc.) sont à la charge exclusive de l&apos;Utilisateur.
                </p>
                <p>
                  L&apos;Éditeur met en œuvre les moyens raisonnables à sa disposition pour assurer un accès de qualité au Site, mais n&apos;est tenu à aucune obligation d&apos;y parvenir.
                </p>
                <p>
                  L&apos;Éditeur se réserve le droit, sans préavis ni indemnité, de fermer temporairement ou définitivement le Site ou l&apos;accès à un ou plusieurs de ses Services pour effectuer des opérations de maintenance, de mise à jour ou pour toute autre raison jugée nécessaire.
                </p>
              </SectionCard>

              {/* Article 4 - Services */}
              <SectionCard icon={CheckCircleIcon} title="Description des Services" delay={0.3} articleNumber="Article 4">
                <p>
                  Le Site présente les activités et services de Nuxmi, notamment :
                </p>
                <ul className="list-disc list-inside mt-4 space-y-2 ml-4">
                  <li>Services de génération de leads qualifiés</li>
                  <li>Stratégie d&apos;acquisition client</li>
                  <li>Campagnes publicitaires digitales</li>
                  <li>Automatisation marketing</li>
                  <li>Conseil en croissance et développement commercial</li>
                </ul>
                <p className="mt-4">
                  Les conditions spécifiques relatives à la fourniture de ces Services font l&apos;objet de Conditions Générales de Vente (CGV) distinctes, communiquées au Client préalablement à toute souscription.
                </p>
              </SectionCard>

              {/* Article 5 - Compte Utilisateur */}
              <SectionCard icon={UserIcon} title="Compte Utilisateur" delay={0.35} articleNumber="Article 5">
                <p>
                  Certaines fonctionnalités du Site peuvent nécessiter la création d&apos;un compte utilisateur. Dans ce cas, l&apos;Utilisateur s&apos;engage à :
                </p>
                <ul className="list-disc list-inside mt-4 space-y-2 ml-4">
                  <li>Fournir des informations exactes, complètes et à jour</li>
                  <li>Maintenir la confidentialité de ses identifiants de connexion</li>
                  <li>Notifier immédiatement l&apos;Éditeur de toute utilisation non autorisée de son compte</li>
                  <li>Ne pas créer de compte au nom d&apos;une autre personne sans son autorisation</li>
                </ul>
                <p className="mt-4">
                  L&apos;Utilisateur est seul responsable de toute activité sur son compte. L&apos;Éditeur se réserve le droit de suspendre ou supprimer tout compte en cas de non-respect des présentes CGU.
                </p>
              </SectionCard>

              {/* Article 6 - Obligations de l'Utilisateur */}
              <SectionCard icon={ShieldCheckIcon} title="Obligations de l'Utilisateur" delay={0.4} articleNumber="Article 6">
                <p>
                  En utilisant le Site, l&apos;Utilisateur s&apos;engage à :
                </p>
                <ul className="list-disc list-inside mt-4 space-y-2 ml-4">
                  <li>Utiliser le Site de manière conforme aux lois et règlements en vigueur</li>
                  <li>Respecter les droits de propriété intellectuelle de l&apos;Éditeur et des tiers</li>
                  <li>Ne pas porter atteinte à l&apos;intégrité ou au bon fonctionnement du Site</li>
                  <li>Ne pas collecter de données personnelles d&apos;autres utilisateurs</li>
                  <li>Ne pas diffuser de contenus illicites, diffamatoires, injurieux ou contraires aux bonnes mœurs</li>
                  <li>Ne pas utiliser le Site à des fins commerciales non autorisées</li>
                </ul>
              </SectionCard>

              {/* Article 7 - Comportements interdits */}
              <SectionCard icon={NoSymbolIcon} title="Comportements interdits" delay={0.45} articleNumber="Article 7">
                <p>
                  Il est strictement interdit d&apos;utiliser le Site pour :
                </p>
                <ul className="list-disc list-inside mt-4 space-y-2 ml-4">
                  <li>Transmettre des virus, codes malveillants ou tout élément de nature destructive</li>
                  <li>Tenter d&apos;accéder sans autorisation aux systèmes informatiques de l&apos;Éditeur</li>
                  <li>Surcharger intentionnellement les serveurs du Site</li>
                  <li>Effectuer du scraping, mining ou extraction automatisée de données</li>
                  <li>Usurper l&apos;identité d&apos;une autre personne ou entité</li>
                  <li>Envoyer des communications non sollicitées (spam)</li>
                  <li>Contourner les mesures de sécurité mises en place</li>
                </ul>
                <p className="mt-4">
                  Tout manquement à ces interdictions pourra donner lieu à des poursuites judiciaires.
                </p>
              </SectionCard>

              {/* Article 8 - Propriété intellectuelle */}
              <SectionCard icon={DocumentTextIcon} title="Propriété intellectuelle" delay={0.5} articleNumber="Article 8">
                <p>
                  L&apos;ensemble des éléments du Site (structure, design, textes, images, graphiques, logos, icônes, sons, logiciels, base de données, etc.) est la propriété exclusive de Energy Prime Consulting Ltd ou de ses partenaires et est protégé par les lois relatives à la propriété intellectuelle.
                </p>
                <p>
                  Toute reproduction, représentation, modification, publication, transmission, dénaturation, totale ou partielle du Site ou de son Contenu, par quelque procédé que ce soit et sur quelque support que ce soit, est interdite sans l&apos;autorisation écrite préalable de l&apos;Éditeur.
                </p>
                <p>
                  L&apos;Utilisateur s&apos;engage à ne pas utiliser le Contenu du Site à des fins autres que sa consultation personnelle et non commerciale.
                </p>
                <div className="bg-yellow-50 border border-yellow-100 rounded-xl p-4 mt-4">
                  <p className="text-yellow-800">
                    <strong>Attention :</strong> Toute exploitation non autorisée du Site ou de son Contenu sera considérée comme constitutive d&apos;une contrefaçon et poursuivie conformément aux dispositions légales applicables.
                  </p>
                </div>
              </SectionCard>

              {/* Article 9 - Données personnelles */}
              <SectionCard icon={ShieldCheckIcon} title="Protection des données personnelles" delay={0.55} articleNumber="Article 9">
                <p>
                  L&apos;Éditeur collecte et traite des données personnelles dans le respect du Règlement Général sur la Protection des Données (RGPD) et des lois applicables en matière de protection des données.
                </p>
                <p>
                  Pour plus d&apos;informations sur la collecte, le traitement et la protection de vos données personnelles, veuillez consulter notre <Link href="/politique-confidentialite" className="text-purple-600 hover:text-purple-800 transition-colors">Politique de Confidentialité</Link>.
                </p>
              </SectionCard>

              {/* Article 10 - Cookies */}
              <SectionCard icon={DocumentTextIcon} title="Cookies" delay={0.6} articleNumber="Article 10">
                <p>
                  Le Site utilise des cookies pour améliorer l&apos;expérience utilisateur et réaliser des statistiques de visite. Pour en savoir plus sur notre utilisation des cookies et gérer vos préférences, veuillez consulter notre <Link href="/cookies" className="text-purple-600 hover:text-purple-800 transition-colors">Politique de Cookies</Link>.
                </p>
              </SectionCard>

              {/* Article 11 - Liens hypertextes */}
              <SectionCard icon={GlobeAltIcon} title="Liens hypertextes" delay={0.65} articleNumber="Article 11">
                <p>
                  Le Site peut contenir des liens hypertextes vers d&apos;autres sites internet. Ces liens sont fournis à titre informatif et l&apos;Éditeur n&apos;exerce aucun contrôle sur le contenu de ces sites tiers.
                </p>
                <p>
                  L&apos;Éditeur décline toute responsabilité quant au contenu de ces sites, aux éventuels préjudices résultant de leur consultation ou aux pratiques de confidentialité qu&apos;ils appliquent.
                </p>
                <p>
                  La création de liens hypertextes vers le Site est soumise à l&apos;autorisation préalable et écrite de l&apos;Éditeur.
                </p>
              </SectionCard>

              {/* Article 12 - Limitation de responsabilité */}
              <SectionCard icon={ExclamationTriangleIcon} title="Limitation de responsabilité" delay={0.7} articleNumber="Article 12">
                <p>
                  L&apos;Éditeur s&apos;efforce de fournir des informations exactes et à jour sur le Site. Toutefois, il ne peut garantir l&apos;exactitude, la complétude ou l&apos;actualité des informations diffusées.
                </p>
                <p>
                  En conséquence, l&apos;Éditeur décline toute responsabilité :
                </p>
                <ul className="list-disc list-inside mt-4 space-y-2 ml-4">
                  <li>Pour toute imprécision, inexactitude ou omission portant sur les informations disponibles</li>
                  <li>Pour tous dommages résultant d&apos;une intrusion frauduleuse d&apos;un tiers</li>
                  <li>Pour toute interruption ou indisponibilité du Site</li>
                  <li>Pour tout dommage direct ou indirect résultant de l&apos;utilisation du Site</li>
                  <li>Pour l&apos;utilisation qui pourrait être faite des informations du Site</li>
                </ul>
                <p className="mt-4">
                  L&apos;Utilisateur utilise le Site à ses risques et périls. Le Site et son Contenu sont fournis « en l&apos;état » sans garantie d&apos;aucune sorte.
                </p>
              </SectionCard>

              {/* Article 13 - Indemnisation */}
              <SectionCard icon={CurrencyDollarIcon} title="Indemnisation" delay={0.75} articleNumber="Article 13">
                <p>
                  L&apos;Utilisateur s&apos;engage à indemniser et à tenir l&apos;Éditeur indemne de toute réclamation, demande, perte, dommage, coût ou dépense (y compris les honoraires d&apos;avocats) résultant de :
                </p>
                <ul className="list-disc list-inside mt-4 space-y-2 ml-4">
                  <li>Son utilisation du Site en violation des présentes CGU</li>
                  <li>Toute violation des droits d&apos;un tiers</li>
                  <li>Toute violation des lois et règlements applicables</li>
                </ul>
              </SectionCard>

              {/* Article 14 - Modifications des CGU */}
              <SectionCard icon={ClockIcon} title="Modifications des CGU" delay={0.8} articleNumber="Article 14">
                <p>
                  L&apos;Éditeur se réserve le droit de modifier les présentes CGU à tout moment, sans préavis. Les modifications entrent en vigueur dès leur publication sur le Site.
                </p>
                <p>
                  Il est conseillé à l&apos;Utilisateur de consulter régulièrement les CGU afin de prendre connaissance de toute modification. L&apos;utilisation continue du Site après publication des modifications constitue l&apos;acceptation des nouvelles CGU.
                </p>
              </SectionCard>

              {/* Article 15 - Divisibilité */}
              <SectionCard icon={DocumentTextIcon} title="Divisibilité" delay={0.85} articleNumber="Article 15">
                <p>
                  Si une ou plusieurs stipulations des présentes CGU étaient déclarées nulles ou inapplicables en application d&apos;une loi, d&apos;un règlement ou d&apos;une décision de justice, les autres stipulations garderaient toute leur force et leur portée.
                </p>
              </SectionCard>

              {/* Article 16 - Droit applicable */}
              <SectionCard icon={ScaleIcon} title="Droit applicable et juridiction" delay={0.9} articleNumber="Article 16">
                <p>
                  Les présentes CGU sont régies par le droit anglais.
                </p>
                <p>
                  En cas de litige relatif à l&apos;interprétation, l&apos;exécution ou la résiliation des présentes CGU, et à défaut de résolution amiable, les tribunaux anglais seront seuls compétents.
                </p>
                <p>
                  Pour les Utilisateurs résidant dans l&apos;Union Européenne, vous pouvez également avoir recours à la plateforme de Règlement en Ligne des Litiges (RLL) de la Commission européenne : <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-800 transition-colors">https://ec.europa.eu/consumers/odr</a>
                </p>
              </SectionCard>

              {/* Article 17 - Contact */}
              <SectionCard icon={EnvelopeIcon} title="Contact" delay={0.95} articleNumber="Article 17">
                <p>
                  Pour toute question relative aux présentes CGU, vous pouvez nous contacter :
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
                transition={{ duration: 0.5, delay: 1.0 }}
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