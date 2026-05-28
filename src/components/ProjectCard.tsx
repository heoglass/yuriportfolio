import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Card = styled.article`
  position: relative;
  overflow: hidden;
  border-radius: 24px;
  background-color: #fff8f3;
  cursor: pointer;
  border: 3px solid #ffb3c3;
`;

const Thumbnail = styled.div<{ $image: string }>`
  height: 260px;
  background-image: url(${({ $image }) => $image});
  background-size: cover;
  background-position: center;
`;

const Content = styled.div`
  padding: 24px;
`;

const Type = styled.p`
  font-size: 14px;
  color: #ff7f9f;
  margin-bottom: 8px;
`;

const Name = styled.h3`
  font-size: 28px;
  color: #2a234f;
  margin-bottom: 12px;
`;

const Desc = styled.p`
  font-size: 16px;
  line-height: 1.6;
  color: #4d466f;
  margin-bottom: 16px;
`;

const Contribution = styled.p`
  font-size: 14px;
  color: #2a234f;
`;

export default function ProjectCard({ project }: { project: any }) {
  const navigate = useNavigate();
  return (
    <Card onClick={() => navigate(`/projects/${project.slug}`)}>
      <Thumbnail $image={project.image} />

      <Content>
        <Type>{project.type}</Type>
        <Name>{project.pname}</Name>
        <Desc>{project.desc}</Desc>
        <Contribution>{project.contribution}</Contribution>
      </Content>
    </Card>
  );
}
