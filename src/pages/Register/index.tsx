import { lazy } from "react";
import { useLocation, useHistory } from "react-router-dom";
const RegisterComponent = lazy(
  () => import("../../components/RegisterComponent"),
);
const Container = lazy(() => import("../../common/Container"));

const Register = () => {
  return (
    <Container>
      <RegisterComponent />
    </Container>
  );
};

export default Register;
