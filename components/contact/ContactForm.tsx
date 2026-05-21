'use client';

import { useLanguage } from '@/app/providers';
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function ContactForm() {
  const { language } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: '',
    budget: '',
    message: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = language === 'fr' ? 'Le nom est requis' : 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = language === 'fr' ? 'L\'email est requis' : 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = language === 'fr' ? 'Email invalide' : 'Invalid email';
    }

    if (!formData.message.trim()) {
      newErrors.message = language === 'fr' ? 'Le message est requis' : 'Message is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      // Simulate form submission
      console.log('Form submitted:', formData);
      setSubmitted(true);
      setFormData({ name: '', email: '', projectType: '', budget: '', message: '' });

      // Reset success message after 5 seconds
      setTimeout(() => setSubmitted(false), 5000);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      noValidate
      className="bg-white dark:bg-slate-800 p-8 rounded-lg shadow-md border border-slate-200 dark:border-slate-700"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      {/* Success Message */}
      {submitted && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6 p-4 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-100 rounded-lg"
        >
          {language === 'fr'
            ? 'Merci! Votre message a été envoyé avec succès.'
            : 'Thank you! Your message has been sent successfully.'}
        </motion.div>
      )}

      {/* Name */}
      <div className="mb-6">
        <label className="block text-sm font-semibold text-slate-900 dark:text-white mb-2">
          {language === 'fr' ? 'Nom' : 'Name'} *
        </label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-slate-900 dark:text-white"
          placeholder={language === 'fr' ? 'Votre nom' : 'Your name'}
        />
        {errors.name && (
          <p className="text-red-600 dark:text-red-400 text-sm mt-1">{errors.name}</p>
        )}
      </div>

      {/* Email */}
      <div className="mb-6">
        <label className="block text-sm font-semibold text-slate-900 dark:text-white mb-2">
          {language === 'fr' ? 'Email' : 'Email'} *
        </label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-slate-900 dark:text-white"
          placeholder={language === 'fr' ? 'votre@email.com' : 'your@email.com'}
        />
        {errors.email && (
          <p className="text-red-600 dark:text-red-400 text-sm mt-1">{errors.email}</p>
        )}
      </div>

      {/* Project Type */}
      <div className="mb-6">
        <label className="block text-sm font-semibold text-slate-900 dark:text-white mb-2">
          {language === 'fr' ? 'Type de projet' : 'Project type'}
        </label>
        <select
          name="projectType"
          value={formData.projectType}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-slate-900 dark:text-white"
        >
          <option value="">
            {language === 'fr' ? 'Sélectionnez un type' : 'Select a type'}
          </option>
          <option value="web">{language === 'fr' ? 'Site web' : 'Website'}</option>
          <option value="app">{language === 'fr' ? 'Application' : 'Application'}</option>
          <option value="ecommerce">E-commerce</option>
          <option value="other">{language === 'fr' ? 'Autre' : 'Other'}</option>
        </select>
      </div>

      {/* Budget */}
      <div className="mb-6">
        <label className="block text-sm font-semibold text-slate-900 dark:text-white mb-2">
          {language === 'fr' ? 'Budget estimé' : 'Estimated budget'}
        </label>
        <select
          name="budget"
          value={formData.budget}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-slate-900 dark:text-white"
        >
          <option value="">
            {language === 'fr' ? 'Sélectionnez un budget' : 'Select a budget'}
          </option>
          <option value="<1000">&lt; 1000€</option>
          <option value="1000-5000">1000€ - 5000€</option>
          <option value="5000-10000">5000€ - 10000€</option>
          <option value=">10000">&gt; 10000€</option>
        </select>
      </div>

      {/* Message */}
      <div className="mb-6">
        <label className="block text-sm font-semibold text-slate-900 dark:text-white mb-2">
          {language === 'fr' ? 'Message' : 'Message'} *
        </label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={6}
          className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-slate-900 dark:text-white"
          placeholder={language === 'fr' ? 'Décrivez votre projet...' : 'Describe your project...'}
        />
        {errors.message && (
          <p className="text-red-600 dark:text-red-400 text-sm mt-1">{errors.message}</p>
        )}
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-colors"
      >
        {language === 'fr' ? 'Envoyer' : 'Send'}
      </button>
    </motion.form>
  );
}
