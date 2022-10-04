
import { Hero } from '../components/1-Hero/Hero';

import Header from '../components/0-Header/Header'
import Footer from '../components/z-Footer/Footer';

import { Layout } from '../layout/Layout';
import Welcome from '../components/0-Header/Header';
import About from './about'
import { Contact } from '../components/Contact/ContactUs';

const Home = () => {
  return (
    <Layout>
      <Welcome/>     
      <Hero/>
      <Contact/>
      <Footer />
      </Layout>
      
    
  );
};

export default Home;