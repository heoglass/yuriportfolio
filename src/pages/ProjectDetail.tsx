import { useParams, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { ProjectList } from "../data/projectList";
import Header from "../components/Header";

const Container = styled.main`
  background-color: #fff8f3;
  padding: 120px 20px;
  color: #2a234f;
`;

export default function ProjectDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();

  const project = ProjectList.find((item) => item.slug === slug);

  if (!project) {
    return (
      <Container>
        <p>프로젝트를 찾을 수 없습니다.</p>
        <button onClick={() => navigate("/")}>돌아가기</button>
      </Container>
    );
  }

  return (
    <Container>
      <Header />
      <h1>{project.pname}</h1>
      <p>{project.type}</p>
      <img src={project.image} alt={project.pname} />

      <section>
        <h2>프로젝트 설명</h2>
        <p>{project.desc}</p>
      </section>

      <section>
        <h2>작업 기여도</h2>
        <p>{project.contribution}</p>
      </section>
    </Container>
  );
}
