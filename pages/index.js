import Head from "next/head";
import Image from "next/image";
import { globalStyles } from "../styles/globalStyles.js";
import { styled } from "../styles/styles.js";
import Header from "../components/Layout/Header";
import Hero from "../components/Hero";
import Effektivisera from "../components/Effektivisera";
import Section from "../components/Section";
import Partners from "../components/Partners";
import Tillsammans from "../components/Tillsammans";
import HowSection from "../components/HowSection";
import Skala from "../components/Skala";
import Cta from "../components/Cta";
import Footer from "../components/Footer";

const OverlappingSection = styled("section", {
  display: "grid",
  background: "#141317",
  padding: "48px",
  justifyContent: "center",
  textAlign: "center",
  fontSize: "20px",
  color: "#d8d8d8",
  marginTop: "-160px",
  paddingTop: "200px",
  "@medium": { marginLeft: "0px", marginRight: "0px" },
});
const Page = styled("main", {
  display: "grid",
  // justifyContent: "center",
  gap: "100px",
});

const Home = () => {
  globalStyles();
  return (
    <>
      <Page>
        <Header />
        <Hero />
        <OverlappingSection>
          <Effektivisera />
        </OverlappingSection>
        <Section>
          <Partners />
        </Section>
        <Section>
          <Tillsammans />
        </Section>
        <Section>
          <HowSection />
        </Section>
        <Section>
          <Skala />
        </Section>
        {/* <Section>
          <Cta />
        </Section> */}
        <Footer />
      </Page>
    </>
  );
};

export default Home;
