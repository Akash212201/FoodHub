import HeroSection from '../component/heroSection'
import Iskills from '../component/Iskills';
import Message from '../component/message';
import Chiefs from '../component/chiefs';
import Popularrecipies from '../component/PopularRecipies';
import Ingredients from '../component/Ingredients';
import Newsletter from '../component/Newsletter';
export const Home = () => {
  return (
    <>
     <HeroSection/>
     <Ingredients/>
     <Iskills/>
     <Popularrecipies/>
     <Message/>
     <Chiefs/>
     <Newsletter/>
    </> 
  )
}
export default Home
