
import { Hero } from '../components/1-Hero/Hero';
import Header from '../components/0-Header/Header'
import { Layout } from '../layout/Layout';
import Welcome from '../components/0-Header/Header';
import About from './about'

const Home = () => {
  return (
    <Layout>
      <Welcome/>     
      <Hero/>
      </Layout>
    
  );
};

export default Home;