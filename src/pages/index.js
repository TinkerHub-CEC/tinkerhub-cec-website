
import { Hero } from '../components/1-Hero/Hero';

import Header from '../components/0-Header/Header'
import Footer from '../components/z-Footer/Footer';
import Initiatives from '../components/9-Initiative/initiative';

import { Layout } from '../layout/Layout';
import Welcome from '../components/0-Header/Header';
import About from './about'

const Home = () => {
  return (
    <Layout>
      <Welcome/>     
      <Hero/>
      <Initiatives/>
      <Footer />
      </Layout>
      
    
  );
};

export default Home;