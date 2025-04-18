import React, { useState } from 'react';
import { Send } from 'lucide-react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);
    setError('');

    try {
      const response = await emailjs.send(
        'service_xxxxxx', // Remplace par ton Service ID
        'template_xxxxxx', // Remplace par ton Template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        'user_xxxxxx' // Remplace par ton User ID
      );

      if (response.status === 200) {
        setSuccess(true);
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error('Erreur lors de l’envoi');
      }
    } catch (err) {
      setError('Échec de l’envoi du message, réessayez plus tard.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          Me Contacter
        </h2>
        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Nom
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg 
                         bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 
                         focus:ring-indigo-600 dark:focus:ring-indigo-400 focus:border-transparent"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg 
                         bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 
                         focus:ring-indigo-600 dark:focus:ring-indigo-400 focus:border-transparent"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg 
                         bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 
                         focus:ring-indigo-600 dark:focus:ring-indigo-400 focus:border-transparent"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-indigo-600 dark:bg-indigo-500 text-white px-6 py-3 rounded-lg 
                       hover:bg-indigo-700 dark:hover:bg-indigo-600 transition-colors flex items-center justify-center gap-2"
              disabled={loading}
            >
              {loading ? 'Envoi...' : (
                <>
                  <Send size={20} />
                  Envoyer le Message
                </>
              )}
            </button>
            {success && <p className="text-green-500 text-center">Message envoyé avec succès !</p>}
            {error && <p className="text-red-500 text-center">{error}</p>}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
