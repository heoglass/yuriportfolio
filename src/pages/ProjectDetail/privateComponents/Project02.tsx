import styled from "styled-components";
import ProjectImageSlider from "../../../components/ProjectImageSlider";
import {
  landingDriverImages,
  landingImages,
  landingSimpleImages,
  landingResponsiveImages,
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
// const SectionTitle = styled.p`
//   font-size: 22px;
//   font-weight: 500;
//   margin-bottom: 16px;
// `;
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
const DescriptionTitle = styled.p`
  font-size: 22px;
  font-weight: 600;
  margin-bottom: 8px;
`;
const WorkDescription = styled.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  margin-bottom: 10px;
`;

export default function Project02() {
  return (
    <Container>
      <SubDescription>
        <p>
          이사 견적 서비스 '이사로'의 서비스 소개 및 견적 신청 랜딩
          페이지입니다.
        </p>
        <p>
          <span>기술 스택</span>
          <br /> HTML · CSS · jQuery
        </p>
        <p>
          <span>기여도</span>
          <br /> 퍼블리싱 100% 프론트엔드 100%
        </p>
        <p>
          <span>담당업무</span>
          <br /> • 반응형 웹 퍼블리싱
          <br /> • 메인 비주얼 섹션 구현
          <br /> • 서비스 소개 섹션 구현
          <br /> • 기사 소개 섹션 구현
          <br /> • 이용 후기 섹션 구현
          <br /> • 간편 견적 신청 폼 구현
          <br /> • 스크롤 인터랙션 및 애니메이션 구현
          <br /> • API 연동을 통한 견적 신청 기능 개발
        </p>
        <p>
          <span>URL</span>
          <br />
          <a href="https://24ro.co.kr/">https://24ro.co.kr/</a>
        </p>
      </SubDescription>
      <WorkSection>
        {/* <SectionTitle>서비스 소개</SectionTitle> */}
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
      </WorkSection>
      <WorkSection>
        {/* <SectionTitle>간편견적 신청</SectionTitle> */}
        <SubContainer $reverse>
          <ImageArea $reverse>
            <ProjectImageSlider images={landingSimpleImages} />
          </ImageArea>

          <SectionDescriptionContainer $reverse>
            <DescriptionTitle>간편견적 신청</DescriptionTitle>
            <WorkDescription>
              사용자가 출발지, 도착지, 이사 날짜를 입력하여 간단하게 견적을
              요청할 수 있는 기능입니다.
              <br />
              <br />
              구현 내용
              <br />
              • 입력값 유효성 검사
              <br />
              • 주소 검색 daum post 연동
              <br />• api 요청 처리
            </WorkDescription>
          </SectionDescriptionContainer>
        </SubContainer>
      </WorkSection>
      <WorkSection>
        {/* <SectionTitle>기사 신청</SectionTitle> */}
        <SubContainer>
          <ImageArea>
            <ProjectImageSlider images={landingDriverImages} />
          </ImageArea>

          <SectionDescriptionContainer>
            <DescriptionTitle>기사 신청 팝업</DescriptionTitle>
            <WorkDescription>
              제휴를 희망하는 기사님이 정보를 입력하여 신청할 수 있는
              기능입니다.
              <br />
              <br />
              구현 내용
              <br />• 입력 폼 구성
              <br />• 필수값 검증
              <br />• 신청 데이터 전송
            </WorkDescription>
          </SectionDescriptionContainer>
        </SubContainer>
      </WorkSection>
      <WorkSection>
        {/* <SectionTitle>반응형</SectionTitle> */}
        <SubContainer $reverse>
          <ImageArea $reverse>
            <ProjectImageSlider images={landingResponsiveImages} />
          </ImageArea>

          <SectionDescriptionContainer $reverse>
            <DescriptionTitle>반응형 이미지</DescriptionTitle>
            <WorkDescription>
              PC, Tablet, Mobile 환경에 맞춰 레이아웃과 UI를 최적화하였습니다.
              <br />
              <br />
              구현 내용
              <br /> • 디바이스별 레이아웃 재구성
              <br /> • 버튼 및 인터랙션 영역 최적화
              <br /> • 이미지 및 콘텐츠 크기 조정
              <br /> • 모바일 환경에 맞춘 UI 배치 변경
            </WorkDescription>
          </SectionDescriptionContainer>
        </SubContainer>
      </WorkSection>
    </Container>
  );
}
