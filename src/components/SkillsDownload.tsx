import React from 'react';
import { FileDown } from 'lucide-react';

const SkillsDownload = () => {
  return (
    <div className="text-center mt-12">
      <a
        href="/files/Tableau.pdf"
        download
        className="inline-flex items-center gap-2 bg-indigo-600 dark:bg-indigo-500 text-white 
                 px-6 py-3 rounded-lg hover:bg-indigo-700 dark:hover:bg-indigo-600 transition-colors"
      >
        <FileDown className="w-5 h-5" />
        <span>Télécharger mon tableau de compétences BTS SIO 2024-2025</span>
      </a>
      <p className="text-gray-600 dark:text-gray-400 mt-2 text-sm">
        Format PDF - Tableau détaillé des compétences acquises
      </p>
    </div>
  );
};

export default SkillsDownload;
