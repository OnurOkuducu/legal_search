import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import Chip from "@mui/material/Chip";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";

const tiers = [
  /* {
    title: "Free",
    price: "0",
    description: [
      "10 users included",
      "2 GB of storage",
      "Help center access",
      "Email support",
    ],
    buttonText: "Sign up for free",
    buttonVariant: "outlined",
  },*/
  /*
  {
    title: "Enterprise",
    price: "30",
    description: [
      "50 users included",
      "30 GB of storage",
      "Help center access",
      "Phone & email support",
    ],
    buttonText: "Contact us",
    buttonVariant: "outlined",
  },
  */
];
interface PricingProps {
  id: string;
}
export default function Pricing({ id }: PricingProps) {
  return (
    <Container
      sx={{
        pt: { xs: 2, sm: 4 },
        pb: { xs: 8, sm: 16 },
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: { xs: 3, sm: 6 },
      }}
    >
      <Box
        sx={{
          width: { sm: "100%", md: "60%" },
          textAlign: { sm: "left", md: "center" },
        }}
      >
        <Typography
          component="h2"
          variant="h4"
          sx={{ color: "white", fontWeight: "bold" }}
        >
          Paketlerimiz
        </Typography>
        <Typography
          component="p"
          sx={{
            color: "white",
            fontWeight: "bold",

            mt: 2,
          }}
        >
          Bütün hizmetlerimiz{" "}
          <Box
            component="span"
            sx={{
              textDecoration: "underline",
              fontSize: "larger",
            }}
          >
            TAMAMEN
          </Box>{" "}
          ücretsizdir.
        </Typography>
      </Box>
    </Container>
  );
}
/*
<Grid
        container
        spacing={3}
        sx={{ alignItems: "center", justifyContent: "center" }}
      >
        {tiers.map((tier) => (
          <Grid
            item
            key={tier.title}
            xs={12}
            sm={tier.title === "Enterprise" ? 12 : 6}
            md={4}
          >
            <Card
              sx={[
                {
                  p: 2,
                  display: "flex",
                  flexDirection: "column",
                  gap: 4,
                },
                tier.title === "Professional" &&
                  ((theme) => ({
                    border: "none",
                    background:
                      "radial-gradient(circle at 50% 0%, hsl(210, 98%, 35%), hsl(210, 100%, 16%))",
                    boxShadow: `0 8px 12px hsla(210, 98%, 42%, 0.2)`,
                    ...theme.applyStyles("dark", {
                      boxShadow: `0 8px 12px hsla(0, 0%, 0%, 0.8)`,
                    }),
                  })),
              ]}
            >
              <CardContent>
                <Box
                  sx={[
                    {
                      mb: 1,
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      gap: 2,
                    },
                    tier.title === "Professional"
                      ? { color: "grey.100" }
                      : { color: "" },
                  ]}
                >
                  <Typography component="h3" variant="h6">
                    {tier.title}
                  </Typography>
                  {tier.title === "Professional"}
                </Box>
                <Box
                  sx={[
                    {
                      display: "flex",
                      alignItems: "baseline",
                    },
                    tier.title === "Professional"
                      ? { color: "grey.50" }
                      : { color: null },
                  ]}
                >
                  <Typography component="h3" variant="h2">
                    ${tier.price}
                  </Typography>
                  <Typography component="h3" variant="h6">
                    &nbsp; per month
                  </Typography>
                </Box>
                <Divider sx={{ my: 2, opacity: 0.8, borderColor: "divider" }} />
                {tier.description.map((line) => (
                  <Box
                    key={line}
                    sx={{
                      py: 1,
                      display: "flex",
                      gap: 1.5,
                      alignItems: "center",
                    }}
                  >
                    <CheckCircleRoundedIcon
                      sx={[
                        {
                          width: 20,
                        },
                        tier.title === "Professional"
                          ? { color: "primary.light" }
                          : { color: "primary.main" },
                      ]}
                    />
                    <Typography
                      variant="subtitle2"
                      component={"span"}
                      sx={[
                        tier.title === "Professional"
                          ? { color: "grey.50" }
                          : { color: null },
                      ]}
                    >
                      {line}
                    </Typography>
                  </Box>
                ))}
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
       */
