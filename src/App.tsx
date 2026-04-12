/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Nav from './components/Nav';
import Hero from './components/Hero';
import Problem from './components/Problem';
import AlternativesComparison from './components/AlternativesComparison';
import Features from './components/Features';
import Comparison from './components/Comparison';
import HowItWorks from './components/HowItWorks';
import AdminPortal from './components/AdminPortal';
import Testimonials from './components/Testimonials';
import DemoForm from './components/DemoForm';
import Footer from './components/Footer';
import WhatsAppSticky from './components/WhatsAppSticky';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Nav />
      <main>
        <Hero />
        <Problem />
        <AlternativesComparison />
        <Features />
        <Comparison />
        <HowItWorks />
        <AdminPortal />
        <Testimonials />
        <DemoForm />
      </main>
      <Footer />
      <WhatsAppSticky />
    </div>
  );
}
