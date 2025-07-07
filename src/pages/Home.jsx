import Diverse from "../components/block/home/Diverse";
import Hero from "../components/block/home/Hero";
import Saver from "../components/block/home/Saver";
import Testimony from "../components/block/home/Testimony";
import Savings from "../components/block/home/Savings";
import Security from "../components/block/home/Security";

const Home = () => {
  return (
    <div className="">
      <Hero />
      <Security />
      <Savings />
      <Diverse />
      <Saver />
      <Testimony />
    </div>
  );
};

export default Home;
