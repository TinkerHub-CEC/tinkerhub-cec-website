import Welcome from '../components/0-Header/Header';
import {Letter} from '../components/2-Newsletter/Newsletter'
import { Layout } from '../layout/Layout';
const About = () => {
    return (
      <Layout>
      <Welcome/>
      <Letter/> 
    </Layout>
          
    );
  };
  
  export default About;