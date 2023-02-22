import Team from '../components/team/team';
import Welcome from '../components/0-Header/Header';
import { Abcontent } from '../components/Content/abcontent';
import {Letter} from '../components/2-Newsletter/Newsletter'
import { Layout } from '../layout/Layout';
import { Contact } from '../components/Contact/ContactUs';
import Footer from '../components/z-Footer/Footer';
const About = () => {
    return (
      <Layout>
      <Welcome/>
      <Abcontent/>
      {/* <Letter/>  */}
      <Team/> 
      <Contact/>
      <Footer/>
    </Layout>
          
    );
  };
  
  export default About;