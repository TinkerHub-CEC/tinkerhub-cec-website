import Team from '../components/team/team';
import Welcome from '../components/0-Header/Header';
import { Abcontent } from '../components/Content/abcontent';
import {Letter} from '../components/2-Newsletter/Newsletter'
import { Layout } from '../layout/Layout';
const About = () => {
    return (
      <Layout>
      <Welcome/>
      <Abcontent/>
      <Letter/> 
    </Layout>
          
    );
  };
  
  export default About;