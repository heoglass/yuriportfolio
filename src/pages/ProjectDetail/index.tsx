import { useParams } from "react-router-dom";
import styled from "styled-components";
import { ProjectList } from "../../data/projectList";
import Header from "../../components/Header";
import Project01 from "./privateComponents/Project01";
import Project02 from "./privateComponents/Project02";
import Project03 from "./privateComponents/Project03";
import { useEffect } from "react";
import Project04 from "./privateComponents/Project04";

const Container = styled.main`
  width: 100%;
  background-color: #fff8f3;
  padding: 120px 20px;
  color: #2a234f;
`;
const Title = styled.p`
  color: #2a234f;
  font-size: 30px;
  font-weight: 700;
  margin-bottom: 20px;
`;
const ContentsContainer = styled.div`
  width: 100%;
  img {
    width: 100%;
  }
`;

const NoContetsContatiner = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const WatingText = styled.p`
  font-size: 20px;
  text-align: center;
`;
export default function ProjectDetail() {
  const { slug } = useParams();
  // const navigate = useNavigate();

  const project = ProjectList.find((item) => item.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project) {
    return (
      <NoContetsContatiner>
        <WatingText>
          준비중입니다!
          <br /> 기다려주세요 :&#41;
        </WatingText>
      </NoContetsContatiner>
    );
  }

  return (
    <Container>
      <Header />
      <Title>{project.pname}</Title>

      <ContentsContainer>
        {project.slug === "admin" && <Project01 />}
        {project.slug === "landing" && <Project02 />}
        {project.slug === "esaroapp" && <Project03 />}
        {project.slug === "hwansuldang" && <Project04 />}
      </ContentsContainer>
    </Container>
  );
}
