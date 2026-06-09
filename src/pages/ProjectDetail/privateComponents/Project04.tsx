import styled from "styled-components";
// import ProjectImageSlider from "../../../components/ProjectImageSlider";

const Container = styled.div`
  width: 100%;
  /* border: 1px solid red; */
`;
// const SubDescription = styled.div`
//   font-size: 16px;
//   font-weight: 400;
//   margin-bottom: 30px;
//   line-height: 24px;

//   span {
//     font-weight: 600;
//   }
//   a {
//     color: #2a234f;
//     text-decoration: none;
//   }
// `;
// const SubContainer = styled.div<{ $reverse?: boolean }>`
//   display: grid;
//   grid-template-columns: ${({ $reverse }) =>
//     $reverse ? "1fr 1.3fr" : "1.3fr 1fr"};
//   column-gap: 20px;

//   @media (max-width: 768px) {
//     grid-template-columns: 1fr;
//     row-gap: 20px;
//   }
// `;
// const WorkSection = styled.section`
//   width: 100%;
//   border: 3px solid #2a234f;
//   border-radius: 20px;
//   padding: 16px;
//   margin-bottom: 30px;
// `;
// const SectionTitle = styled.p`
//   font-size: 22px;
//   font-weight: 500;
//   margin-bottom: 16px;
// `;
// const SectionDescriptionContainer = styled.div<{ $reverse?: boolean }>`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;

//   order: ${({ $reverse }) => ($reverse ? 1 : 2)};

//   @media (max-width: 768px) {
//     order: 2;
//   }
// `;
// const ImageArea = styled.div<{ $reverse?: boolean }>`
//   order: ${({ $reverse }) => ($reverse ? 2 : 1)};

//   @media (max-width: 768px) {
//     order: 1;
//   }
// `;
// const DescriptionTitle = styled.p`
//   font-size: 22px;
//   font-weight: 600;
//   margin-bottom: 8px;
// `;
// const WorkDescription = styled.p`
//   font-size: 16px;
//   font-weight: 400;
//   line-height: 20px;
//   margin-bottom: 10px;
// `;
const NoContetsContatiner = styled.div`
  width: 100%;
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const WatingText = styled.p`
  font-size: 20px;
  text-align: center;
`;
export default function Project04() {
  return (
    <Container>
      {/* <SubDescription>
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
          <br /> 퍼블리싱 100% 프론트엔드 100%
        </p>
        <br />
        <p>
          <span>담당업무</span>
          <br />• Cafe24 쇼핑몰 전체 퍼블리싱
          <br />• 메인 페이지 인터랙션 구현
          <br />• 상품 리스트 페이지 커스텀 개발
          <br />• 상품 상세 페이지 레이아웃 구현
          <br />• 브랜드 소개 및 갤러리 페이지 제작
          <br />• 반응형 UI 구현
          <br />• Intersection Observer 기반 스크롤 애니메이션 적용
          <br />• 원페이지 스토리형 메인 화면 구현
          <br />• 헤더 및 메뉴 인터랙션 개발
        </p>
        <br />
        <p>
          <span>URL</span>
          <br />
          <a href="https://hwansuldang.cafe24.com/">
            https://hwansuldang.cafe24.com/
          </a>
        </p>
      </SubDescription> */}

      <NoContetsContatiner>
        <WatingText>
          오픈전이라
          <br />
          준비중입니다!
          <br /> 기다려주세요 :&#41;
        </WatingText>
      </NoContetsContatiner>
      {/* <WorkSection>
        <SectionTitle>서비스 소개</SectionTitle>
        <SubContainer>
          <ImageArea>
            <ProjectImageSlider images={landingImages} />
          </ImageArea>

          <SectionDescriptionContainer>
            <DescriptionTitle>서비스 소개</DescriptionTitle>
            <WorkDescription>
              구현 내용
              <br />
              • 메인 비주얼 영상 자동 재생
              <br />
              • 섹션별 스크롤 애니메이션
              <br />
              • 서비스 신청 단계 스크롤 시 이미지 및 활성화 버튼 변경(PC 한정)
              <br />
              • 기사 소개 슬라이더 구현
              <br />
              • 리뷰 슬라이더 구현
              <br />
              • 메인 / 하단에 스토어 연결 버튼 구성
              <br />• 모바일 반응형 대응
            </WorkDescription>
          </SectionDescriptionContainer>
        </SubContainer>
      </WorkSection> */}
    </Container>
  );
}
