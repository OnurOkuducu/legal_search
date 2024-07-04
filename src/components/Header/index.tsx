import { useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { Row, Col, Drawer } from "antd";
import { withTranslation, TFunction } from "react-i18next";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { SvgIcon } from "../../common/SvgIcon";
import Button from "@mui/material/Button";
import {
  HeaderSection,
  LogoContainer,
  Burger,
  NotHidden,
  Menu,
  CustomNavLinkSmall,
  Label,
  Outline,
  Span,
} from "./styles";

const Header = ({ t }: { t: TFunction }) => {
  const [visible, setVisibility] = useState(false);
  const history = useHistory();
  const location = useLocation();

  const handleClickRegister = () => {
    history.push("/register");
  };
  const handleClickLogin = () => {
    history.push("/login");
  };

  const toggleButton = () => {
    setVisibility(!visible);
  };

  const MenuItem = () => {
    const scrollTo = (id: string) => {
      if (location.pathname !== "/") {
        history.push("/");
      } else {
        const element = document.getElementById(id) as HTMLDivElement;
        element.scrollIntoView({
          behavior: "smooth",
        });
        setVisibility(false);
      }
    };

    return (
      <>
        {" "}
        <CustomNavLinkSmall onClick={() => scrollTo("pricing")}>
          <Span>{t("Paketlerimiz")}</Span>
        </CustomNavLinkSmall>
        <CustomNavLinkSmall onClick={() => scrollTo("sss")}>
          <Span>{t("SSS")}</Span>
        </CustomNavLinkSmall>
      </>
    );
  };

  return (
    <HeaderSection>
      <Container
        sx={(theme) => ({
          display: "flex",
          alignItems: "center",
          justifyContent: {
            xs: "space-between", // Center items on extra-small screens
            sm: "space-between", // Space between items on small screens and larger
            md: "space-between", // width for medium screens
            lg: "space-between", // width for large screens
            xl: "space-between", // width for extra-large screens
          },
          flexShrink: 0,
          borderRadius: "999px",
          maxHeight: {
            xs: 40, // maxHeight for extra-small screens
            sm: 50, // maxHeight for small screens and up
          },
          width: "100%",
          borderColor: "divider",
        })}
      >
        <Row justify="space-between">
          <LogoContainer to="/" aria-label="homepage">
            <Typography
              component="h1"
              sx={{
                fontSize: "2.5rem",
                color: "white",
                fontFamily: "'Playwrite FR Moderne', cursive",
              }}
            >
              {"Legalli"}
            </Typography>

            <SvgIcon src="legal.svg" width="80px" height="51px" />
          </LogoContainer>

          <NotHidden>
            <MenuItem />
          </NotHidden>
        </Row>
        <Drawer closable={false} open={visible} onClose={toggleButton}>
          <Col style={{ marginBottom: "2.5rem" }}>
            <Label onClick={toggleButton}>
              <Col span={12}>
                <Menu>Menu</Menu>
              </Col>
              <Col span={12}>
                <Outline />
              </Col>
            </Label>
          </Col>
          <MenuItem />
        </Drawer>
      </Container>
    </HeaderSection>
  );
};

export default withTranslation()(Header);
/*

        <CustomNavLinkSmall onClick={() => scrollTo("communication")}>
          <Span>{t("İletişim")}</Span>
        </CustomNavLinkSmall>

        
          <Burger onClick={toggleButton}>
            <Outline />
          </Burger>

          
<CustomNavLinkSmall
          style={{ width: "100px" }}
          onClick={handleClickLogin}
        >
          <Span>
            <Button
              sx={{
                alignItems: "center",
                color: "white",
                backgroundColor: "#98DED9",
                "&:hover": { backgroundColor: "#204969" },
              }}
            >
              {t("Üye Girişi")}
            </Button>
          </Span>
        </CustomNavLinkSmall>
        <CustomNavLinkSmall onClick={handleClickRegister}>
          <Span>
            <Button
              sx={{
                color: "white",
                backgroundColor: "#98DED9",
                "&:hover": { backgroundColor: "#204969" },
              }}
            >
              {t("Üye Ol")}
            </Button>
          </Span>
        </CustomNavLinkSmall>
         */
