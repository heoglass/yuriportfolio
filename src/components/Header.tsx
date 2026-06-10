import styled from "styled-components";
import { useNavigate, useLocation } from "react-router-dom";
import ICO_ARROW_LEFT1 from "../assets/images/arrow-left1.png";
// import ICO_ARROW_LEFT2 from "../assets/images/arrow-left2.png";

const Container = styled.div`
  width: 100%;
  background-color: rgb(125, 192, 250);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  padding: 0 20px;
  color: #2a234f;
  background-color: rgba(255, 248, 243, 0.75);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(42, 35, 79, 0.08);
`;
const MenuContainer = styled.div<{ $isProjectDetail: boolean }>`
  display: flex;
  align-items: center;
  justify-content: ${({ $isProjectDetail }) =>
    $isProjectDetail ? "space - between" : "end"};
  padding: 20px 0;
`;
const Menu = styled.p`
  font-family: "sebang-bold";
  font-size: 24px;
  margin-right: 10px;
  transition: color 0.2s ease-in;
  cursor: pointer;
  /* color: #fff8d8; */
  /* color: #ffb3c3; */

  letter-spacing: 2px;

  &:last-child {
    margin-right: 0;
  }
  &:hover {
    /* color: #ec8787; */
    color: #f4f4f4;
  }
  @media (max-width: 1024px) {
    font-size: 20px;
  }
  @media (max-width: 768px) {
    font-size: 16px;
    margin-right: 5px;
  }
`;
const BackButton = styled.button`
  border: none;
  background: none;
  cursor: pointer;
  display: flex;
  align-items: center;

  margin-right: auto;

  &:hover {
    opacity: 0.6;
  }
`;
const BackArrowImg = styled.img`
  width: 40px;

  @media (max-width: 768px) {
    width: 25px;
  }
`;
export default function Header() {
  const navigate = useNavigate();
  const location = useLocation();

  const isProjectDetail = location.pathname.includes("/projects/");

  const menuList = [
    { name: "HOME", id: "home" },
    { name: "ABOUT", id: "about" },
    { name: "PROJECTS", id: "projects" },
  ];

  function handleScroll(id: string) {
    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }

  return (
    <Container>
      <MenuContainer $isProjectDetail={isProjectDetail ? true : false}>
        {isProjectDetail && (
          <BackButton onClick={() => navigate("/")}>
            <BackArrowImg src={ICO_ARROW_LEFT1} alt="뒤로가기 화살표" />
            {/* <BackArrowImg src={ICO_ARROW_LEFT2} alt="뒤로가기 화살표" /> */}
          </BackButton>
        )}

        {menuList.map((item, index) => (
          <Menu key={item.id} onClick={() => handleScroll(item.id)}>
            {item.name}
          </Menu>
        ))}
      </MenuContainer>
    </Container>
  );
}
