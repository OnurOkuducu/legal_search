import { lazy } from "react";
import { useLocation, useHistory } from "react-router-dom";
const LoginComponent = lazy(() => import("../../components/LoginComponent"));
const Container = lazy(() => import("../../common/Container"));

const About = () => {
  return (
    <Container>
      <About />
    </Container>
  );
};

export default About;
