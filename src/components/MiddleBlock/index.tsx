import { Row, Col } from "antd";
import { lazy, useState } from "react";
import { withTranslation, TFunction } from "react-i18next";
import { Slide } from "react-awesome-reveal";
import { Button } from "../../common/Button";
import { MiddleBlockSection, Content, ContentWrapper, Title } from "./styles";
import { useHistory } from "react-router-dom";
import axios from "axios";
const Search = lazy(() => import("../../components/SearchBar"));

interface MiddleBlockProps {
  title: string;
  content: string;
  button: string;
  t: TFunction;
  onActionTriggered: () => void; // No arguments expected
}

const MiddleBlock = ({
  title,
  content,
  button,
  t,
  onActionTriggered,
}: MiddleBlockProps) => {
  const history = useHistory();

  const handleSearch = async (query: string, keywords: string[]) => {
    const options = {
      method: "POST",
      url: "https://9d641738-4bde-4795-a50f-bd46a82c0a1d-00-2r4sm0gkoe1kf.picard.replit.dev/get_similar",
      headers: {
        "Content-Type": "application/json",
      },
      data: {
        text: query,
        keywords: keywords,
        page: 0,
      },
    };

    try {
      onActionTriggered();
      const response = await axios.request(options);

      const searchData = {
        query,
        results: response.data,
        keywords: keywords,
      };
      onActionTriggered();
      history.push("/search_results", { searchData });
    } catch (error) {
      console.error(error);
      //setLoading(false);
    }
  };

  const scrollTo = (id: string) => {
    const element = document.getElementById(id) as HTMLDivElement;
    element.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <MiddleBlockSection>
      <Slide direction="up" triggerOnce>
        <Row justify="center" align="middle">
          <ContentWrapper>
            <Col lg={24} md={24} sm={24} xs={24}>
              <Title>{t(title)}</Title>
              <Search onSearch={handleSearch} />
              <Content>{t(content)}</Content>
              {button && (
                <Button name="submit" onClick={() => scrollTo("mission")}>
                  {t(button)}
                </Button>
              )}
            </Col>
          </ContentWrapper>
        </Row>
      </Slide>
    </MiddleBlockSection>
  );
};

export default withTranslation()(MiddleBlock);
