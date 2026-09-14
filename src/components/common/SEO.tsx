import React, { useEffect } from 'react';
import type { NavTab } from '../layout/Navbar';

interface SEOProps {
  currentTab: NavTab;
}

interface PageMeta {
  title: string;
  description: string;
  keywords: string;
  ogTitle: string;
  ogDescription: string;
  ogUrl: string;
}

const pageMetaData: Record<NavTab, PageMeta> = {
  home: {
    title: 'Millennium English School | English Medium & CBSE School in Habra',
    description:
      'Discover Millennium English School in South Habra, North 24 Parganas. English medium co-educational school following CBSE curriculum and NEP 2020. Admissions open from Playgroup onwards.',
    keywords:
      'Millennium English School Habra, English medium school in Habra, CBSE curriculum school in Habra, school admissions in Habra, children school in Habra, school near South Habra, best school in Habra',
    ogTitle: 'Millennium English School — English Medium School in Habra',
    ogDescription:
      'Nurturing intellect, character & curiosity through holistic CBSE-aligned education in South Habra, North 24 Parganas.',
    ogUrl: 'https://meshabra.in/#home',
  },
  about: {
    title: 'About Us | Millennium English School Habra | Vision, Mission & Values',
    description:
      'Learn about Millennium English School in South Habra, West Bengal. Discover our student-centric vision, mission, 24/7 student care, and collaborative parent-teacher partnership.',
    keywords:
      'About Millennium English School, school vision mission Habra, student care Habra, parent teacher partnership Habra, English school history Habra',
    ogTitle: 'About Millennium English School | Knowledge & Character',
    ogDescription:
      'A vibrant educational community focused on joyful learning, moral values, and student wellbeing in South Habra.',
    ogUrl: 'https://meshabra.in/#about',
  },
  academics: {
    title: 'Academics & Programs | Millennium English School Habra',
    description:
      'Explore academic programs from Playgroup to Lower Secondary at Millennium English School Habra. Multi-sensory early years, STEAM lab, 10 co-curriculars, and school timings.',
    keywords:
      'Academics Millennium English School, Playgroup Nursery LKG UKG Habra, Primary school Class 1 Habra, STEAM lab school Habra, school timings Habra',
    ogTitle: 'Academic Programs & Curriculum | Millennium English School',
    ogDescription:
      'Sequential early years and primary education combining conceptual rigor with STEAM, sports, and arts in Habra.',
    ogUrl: 'https://meshabra.in/#academics',
  },
  admissions: {
    title: 'School Admissions in Habra 2025–26 | Millennium English School',
    description:
      'Apply for admissions from Playgroup onwards at Millennium English School South Habra. Limited classroom occupancy, individualized attention, and parent enquiry assistance.',
    keywords:
      'school admissions in Habra, admission open Playgroup Habra, Millennium English School admission form, nursery admission Habra, CBSE admission Habra',
    ogTitle: 'Admissions Open 2025–26 | Millennium English School Habra',
    ogDescription:
      'Enroll your child in a supportive English medium school with limited batch sizes in South Habra.',
    ogUrl: 'https://meshabra.in/#admissions',
  },
  notices: {
    title: 'Notice Board | Latest Circulars & Updates | Millennium English School Habra',
    description:
      'Official notice board of Millennium English School, South Habra. Access important announcements, academic circulars, and admission updates.',
    keywords:
      'Millennium English School notice board, school circulars Habra, academic announcements Habra, school notices South Habra',
    ogTitle: 'Notice Board & Circulars | Millennium English School Habra',
    ogDescription:
      'Stay informed with the latest official announcements from Millennium English School.',
    ogUrl: 'https://meshabra.in/#notices',
  },
  events: {
    title: 'Events & Co-Curriculars | CaNvAs Annual Day | Millennium English School',
    description:
      'Experience vibrant school events at Millennium English School Habra: CaNvAs Annual Day, competitions, exhibition day, sports events, and cultural celebrations.',
    keywords:
      'Millennium English School events, Canvas Annual Day Habra, school exhibition day Habra, cultural celebrations Habra, school sports day Habra',
    ogTitle: 'School Events & Celebrations | Millennium English School',
    ogDescription:
      'Vibrant student performances, cultural celebrations, and exhibitions in South Habra.',
    ogUrl: 'https://meshabra.in/#events',
  },
  contact: {
    title: 'Contact & Campus Location | Millennium English School South Habra',
    description:
      'Visit Millennium English School on K.N. Roy Road, South Habra, North 24 Parganas, West Bengal 743263. Phone: +91 94755 49596, 03216-356665. Email: contact@meshabra.in.',
    keywords:
      'Millennium English School contact number, school address South Habra, KN Roy Road Habra school, school phone number Habra West Bengal',
    ogTitle: 'Contact Millennium English School | South Habra, West Bengal',
    ogDescription:
      'Get in touch with our administrative desk or plan your campus visit on K.N. Roy Road, South Habra.',
    ogUrl: 'https://meshabra.in/#contact',
  },
};

export const SEO: React.FC<SEOProps> = ({ currentTab }) => {
  useEffect(() => {
    const meta = pageMetaData[currentTab] || pageMetaData.home;

    // Update document title
    document.title = meta.title;

    // Update meta description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', meta.description);

    // Update meta keywords
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.setAttribute('name', 'keywords');
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.setAttribute('content', meta.keywords);

    // Update OpenGraph tags
    const updateOrCreateMeta = (property: string, content: string) => {
      let tag = document.querySelector(`meta[property="${property}"]`);
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute('property', property);
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', content);
    };

    updateOrCreateMeta('og:title', meta.ogTitle);
    updateOrCreateMeta('og:description', meta.ogDescription);
    updateOrCreateMeta('og:url', meta.ogUrl);
    updateOrCreateMeta('og:type', 'website');
    updateOrCreateMeta('og:site_name', 'Millennium English School');
    updateOrCreateMeta('og:locale', 'en_IN');

    // Update Twitter card tags
    const updateOrCreateTwitterMeta = (name: string, content: string) => {
      let tag = document.querySelector(`meta[name="${name}"]`);
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute('name', name);
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', content);
    };

    updateOrCreateTwitterMeta('twitter:card', 'summary_large_image');
    updateOrCreateTwitterMeta('twitter:title', meta.ogTitle);
    updateOrCreateTwitterMeta('twitter:description', meta.ogDescription);
  }, [currentTab]);

  return null;
};
