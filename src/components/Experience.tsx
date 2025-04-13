import React, { useState } from 'react';
import { Calendar, Server, Shield, Network, Cloud, Terminal, Database, Settings, Users, BookOpen, X, FileDown } from 'lucide-react';

interface Project {
  title: string;
  company: string;
  period: string;
  description: string;
  icon: React.ElementType;
  details: string;
  pdfUrl: string;
}

const Experience = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const experiences: Project[] = [
    {
      title: "Exercice labo cyber Deni de service DOS & contre mesure",
      company: "Projet BTS",
      period: "2025",
      description: "Mise en place d'un labo cyber et réponse à une cyberattaque par DOS.",
      icon: Server,
      details: "Réalisation d’un test de déni de service (DoS) pour analyser l’impact sur un service cible. Mise en place de HAProxy en tant que reverse proxy afin de limiter l’impact de l’attaque et assurer la continuité du service.",
      pdfUrl: "/files/Haproxy.pdf"
    },
    {
     title: "Déploiement de services via Docker et Portainer.io",
company: "Projet BTS",
period: "2025",
description: "Installation de Docker et gestion de conteneurs via Portainer.io.",
icon: Shield,
details: "- Installation de Docker sur une distribution Linux\n- Déploiement de l'interface Portainer.io en conteneur\n- Création et gestion de services Docker via l'interface web\n- Visualisation des volumes, images et stacks\n- Simplification de la gestion des conteneurs",
pdfUrl: "/files/Docker.pdf"

    },
    {
      title: "Vagrant",
      company: "Projet BTS",
      period: "2024-2025",
      description: "Création d'environnement de teste grace à l'outil de vagrant.",
      icon: Cloud,
      details: "Utilisation de Vagrant pour des créations de labo cyber ou pour des projets d'études",
      pdfUrl: "/files/Vagrant.pdf"
    },
    {
      title: "Administration Linux",
      company: "Projet ISCB",
      period: "2024",
      description: "Création d'un eco système linux afin de configurer un DHCP et mise en place d'un agent relay.",
      icon: Terminal,
      details: " \n\n-Mise en place d'un environnement Linux servant à configurer un serveur DHCP (Dynamic Host Configuration Protocol) pour l'attribution automatique d'adresses IP sur un réseau.\n-Elle inclut également le déploiement d'un agent relais DHCP, qui permet de relayer les requêtes DHCP entre différents sous-réseaux lorsque le serveur DHCP n'est pas situé sur le même segment réseau que les clients.",
      pdfUrl: "/files/Relay-Linux.pdf"
    },
    {
      title: "Projet TrueNAS",
      company: "BTS SIO",
      period: "2023",
      description: "Mise en place D'un serveur TrueNAS avec tolérance de panne.",
      icon: Network,
      details: "Installation de TrueNAS sur un serveur et création d'un raid 1 pour avoir de la tolérance de panne",
      pdfUrl: "/files/TrueNAS.pdf"
    },
    {
      title: "Mise en place d'outils de supervision du Parc informatique",
      company: "Projet Entreprise",
      period: "2023",
      description: "Mise en place d'outils pour l'entreprise Avenir Domicile.",
      icon: Settings,
      details: "Projet de supervision incluant :\n\n-Mise en place de GLPI Sur debian12 \n- Création d'utilisateur et de l'environnement de ticketing\n- Resencement du parc informatique via Agent\n- Support de niveau 1 et 2",
      pdfUrl: "/files/glpi.pdf"
    },
    {
      title: "Montage d'une infrastructure Proxmox",
      company: "Projet Personnel",
      period: "2024",
      description: "Création d'une infrastructure virtualisée avec Proxmox.",
      icon: Cloud,
      details: "Installation et configuration d'un environnement Proxmox VE incluant la mise en place de VMs, la gestion réseau et le stockage.",
      pdfUrl: "/files/proxmox.pdf"
    },
    {
      title: "Mise en place de AD DS windows serveur 2019 et UO",
      company: "BTS",
      period: "2025",
      description: "Déploiement d'nu service windows serveur2019 avec AD DS.",
      icon: Users,
      details: "Mise en place d'un serveur windows 2019 :\n\n- Activation du DHCP \n- Mise en place d'un RELAYpour faire de la\n- Formation des utilisateurs\n- Rédaction de procédures\n- Amélioration continue du service",
      pdfUrl: "/files/windowserveur2019.pdf"
    },
    {
      title: "Création d'un portfolio",
      company: "Projet Personnel",
      period: "2024",
      description: "Développement d’un portfolio dynamique en React.",
      icon: Cloud,
      details: "Création d’un portfolio en React avec l'aide de l'IA Bolt, hébergé sur Vercel, avec le code source publié sur GitHub. Achat du nom de domaine personnalisé : cheroretkylian.fr.",
      pdfUrl: "/files/portfolio.pdf"
    },
    {
      title: "Projet Berlingo",
      company: "Projet BTS",
      period: "2025",
      description: "Projet pour une entreprise fictive avec mise en place de travail en mode projet.",
      icon: Database,
      details: "Projet de formation incluant :\n\n- Travail en mode projet \n- Gérer le patrimoine informatique \n- Mise en place d'un système de gestion et de réponse aux incidents\n- Documentation des procédures\n- Mise à disposition de services informatique",
      pdfUrl: "/files/Berlingo.pdf"
    }
  ];

  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-indigo-600 dark:text-indigo-400">Mes Projets</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {experiences.map((exp, index) => {
            const Icon = exp.icon;
            return (
              <div key={index} className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-2 bg-indigo-100 dark:bg-indigo-900/50 rounded-lg">
                    <Icon className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100">{exp.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400">{exp.company}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 mb-4">
                  <Calendar size={16} className="text-indigo-500 dark:text-indigo-400" />
                  <span>{exp.period}</span>
                </div>
                <p className="text-gray-700 dark:text-gray-300 mb-4">{exp.description}</p>
                <button
                  onClick={() => setSelectedProject(exp)}
                  className="w-full bg-indigo-600 dark:bg-indigo-500 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 dark:hover:bg-indigo-600 transition-colors"
                >
                  Voir les détails
                </button>
              </div>
            );
          })}
        </div>
      </div>

      {/* Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl max-w-2xl w-full max-h-[80vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center gap-4">
                  <div className="p-2 bg-indigo-100 dark:bg-indigo-900/50 rounded-lg">
                    <selectedProject.icon className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{selectedProject.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400">{selectedProject.company} - {selectedProject.period}</p>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                >
                  <X size={24} />
                </button>
              </div>
              
              <div className="prose dark:prose-invert max-w-none mb-6">
                {selectedProject.details.split('\n').map((paragraph, index) => (
                  <p key={index} className="text-gray-700 dark:text-gray-300">
                    {paragraph}
                  </p>
                ))}
              </div>

              <a
                href={selectedProject.pdfUrl}
                target="_blank"
                rel="noopener noreferrer"          
                className="inline-flex items-center gap-2 bg-indigo-600 dark:bg-indigo-500 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 dark:hover:bg-indigo-600 transition-colors"
              >
                <FileDown size={20} />
                Télécharger la documentation
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Experience;
