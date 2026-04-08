import styled from "styled-components";
import About from "./About";
import Projects from "./Projects";
// import Header from "../components/Header";

const Container = styled.div``;
const Main = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #ec8787;
`;

export default function Home() {
  return (
    <Container>
      {/* <Header /> */}
      <Main></Main>
      <About />
      <Projects />
    </Container>
  );
}
