import styled from "styled-components";
import ProjectCard from "../components/ProjectCard";
import { ProjectList } from "../data/projectList";

const Container = styled.section`
  background-color: #2a234f;
  padding: 100px 20px 60px;
`;
const Title = styled.p`
  font-family: "sebang-bold";
  font-size: 100px;
  text-align: center;
  margin-bottom: 40px;
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

const ProjectCardContainer = styled.div`
  max-width: 980px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;
export default function Projects() {
  return (
    <Container id="projects" data-theme="dark">
      <Title>PROJECTS</Title>

      <ProjectCardContainer>
        {ProjectList.map((pjt, index) => (
          <ProjectCard key={pjt.pid} project={pjt} />
        ))}
      </ProjectCardContainer>
    </Container>
  );
}
