import styled from "styled-components";
import ProjectImageSlider from "../../../components/ProjectImageSlider";
import {
  authorityImages,
  couponImages,
  loginImages,
  pushImages,
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

export default function Project01() {
  return (
    <Container>
      <SubDescription>
        <p>
          React 기반 관리자 시스템으로 운영자가 회원, 권한, 푸시 알림, 쿠폰 등을
          관리할 수 있도록 구축한 프로젝트입니다.
        </p>
        <p>
          <span>기술 스택</span>
          <br /> React · TypeScript · REST API
        </p>
        <p>
          <span>기여도</span>
          <br /> 퍼블리싱 100% 프론트엔드 70%
        </p>
        <p>
          <span>담당업무</span>
          <br /> • React 기반 관리자 페이지 퍼블리싱 100%
          <br /> • 관리자 권한 관리 페이지 구축
          <br /> • 푸시 알림 CRUD 기능 구현
          <br /> • 리뷰 CRUD 기능 구현
          <br /> • 쿠폰 CRUD 기능 구현
          <br /> • 로그인 및 회원가입 화면 구현
          <br /> • API 연동 및 데이터 바인딩
        </p>
      </SubDescription>
      <WorkSection>
        <SectionTitle>로그인 / 회원가입</SectionTitle>
        <SubContainer>
          <ImageArea>
            <ProjectImageSlider images={loginImages} />
          </ImageArea>

          <SectionDescriptionContainer>
            <DescriptionTitle>로그인 및 회원가입</DescriptionTitle>
            <WorkDescription>
              관리자 로그인 및 회원가입 기능입니다.
            </WorkDescription>
          </SectionDescriptionContainer>
        </SubContainer>
      </WorkSection>

      <WorkSection>
        <SectionTitle>관리자 권한 목록 / 수정 </SectionTitle>
        <SubContainer $reverse>
          <SectionDescriptionContainer $reverse>
            <DescriptionTitle>1. 관리자 목록</DescriptionTitle>
            <WorkDescription>
              관리자 목록 화면으로 현재 활동 상태별로 볼 수 있으며,
              <br />
              등급별로 관리자를 확인 할 수 있습니다.
              <br />
              <br />
              권한 부여 버튼을 누르면 일부 관리자들을 일괄로 권한 변경이
              가능합니다.(*마스터 권한인 경우에만 활성화)
            </WorkDescription>
            <DescriptionTitle>2. 관리자 정보 수정</DescriptionTitle>
            <WorkDescription>
              관리자 정보를 수정 할 수 있는 화면이며 이름, 부서명, 아이디, 활동
              구분, 권한등급을 수정 할 수 있습니다.
              <br /> 권한 등급 내에서도 화면별 노출 메뉴 수정 및 뷰어/편집 권한
              설정을 상세하게 변경 가능합니다. (*마스터 권한인 경우에만 화면
              접근 가능)
            </WorkDescription>
          </SectionDescriptionContainer>

          <ImageArea $reverse>
            <ProjectImageSlider images={authorityImages} />
          </ImageArea>
        </SubContainer>
      </WorkSection>

      <WorkSection>
        <SectionTitle>수동 / 자동 푸시 </SectionTitle>
        <SubContainer>
          <ImageArea>
            <ProjectImageSlider images={pushImages} />
          </ImageArea>

          <SectionDescriptionContainer>
            <DescriptionTitle>1. 수동 푸시 (1~3 이미지)</DescriptionTitle>
            <WorkDescription>
              수동으로 푸시 알림을 보내고자 할때 사용되는 화면입니다.(1번이미지
              참고)
              <br />
              <br />
              수동발송 버튼을 누르면 모달 창 내에서 푸시 관련 상세 설정을 체크
              및 작성하여 생성 및 발송이 가능합니다.(2번이미지 참고)
              <br />
              <br />
              테이블 내에 상세보기 버튼을 누르면 보냈던 푸시의 상세 내용과 전송
              결과도 함께 확인이 가능합니다.(3번이미지 참고)
            </WorkDescription>
            <DescriptionTitle>2. 자동 푸시 (4~6 이미지)</DescriptionTitle>
            <WorkDescription>
              해당되는 시간에 자동으로 보내지는 푸시 알림들을 관리하는
              화면입니다.(4번이미지 참고)
              <br />
              <br />
              수동화면과 동일하게 푸시 알림의 상세 정보들을 입력하고 템플릿을
              등록하는 화면입니다.
              <br /> 수동화면과 다르게 발송 시점 select 영역이 있어 , 해당
              시점에 자동으로 보내지도록 설정이 가능합니다.
              <br />
              만약 같은 시점에 이미 알림이 있는 경우 이전 알림을 off하고 새로
              등록 할 것인지에 대한 confirm 모달이 뜨게됩니다. (5번이미지 참고)
              <br />
              <br />
              테이블 내에 상세보기 버튼을 누르면 보냈던 푸시의 상세 내용과 전송
              결과도 함께 확인이 가능합니다.(6번이미지 참고)
            </WorkDescription>
          </SectionDescriptionContainer>
        </SubContainer>
      </WorkSection>

      <WorkSection>
        <SectionTitle>쿠폰 등록 / 수정</SectionTitle>
        <SubContainer $reverse>
          <SectionDescriptionContainer $reverse>
            <DescriptionTitle>1.쿠폰 리스트</DescriptionTitle>
            <WorkDescription>
              등록된 쿠폰 리스트를 확인하는 라스트 화면입니다.
            </WorkDescription>
            <DescriptionTitle>2. 쿠폰 등록</DescriptionTitle>
            <WorkDescription>
              쿠폰 등록버튼을 누르면 등록 모달 창이 뜨고 쿠폰에 상세 정보를
              입력하여 생성이 가능합니다.
            </WorkDescription>
            <DescriptionTitle>3. 쿠폰 수정</DescriptionTitle>
            <WorkDescription>
              사용자에게 이미 노출되었는지에 기준에 따라 수정 범위가 다르게
              수정이 가능합니다.
            </WorkDescription>
            <DescriptionTitle>4. 쿠폰 발급 내역</DescriptionTitle>
            <WorkDescription>
              해당 쿠폰의 상세 내용과 발급 받은 사용자들 및 발급받은 사용자의
              사용 여부를 확인 할 수 있습니다.
            </WorkDescription>
          </SectionDescriptionContainer>

          <ImageArea $reverse>
            <ProjectImageSlider images={couponImages} />
          </ImageArea>
        </SubContainer>
      </WorkSection>
    </Container>
  );
}
