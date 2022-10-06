import Team from '../components/team/team';
import Welcome from '../components/0-Header/Header';
import {Letter} from '../components/2-Newsletter/Newsletter'
import { Layout } from '../layout/Layout';
const About = () => {
    return (
      <Layout>
      <Welcome/>
      <Letter/>
      <Team/> 
    </Layout>
          
    );
  };
  
  export default About;