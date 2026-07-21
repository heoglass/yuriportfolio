import styled from "styled-components";
import ProjectImageSlider from "../../../components/ProjectImageSlider";
import {
  hDetailImages,
  hInfoImages,
  hListImages,
  hMainImages,
} from "../../../data/projectList";

const Container = styled.div`
  width: 100%;
  /* border: 1px solid red; */
`;
const SubDescription = styled.div`
  font-size: 16px;
  font-weight: 400;
  margin-bottom: 30px;
  line-height: 24px;

  span {
    font-weight: 600;
  }
  a {
    color: #2a234f;
    text-decoration: none;
  }
`;
const SubContainer = styled.div<{ $reverse?: boolean }>`
  display: grid;
  grid-template-columns: ${({ $reverse }) =>
    $reverse ? "1fr 1.3fr" : "1.3fr 1fr"};
  column-gap: 20px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    row-gap: 20px;
  }
`;
const WorkSection = styled.section`
  width: 100%;
  border: 3px solid #2a234f;
  border-radius: 20px;
  padding: 16px;
  margin-bottom: 30px;
`;
const SectionTitle = styled.p`
  font-size: 22px;
  font-weight: 500;
  margin-bottom: 16px;
`;
const SectionDescriptionContainer = styled.div<{ $reverse?: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: center;

  order: ${({ $reverse }) => ($reverse ? 1 : 2)};

  @media (max-width: 768px) {
    order: 2;
  }
`;
const ImageArea = styled.div<{ $reverse?: boolean }>`
  order: ${({ $reverse }) => ($reverse ? 2 : 1)};

  @media (max-width: 768px) {
    order: 1;
  }
`;
// const DescriptionTitle = styled.p`
//   font-size: 22px;
//   font-weight: 600;
//   margin-bottom: 8px;
// `;
const WorkDescription = styled.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  margin-bottom: 10px;
`;
// const NoContetsContatiner = styled.div`
//   width: 100%;
//   min-height: 90vh;
//   display: flex;
//   align-items: center;
//   justify-content: center;
// `;
// const WatingText = styled.p`
//   font-size: 20px;
//   text-align: center;
// `;
export default function Project04() {
  return (
    <Container>
      <SubDescription>
        <p>
          전통 공예품을 판매하는 브랜드 쇼핑몰입니다.
          <br />
          Cafe24 플랫폼을 기반으로 상품 리스트, 상세 페이지, 브랜드 소개, 갤러리
          페이지를 구축하였으며, 사용자 경험을 고려한 인터랙션과 반응형 UI를
          구현했습니다.
        </p>
        <br />
        <p>
          <span>기술 스택</span>
          <br /> HTML · CSS · jQuery
        </p>
        <br />
        <p>
          <span>기여도</span>
          <br /> 퍼블리싱 100%
        </p>
        <br />
        <p>
          <span>담당업무</span>
          <br />• Cafe24 쇼핑몰 전체 퍼블리싱
          <br />• 메인 페이지 인터랙션 및 스크롤 애니메이션 구현
          <br />• 상품 리스트/상세 페이지 UI 커스터마이징
          <br />• 브랜드 소개 및 갤러리 페이지 구현
          <br />• 반응형 웹 구현
          <br />• Intersection Observer 기반 스크롤 애니메이션 적용
          <br />• 공통 레이아웃 및 헤더 인터랙션 개발
          <br />• 사용자 경험을 고려한 UI 개선 및 유지보수
        </p>
        <br />
        <p>
          <span>URL</span>
          <br />
          <a href="https://hwansuldang.cafe24.com/">
            https://hwansuldang.cafe24.com/
          </a>
        </p>
      </SubDescription>

      <WorkSection>
        <SectionTitle>메인화면</SectionTitle>
        <SubContainer>
          <ImageArea>
            <ProjectImageSlider images={hMainImages} />
          </ImageArea>

          <SectionDescriptionContainer>
            {/* <DescriptionTitle>서비스 소개</DescriptionTitle> */}
            <WorkDescription>
              구현 내용
              <br />
              • 스크롤 기반 인터랙션
              <br />
              • 원페이지 레이아웃
              <br />• 모바일 반응형 대응
            </WorkDescription>
          </SectionDescriptionContainer>
        </SubContainer>
      </WorkSection>

      <WorkSection>
        <SectionTitle>상품 리스트 화면</SectionTitle>
        <SubContainer $reverse>
          <SectionDescriptionContainer $reverse>
            <WorkDescription>
              구현 내용
              <br />
              • 상품 목록 UI 구현 <br />
              • 카테고리 구성 <br />
              • 상품 카드 레이아웃 <br />• 반응형 Grid
            </WorkDescription>
          </SectionDescriptionContainer>

          <ImageArea $reverse>
            <ProjectImageSlider images={hListImages} />
          </ImageArea>
        </SubContainer>
      </WorkSection>

      <WorkSection>
        <SectionTitle>상품 상세 화면</SectionTitle>
        <SubContainer>
          <ImageArea>
            <ProjectImageSlider images={hDetailImages} />
          </ImageArea>

          <SectionDescriptionContainer>
            {/* <DescriptionTitle>서비스 소개</DescriptionTitle> */}
            <WorkDescription>
              구현 내용
              <br />
              • 상세페이지 레이아웃 구현
              <br />
              • 설명 및 구매 영역 우측 스크롤 고정
              <br />• Cafe24 모듈 커스터마이징
            </WorkDescription>
          </SectionDescriptionContainer>
        </SubContainer>
      </WorkSection>

      <WorkSection>
        <SectionTitle>환술당 소개</SectionTitle>
        <SubContainer $reverse>
          <SectionDescriptionContainer $reverse>
            <WorkDescription>
              구현 내용
              <br />• 모바일인 경우 이미지 클릭시 모달 생성
            </WorkDescription>
          </SectionDescriptionContainer>

          <ImageArea $reverse>
            <ProjectImageSlider images={hInfoImages} />
          </ImageArea>
        </SubContainer>
      </WorkSection>
    </Container>
  );
}
