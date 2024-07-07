import { lazy, useState, useEffect } from "react";
import IntroContent from "../../content/IntroContent.json";
import MiddleBlockContent from "../../content/MiddleBlockContent.json";
import AboutContent from "../../content/AboutContent.json";
import MissionContent from "../../content/MissionContent.json";
import ProductContent from "../../content/ProductContent.json";
import ContactContent from "../../content/ContactContent.json";
import Pricing from "../../components/Pricing/Pricing";
import FAQ from "../../components/FAQ/FAQ";
import { CircularProgress } from "@mui/material";

const Contact = lazy(() => import("../../components/ContactForm"));
const MiddleBlock = lazy(() => import("../../components/MiddleBlock"));
const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));
const ContentBlock = lazy(() => import("../../components/ContentBlock"));
//const Pricing = lazy(() => import("../../components/Pricing/Pricing.tsx"));

const Home = () => {
  const [loading, setLoading] = useState(false);

  const handleMiddleBlockAction = () => {
    setLoading(!loading);
  };
  useEffect(() => {
    if (loading) {
      const timeoutId = setTimeout(() => {
        setLoading(false);
      }, 5000); // clear loading state after 2 seconds
    }
  }, [loading]);
  if (loading) {
    return (
      <div style={{ display: "flex", justifyContent: "center" }}>
        <CircularProgress
          size="10rem"
          style={{ marginTop: 200, marginBottom: 400 }}
        />
      </div>
    );
  }
  return (
    <Container>
      <ScrollToTop />
      <MiddleBlock
        title={MiddleBlockContent.title}
        content={MiddleBlockContent.text}
        button={""}
        onActionTriggered={handleMiddleBlockAction}
      />
      <ContentBlock
        direction="right"
        title={IntroContent.title}
        content={IntroContent.text}
        icon="graphs.svg"
        id="intro"
      />
      <ContentBlock
        direction="left"
        title={ProductContent.title}
        content={ProductContent.text}
        icon="waving.svg"
        id="product"
      />

      <div id="pricing">
        <Pricing id="pricing" />
      </div>

      <div id="sss">
        <FAQ id="sss" />
      </div>
    </Container>
  );
};

export default Home;
/*

      <div id="contact">
        <Contact
          title={ContactContent.title}
          content={ContactContent.text}
          id="contact"
        />
      </div>

      
      <ContentBlock
        direction="right"
        title={MissionContent.title}
        content={MissionContent.text}
        icon="product-launch.svg"
        id="mission"
      />

            <Contact
        title={ContactContent.title}
        content={ContactContent.text}
        id="contact"
      />
      
*/
