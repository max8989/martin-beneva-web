export type Language = 'en' | 'fr';

export const content = {
  en: {
    // Navigation
    languageToggle: 'FR',

    // Hero Section
    heroTitle: 'Transform Your Business with Expert Guidance',
    heroSubtitle: 'Professional consulting services tailored to your needs',
    heroName: 'Martin Gagne',

    // About Section
    aboutTitle: 'About Me',
    aboutDescription: `I'm a dedicated business consultant with years of experience helping companies achieve their goals. My approach combines strategic thinking with practical solutions to deliver measurable results.`,
    aboutDescription2: `Whether you're looking to optimize operations, scale your business, or navigate complex challenges, I'm here to help you succeed.`,

    // Services
    servicesTitle: 'What I Offer',
    services: [
      {
        title: 'Strategic Planning',
        description: 'Develop clear roadmaps to achieve your business objectives'
      },
      {
        title: 'Process Optimization',
        description: 'Streamline operations for maximum efficiency'
      },
      {
        title: 'Growth Strategy',
        description: 'Scale your business with confidence and clarity'
      }
    ],

    // CTA Section
    ctaTitle: 'Ready to Get Started?',
    ctaSubtitle: 'Book a free consultation to discuss how I can help your business grow',

    // Form
    formTitle: 'Book Your Appointment',
    formDescription: 'Fill out the form below and I\'ll get back to you within 24 hours',
    formName: 'Full Name',
    formNamePlaceholder: 'John Doe',
    formEmail: 'Email Address',
    formEmailPlaceholder: 'john@example.com',
    formPhone: 'Phone Number',
    formPhonePlaceholder: '+1 (555) 123-4567',
    formSubmit: 'Submit Request',
    formSubmitting: 'Submitting...',

    // Validation Messages
    validationNameRequired: 'Name is required',
    validationNameMin: 'Name must be at least 2 characters',
    validationEmailRequired: 'Email is required',
    validationEmailInvalid: 'Please enter a valid email address',
    validationPhoneRequired: 'Phone number is required',
    validationPhoneMin: 'Phone number must be at least 8 characters',

    // Success Message
    successTitle: 'Thank You!',
    successMessage: 'Your appointment request has been received. I\'ll contact you within 24 hours to confirm the details.',
    successButton: 'Submit Another Request',

    // Error Message
    errorTitle: 'Oops! Something went wrong',
    errorMessage: 'We couldn\'t process your request. Please try again or contact us directly.',
    errorButton: 'Try Again',

    // Footer
    footerRights: 'All rights reserved',
  },
  fr: {
    // Navigation
    languageToggle: 'EN',

    // Hero Section
    heroTitle: 'Transformez Votre Entreprise avec un Accompagnement Expert',
    heroSubtitle: 'Services de conseil professionnels adaptés à vos besoins',
    heroName: 'Martin Gagne',

    // About Section
    aboutTitle: 'À Propos',
    aboutDescription: `Je suis un consultant en affaires dévoué avec des années d'expérience dans l'aide aux entreprises pour atteindre leurs objectifs. Mon approche combine la réflexion stratégique avec des solutions pratiques pour obtenir des résultats mesurables.`,
    aboutDescription2: `Que vous cherchiez à optimiser vos opérations, développer votre entreprise ou relever des défis complexes, je suis là pour vous aider à réussir.`,

    // Services
    servicesTitle: 'Mes Services',
    services: [
      {
        title: 'Planification Stratégique',
        description: 'Développer des feuilles de route claires pour atteindre vos objectifs'
      },
      {
        title: 'Optimisation des Processus',
        description: 'Rationaliser les opérations pour une efficacité maximale'
      },
      {
        title: 'Stratégie de Croissance',
        description: 'Développer votre entreprise avec confiance et clarté'
      }
    ],

    // CTA Section
    ctaTitle: 'Prêt à Commencer?',
    ctaSubtitle: 'Réservez une consultation gratuite pour discuter de la façon dont je peux aider votre entreprise à croître',

    // Form
    formTitle: 'Réservez Votre Rendez-vous',
    formDescription: 'Remplissez le formulaire ci-dessous et je vous recontacterai dans les 24 heures',
    formName: 'Nom Complet',
    formNamePlaceholder: 'Jean Dupont',
    formEmail: 'Adresse Email',
    formEmailPlaceholder: 'jean@exemple.com',
    formPhone: 'Numéro de Téléphone',
    formPhonePlaceholder: '+33 6 12 34 56 78',
    formSubmit: 'Envoyer la Demande',
    formSubmitting: 'Envoi en cours...',

    // Validation Messages
    validationNameRequired: 'Le nom est requis',
    validationNameMin: 'Le nom doit contenir au moins 2 caractères',
    validationEmailRequired: 'L\'email est requis',
    validationEmailInvalid: 'Veuillez entrer une adresse email valide',
    validationPhoneRequired: 'Le numéro de téléphone est requis',
    validationPhoneMin: 'Le numéro de téléphone doit contenir au moins 8 caractères',

    // Success Message
    successTitle: 'Merci!',
    successMessage: 'Votre demande de rendez-vous a été reçue. Je vous recontacterai dans les 24 heures pour confirmer les détails.',
    successButton: 'Soumettre une Autre Demande',

    // Error Message
    errorTitle: 'Oups! Une erreur s\'est produite',
    errorMessage: 'Nous n\'avons pas pu traiter votre demande. Veuillez réessayer ou nous contacter directement.',
    errorButton: 'Réessayer',

    // Footer
    footerRights: 'Tous droits réservés',
  }
};
