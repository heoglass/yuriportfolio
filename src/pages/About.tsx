import styled from "styled-components";
import IMG_PROFILE from "../assets/images/profile.png";
// import IMG_PROFILE from "../assets/images/profile.jpeg";
// import ICO_HTML from "../assets/images/html5.svg";
import { ReactComponent as ICO_HTML } from "../assets/images/html5.svg";
import { ReactComponent as ICO_CSS } from "../assets/images/css.svg";
import { ReactComponent as ICO_STYLED } from "../assets/images/styledcomponents.svg";
import { ReactComponent as ICO_ANTD } from "../assets/images/antdesign.svg";
import { ReactComponent as ICO_JS } from "../assets/images/javascript.svg";
import { ReactComponent as ICO_JQUERY } from "../assets/images/jquery.svg";
import { ReactComponent as ICO_REACT } from "../assets/images/react.svg";
import { ReactComponent as ICO_TS } from "../assets/images/typescript.svg";

const Container = styled.section`
  /* background-color: #fff8d8; */
  background-color: #ffb3c3;
  padding: 100px 20px 60px;
`;
const Title = styled.p`
  font-family: "sebang-bold";
  font-size: 100px;
  text-align: center;
  margin-bottom: 40px;
  /* color: #2f2e33; */
  color: #2a234f;

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

const AboutContainer = styled.div`
  border: 5px solid #2a234f;
  border-radius: 20px;
  position: relative;
  max-width: 980px;
  margin: 0 auto;
  padding: 10px 20px;
  /* @media (max-width: 400px) {
    font-size: 50px;
  } */
`;
const DescriptionContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 20px 20px;
  column-gap: 30px;
  border-bottom: 1px solid #2a234f;

  @media (max-width: 768px) {
    flex-direction: column;
    row-gap: 30px;
    padding: 10px 0 0;
  }
`;
// const ProfileImg = styled.div`
//   width: 200px;
//   height: 200px;
//   border-radius: 100px;
//   background-color: #ec8787;
//   background: url(${IMG_PROFILE});
//   background-size: cover;
//   border: 1px solid red;
// `;
const ProfileImg = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 100px;
  border: 1px solid BEBEBE;
`;

const DescriptionText = styled.p`
  font-family: "NoonnuBasicGothic";
  color: #2f2e33;
`;

const IcsContainer = styled.div`
  /* border: 1px solid red; */
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 25px;
  padding: 16px;
`;
const Subtitle = styled.p`
  font-family: "sebang-bold";
  font-size: 24px;
  padding-bottom: 5px;
  margin-bottom: 15px;
  border-bottom: 1px solid #2f2e33;
`;
const InfoContainer = styled.div`
  /* padding: 10px; */
  /* border: 1px solid blue; */
  /* border-right: 1px solid blue; */
  @media (max-width: 768px) {
    grid-column: 1 / 3;
  }
`;
const InfoText = styled.p`
  font-family: "NoonnuBasicGothic";
`;
const CareerContainer = styled.div`
  /* padding: 10px; */
  /* border: 1px solid green; */
  @media (max-width: 768px) {
    grid-column: 1 / 3;
  }
`;
const EducationContainer = styled.div`
  /* border: 1px solid hotpink; */
  grid-column: 1 / 3;
`;
const Skilcontainer = styled.div`
  /* border: 1px solid hotpink; */
  grid-column: 1 / 3;
  /* padding: 10px; */
`;
const SkilItemContainer = styled.div`
  display: flex;
  column-gap: 12px;
`;
const SkilItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* margin-right: 10px; */
`;
const SkilName = styled.p`
  font-family: "NoonnuBasicGothic";
  font-size: 12px;
`;
export default function About() {
  return (
    <Container id="about" data-theme="light">
      <Title>ABOUT ME</Title>

      <AboutContainer>
        {/* 프로필 이미지 및 소개글 */}
        <DescriptionContainer>
          <ProfileImg src={IMG_PROFILE} />

          <DescriptionText>
            퍼블리싱 경험을 기반으로 프론트엔드 역량을 깊이 있게 확장해가고 있는
            주니어 개발자입니다.
            <br />
            <br />
            단순히 주어진 기능을 구현하는 데 그치지 않고,
            <br />
            데이터와 상태에 따라 UI가 어떻게 변화하는지 이해하고 설계하는 과정에
            관심을 가지고 있습니다.
            <br />
            <br />
            또한 기능 구현뿐 아니라 구조와 데이터 흐름을 함께 고려하며,
            <br />
            유지보수와 확장성을 염두에 둔 개발을 지향합니다.
          </DescriptionText>
        </DescriptionContainer>

        <IcsContainer>
          <InfoContainer>
            <Subtitle>Info</Subtitle>

            <InfoText>허유리</InfoText>
            <InfoText>gjdbfl45@naver.com</InfoText>
            <InfoText>https://github.com/heoglass</InfoText>
          </InfoContainer>
          <CareerContainer>
            <Subtitle>Career</Subtitle>
            <InfoText>
              2022.10 ~ 2025.10
              <br /> &#40;주&#41;에이치투비즈 개발팀
            </InfoText>
          </CareerContainer>
          <EducationContainer>
            <Subtitle>Education</Subtitle>
            <InfoText>
              2022.01 ~ 2022.02
              <br />
              SBS아카데미 웹퍼블리셔 양성과정 수료
              <br />
              <br />
              2015.03 ~ 2017.02
              <br /> 서일 대학 생활가구 디자인과 졸업
            </InfoText>
          </EducationContainer>
          <Skilcontainer>
            <Subtitle>Skills</Subtitle>
            <SkilItemContainer>
              <SkilItem>
                <ICO_HTML width="35" fill="#e34f26"></ICO_HTML>
                <SkilName>html</SkilName>
              </SkilItem>
              <SkilItem>
                <ICO_CSS width="35" fill="#663399"></ICO_CSS>
                <SkilName>css</SkilName>
              </SkilItem>
              <SkilItem>
                <ICO_STYLED width="35" fill="#DB7093"></ICO_STYLED>
                <SkilName>styled-components</SkilName>
              </SkilItem>
              <SkilItem>
                <ICO_ANTD width="35" fill="#0170FE"></ICO_ANTD>
                <SkilName>Antd Design</SkilName>
              </SkilItem>
              <SkilItem>
                <ICO_JS width="35" fill="#F7DF1E"></ICO_JS>
                <SkilName>javascript</SkilName>
              </SkilItem>
              <SkilItem>
                <ICO_JQUERY width="35" fill="#0769AD"></ICO_JQUERY>
                <SkilName>jquery</SkilName>
              </SkilItem>
              <SkilItem>
                <ICO_REACT width="35" fill="#61DAFB"></ICO_REACT>
                <SkilName>react</SkilName>
              </SkilItem>
              <SkilItem>
                <ICO_REACT width="35" fill="#61DAFB"></ICO_REACT>
                <SkilName>react-native</SkilName>
              </SkilItem>
              <SkilItem>
                <ICO_TS width="35" fill="#3178C6"></ICO_TS>
                <SkilName>typescript</SkilName>
              </SkilItem>
            </SkilItemContainer>
          </Skilcontainer>
        </IcsContainer>
      </AboutContainer>
    </Container>
  );
}
