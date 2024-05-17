import mainPic from "../assets/greenWall.jpeg";
import productsPic from "../assets/products.jpg";
import accessoriesPic from "../assets/accessories.jpg";
import plantCarePic from "../assets/plantCare.jpg";
import lovePlantPic from "../assets/lovePlant.jpg";
import Typography from "@mui/material/Typography";
import { Container, Box } from "@mui/material";
import Button from "@mui/material/Button";
import StepConnector from "@mui/material/StepConnector";

const routes = [
  "/ (home page)",
  "/login",
  "/register",
  "products",
  "products-description (the info page for each product)",
  "/terms",
  "/refund",
  "/about",
  "/plant-care (tips and guides to plant care)",
  "/find-my-match (the match quiz)",
  "/admin (only accessable to admin)",
  "/cart",
  "/checkout",
  "/logout",
  "/readme (Shani read me)",
];

const paragraphStyle = (text) => (
  <Typography
    variant="subtitle1"
    align="center"
    fontSize={21}
    paragraph="true"
    sx={{
      mr: 2,
      fontWeight: 100,
      color: "inherit",
      textDecoration: "none",
    }}
  >
    {text}
  </Typography>
);

const titleStyle = (title, titleType) => (
  <Typography
    variant={titleType}
    align="center"
    style={{ marginTop: 50 }}
    paragraph="true"
    sx={{
      mr: 2,
      letterSpacing: ".2rem",
      fontWeight: "700",
      color: "inherit",
      textDecoration: "none",
    }}
  >
    {title}
  </Typography>
);

function App() {
  return (
    <div>
      <Container>
        {titleStyle("SHANI'S READ ME FILE", "h4")}
        <StepConnector
          style={{ marginRight: "40px", marginLeft: "40px" }}
        ></StepConnector>
        {titleStyle("Store name: Planty", "h6")}
        {paragraphStyle("We sell plants.")}
        <Typography
          variant="subtitle1"
          align="center"
          fontSize={21}
          paragraph="true"
          sx={{
            mr: 2,
            fontWeight: 100,
            color: "inherit",
            textDecoration: "none",
          }}
        >
          We added the following pages: <br />
          Find my match - a quiz to find a relevant plant to buy, <br /> Plant
          care - tips and guides to take care of plants,
          <br /> Plant description page (for each plant), <br /> Home page -
          with easy navigation to all parts of the website, <br /> Terms, refund
          policy and about pages (similar and quite htmly).
          <br />
          The hardest part in my opinion was to learn REACT all by myself.
          Beside the language difficulty, the cookies implementation and the
          backend of the cart was very hard for me to implement beacuse of the
          connectoin with the data base and the relationship of the cookies and
          the data base (how to check if the member is still logged in when he
          wants to get in the cart page and buy)
        </Typography>
        {titleStyle("My partner is: Shira Cohen ID 318971827", "h6")}
        {paragraphStyle(
          "Shira (my partner) worked and on the appearance and design of the site and in addition worked on part of the backend and the link of the back to the front"
        )}
        {titleStyle("The App's Routes:", "h6")}
        {routes.map((route) => {
          return (
            <Typography
              variant="subtitle1"
              align="center"
              fontSize={21}
              paragraph="true"
              sx={{
                mr: 2,
                fontWeight: 100,
                color: "inherit",
                textDecoration: "none",
              }}
            >
              {route}
            </Typography>
          );
        })}

        {titleStyle(
          "The tests file is located in ׳frontend/src/tests/Test.js׳ and in order to run the tests you need to set testRunned to false on line 35 in file index.js"
        )}
      </Container>
    </div>
  );
}

export default App;
