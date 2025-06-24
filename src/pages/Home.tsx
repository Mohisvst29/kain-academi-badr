import React from 'react';
import Hero from '../components/Hero';
import StudentRegistration from '../components/StudentRegistration';
import Features from '../components/Features';
import Subjects from '../components/Subjects';
import AppointmentBooking from '../components/AppointmentBooking';
import Testimonials from '../components/Testimonials';
import GoogleReviewsWidget from '../components/GoogleReviewsWidget';

const Home = () => {
  return (
    <div>
      <Hero />
      <StudentRegistration />
      <Features />
      <Subjects />
      <Testimonials />
      <GoogleReviewsWidget />
      <AppointmentBooking />
    </div>
  );
};

export default Home;