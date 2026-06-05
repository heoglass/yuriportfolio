import styled from "styled-components";
import ProjectImageSlider from "../../../components/ProjectImageSlider";
import {
  appMainImages,
  estimateImages,
  moreImages,
  myInfoImages,
  reviewImages,
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

export default function Project03() {
  return (
    <Container>
      <SubDescription>
        <p>
          이사 견적 서비스를 제공하는 React Native 앱입니다.
          <br /> <br /> 사용자는 서비스 신청부터 기사 비교, 견적 확인, 리뷰
          조회까지 앱 내에서 진행할 수 있습니다.
        </p>
        <p>
          <span>기술 스택</span>
          <br /> React Native · TypeScript
        </p>
        <p>
          <span>기여도</span>
          <br /> 퍼블리싱 100% 프론트엔드 10%
        </p>
        <p>
          <span>담당업무</span>
          <br /> • React Native 퍼블리싱 100%
          <br />• 공통 UI 컴포넌트 제작
          <br />• API 연동 일부 참여
        </p>
      </SubDescription>
      <WorkSection>
        {/* <SectionTitle>서비스 소개</SectionTitle> */}
        <SubContainer>
          <ImageArea>
            <ProjectImageSlider images={appMainImages} />
          </ImageArea>

          <SectionDescriptionContainer>
            <DescriptionTitle>메인 홈 화면</DescriptionTitle>
            <WorkDescription>
              구현 내용
              <br />
              • React Native 퍼블리싱 <br />
              • 서비스 유형별 카드 UI <br />
              • 이용 후기 슬라이드 영역 <br />
              • 베스트 기사 추천 영역 <br />
              • 이사 정보 콘텐츠 배너 <br />• 하단 탭 네비게이션
            </WorkDescription>
          </SectionDescriptionContainer>
        </SubContainer>
      </WorkSection>
      <WorkSection>
        {/* <SectionTitle>서비스 소개</SectionTitle> */}
        <SubContainer $reverse>
          <ImageArea $reverse>
            <ProjectImageSlider images={reviewImages} />
          </ImageArea>

          <SectionDescriptionContainer $reverse>
            <DescriptionTitle>기사 상세 화면</DescriptionTitle>
            <WorkDescription>
              구현 내용
              <br />
              • Radar Chart 시각화 <br />
              • 사진 리뷰 필터 <br />
              • 리뷰 정렬 기능 <br />• API 데이터 연동
            </WorkDescription>
          </SectionDescriptionContainer>
        </SubContainer>
      </WorkSection>
      <WorkSection>
        {/* <SectionTitle>서비스 소개</SectionTitle> */}
        <SubContainer>
          <ImageArea>
            <ProjectImageSlider images={estimateImages} />
          </ImageArea>

          <SectionDescriptionContainer>
            <DescriptionTitle>견적 내역 및 신청 내역</DescriptionTitle>
            <WorkDescription>
              구현 내용
              <br />
              • 상태별 진행 단계 표시
              <br />• 기사 정보 노출
              <br />• 금액 정보 표시
              <br />• 견적 선택 기능
              <br />
              • 신청 정보 조회
              <br />
              • 주소 및 일정 표시
              <br />
              • 상태 관리 화면
              <br />• API 데이터 연동
            </WorkDescription>
          </SectionDescriptionContainer>
        </SubContainer>
      </WorkSection>
      <WorkSection>
        {/* <SectionTitle>서비스 소개</SectionTitle> */}
        <SubContainer $reverse>
          <ImageArea $reverse>
            <ProjectImageSlider images={moreImages} />
          </ImageArea>

          <SectionDescriptionContainer $reverse>
            <DescriptionTitle>고객센터 및 1:1 문의</DescriptionTitle>
            <WorkDescription>
              구현 내용
              <br />
              • FAQ 카테고리 필터
              <br />
              • 탭 메뉴 구현
              <br />
              • FAQ 목록 조회
              <br />• 1:1 문의 화면 연동
              <br />
              • 문의 등록 기능
              <br />
              • 문의 내역 조회
              <br />
              • 탭 전환 기능
              <br />• API 연동
            </WorkDescription>
          </SectionDescriptionContainer>
        </SubContainer>
      </WorkSection>
      <WorkSection>
        {/* <SectionTitle>서비스 소개</SectionTitle> */}
        <SubContainer>
          <ImageArea>
            <ProjectImageSlider images={myInfoImages} />
          </ImageArea>

          <SectionDescriptionContainer>
            <DescriptionTitle>서비스 소개</DescriptionTitle>
            <WorkDescription>
              구현 내용
              <br />
              • 회원 정보 조회 <br />
              • 휴대폰 번호 수정 <br />
              • 추가 정보 관리 <br />
              • SNS 로그인 계정 표시 <br />• 로그아웃 기능
            </WorkDescription>
          </SectionDescriptionContainer>
        </SubContainer>
      </WorkSection>
    </Container>
  );
}
