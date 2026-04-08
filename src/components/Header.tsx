import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  background-color: aliceblue;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
`;
const MenuContainer = styled.div``;
const Menu = styled.p``;

export default function Header() {
  const menuList = ["HOME", "ABout", "PROJECTS"];
  return (
    <Container>
      <MenuContainer>
        {menuList.map((item) => (
          <Menu key={item}>{item}</Menu>
        ))}
      </MenuContainer>
    </Container>
  );
}
