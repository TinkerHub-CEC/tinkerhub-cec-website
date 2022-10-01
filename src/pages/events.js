import Welcome from '../components/0-Header/Header';
import {Event} from '../components/4-Eventpage/Event'
import { Layout } from '../layout/Layout';
const Events = () => {
    return (
      <Layout>
        <Welcome/>
        <Event/>
      </Layout>
      

    
      
    );
  };
  
  export default Events;