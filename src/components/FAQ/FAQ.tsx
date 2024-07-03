import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
interface FAQProps {
  id: string;
}
export default function FAQ({ id }: FAQProps) {
  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <Container
      id="faq"
      sx={{
        pb: { xs: 8, sm: 16 },
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: { xs: 3, sm: 6 },
      }}
    >
      <Typography
        component="h2"
        variant="h4"
        color="white"
        sx={{
          width: { sm: "100%", md: "60%" },
          textAlign: { sm: "left", md: "center" },
          fontWeight: "bold",
        }}
      >
        Sıkça Sorulan Sorular
      </Typography>
      <Box sx={{ width: "100%" }}>
        <Accordion
          expanded={expanded === "panel3"}
          onChange={handleChange("panel3")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3d-content"
            id="panel3d-header"
          >
            <Typography
              component="h3"
              variant="subtitle2"
              sx={{ color: "black" }}
            >
              Legalli'yi diğer emsal karar arama motorlarından farklı kılan
              özellikler nedir?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography
              variant="body2"
              gutterBottom
              sx={{ maxWidth: { sm: "100%", md: "70%" }, color: "black" }}
            >
              Piyasada bulunan anahtar kelime bazlı arama motorlarının aksine
              Legalli aramalarınızı kendi geliştirdiği yapay zeka çözümleri
              sayesinde anlam bazlı bir şekilde gerçekleştirir. Bu sayede:
              <ul>
                <li>
                  <strong>Daha Doğru Sonuçlar:</strong> Anahtar kelimeye dayalı
                  arama motorları, yalnızca belirli kelimeleri ararken,
                  Legalli'nin yapay zeka destekli arama motoru, arama niyetinizi
                  ve içeriğin anlamını analiz eder. Bu da daha doğru ve alakalı
                  sonuçlar elde etmenizi sağlar.
                </li>
                <li>
                  <strong>Zaman Tasarrufu:</strong> Legalli, anlam bazlı arama
                  yöntemi ile gereksiz sonuçları eleyerek aradığınız bilgilere
                  daha hızlı ulaşmanızı sağlar. Bu, özellikle karmaşık hukuki
                  konularda büyük bir avantaj sağlar.
                </li>
                <li>
                  <strong>Kapsamlı İçerik:</strong> Anlam bazlı arama sayesinde
                  Legalli, anahtar kelimelerin varyasyonlarını ve eş
                  anlamlılarını da dikkate alarak daha geniş bir içerik havuzuna
                  ulaşır. Bu da arama sonuçlarının kapsamını artırır.
                </li>
                <li>
                  <strong>Kullanıcı Dostu Deneyim:</strong> Legalli'nin arayüzü
                  ve arama algoritması, kullanıcıların sorularını doğal dilde
                  sorabilmelerine imkan tanır. Bu, kullanıcıların daha az çaba
                  sarf ederek istedikleri bilgilere ulaşmalarını sağlar.
                </li>
              </ul>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel2"}
          onChange={handleChange("panel2")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2d-content"
            id="panel2d-header"
          >
            <Typography
              component="h3"
              variant="subtitle2"
              sx={{ color: "black" }}
            >
              Sisteminizde kaç adet emsal karar mevcut?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography
              variant="body2"
              gutterBottom
              sx={{ maxWidth: { sm: "100%", md: "70%" }, color: "black" }}
            >
              Sistemimizdeki emsal karar sayısı her gün güncellenmekle beraber
              <strong> Haziran 2024 </strong> itibariyle yaklaşık
              <strong> 200.000 adet </strong> emsal karar bulunmaktadır.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1d-content"
            id="panel1d-header"
          >
            <Typography
              component="h3"
              variant="subtitle2"
              sx={{ color: "black" }}
            >
              Size nasıl ulaşabilirim?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography
              variant="body2"
              gutterBottom
              sx={{ maxWidth: { sm: "100%", md: "70%" }, color: "black" }}
            >
              Kullanıcı deneyimi birimimize
              <Link> support@email.com </Link>'e mail atarak ulaşabilirsiniz.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Box>
    </Container>
  );
}
