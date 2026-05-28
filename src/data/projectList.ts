import test1 from "../assets/images/test1.jpg";
import test2 from "../assets/images/test2.jpg";
import test3 from "../assets/images/test3.jpg";

export const ProjectList = [
  {
    pid: 1,
    slug: "admin",
    pname: "서비스 관리자 페이지",
    type: "Admin System",
    desc: "React 기반 관리자 페이지 / CRUD / 권한 처리",
    contribution: "퍼블리싱 100% · 프론트엔드 70%",
    image: test1,
  },
  {
    pid: 2,
    slug: "landing",
    pname: "서비스 랜딩 페이지",
    type: "Landing Page",
    desc: "HTML, CSS, jQuery 기반 랜딩 페이지",
    contribution: "퍼블리싱 100% · 프론트엔드 100%",
    image: test2,
  },
  {
    pid: 3,
    slug: "netflix",
    pname: "넷플릭스",
    type: "Personal Project",
    desc: "React 기반 클론 프로젝트 / 기능 확장 예정",
    contribution: "개인 프로젝트",
    image: test3,
  },
];
