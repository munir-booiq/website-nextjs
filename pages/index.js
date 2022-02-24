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

import { Welcome } from "../components/patterns/Welcome";
import { Intuitivt } from "../components/patterns/Intuitivt";

// const OverlappingSection = styled("section", {
//   display: "grid",
//   background: "#141317",
//   padding: "48px",
//   justifyContent: "center",
//   textAlign: "center",
//   fontSize: "20px",
//   color: "#d8d8d8",
//   marginTop: "-160px",
//   paddingTop: "200px",

// });
const Page = styled("main", {
  display: "grid",
  // justifyContent: "center",
  gap: "100px",
});

const SectionContent = styled("div", {
  display: "flex",
  flexDirection: "column",
  flex: 1,
  width: "100%",
  maxWidth: 1280,
  padding: "32px 32px",
  alignItems: "center",
  textAlign: "center",
  "@md": { padding: "64px 64px" },
  variants: {
    justify: {
      center: {
        alignItems: "center",
      },
    },
  },
});

const Home = () => {
  globalStyles();
  return (
    <>
      <Page>
        <Header />
        <Section>
          <SectionContent>
            <Hero />
          </SectionContent>
        </Section>
        <Section color="black">
          <SectionContent justify="center">
            <Effektivisera />
          </SectionContent>
        </Section>
        <Section>
          <SectionContent>
            <Partners />
          </SectionContent>
        </Section>
        <Section>
          <SectionContent>
            <Tillsammans />
          </SectionContent>
        </Section>
        <Section>
          <SectionContent>
            <HowSection />
          </SectionContent>
        </Section>
        <Section>
          <SectionContent>
            <Skala />
          </SectionContent>
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
