import styled from "styled-components";
import About from "./About";
import Projects from "./Projects";
import Header from "../components/Header";

const Container = styled.section``;
const Main = styled.div`
  width: 100%;
  height: 100vh;
  /* background-color: #ec8787; */
  /* background-color: #887114; */
  background-color: #2a234f;
`;
const MainTitleContatiner = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: end;
  padding-left: 20px;
`;
const NameText = styled.p`
  font-family: "sebang-bold";
  font-size: 130px;
  /* color: #2f2e33; */
  color: #f2f2f2;

  @media (max-width: 1024px) {
    font-size: 90px;
  }
  @media (max-width: 768px) {
    font-size: 70px;
  }
  @media (max-width: 400px) {
    font-size: 50px;
  }
`;
const PortfolioText = styled.p`
  font-family: "sebang-bold";
  font-size: 130px;
  /* color: #fff8d8; */
  color: #ffb3c3;
  @media (max-width: 1024px) {
    font-size: 90px;
  }
  @media (max-width: 768px) {
    font-size: 70px;
  }
  @media (max-width: 400px) {
    font-size: 50px;
  }
`;

export default function Home() {
  return (
    <Container id="home" data-theme="dark">
      <Header />
      <Main>
        <MainTitleContatiner>
          <NameText>HEO YURI</NameText>
          <PortfolioText>PORTFOLIO</PortfolioText>
        </MainTitleContatiner>
      </Main>
      <About />
      <Projects />
    </Container>
  );
}
