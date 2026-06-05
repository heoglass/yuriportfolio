import { useState } from "react";
import styled from "styled-components";
import ICO_ARROW_PREV from "../assets/images/slide-arrow-prev2.png";
import ICO_ARROW_NEXT from "../assets/images/slide-arrow-next2.png";

type SlideImage = {
  src: string;
  alt: string;
  caption?: string;
};

type ProjectImageSliderProps = {
  images: SlideImage[];
};

const Slider = styled.div`
  width: 100%;
`;

const ImageBox = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 24px;
  background-color: #f4f1ea;
`;

const Image = styled.img`
  width: 100%;
  height: 420px;
  background-color: #222;
  /* object-fit: cover; */
  object-fit: contain;
  display: block;

  @media (max-width: 768px) {
    height: 280px;
  }
`;

const ArrowButton = styled.button<{ $position: "left" | "right" }>`
  position: absolute;
  top: 50%;
  ${({ $position }) => $position}: 16px;
  transform: translateY(-50%);

  /* width: 42px;
  height: 42px; */
  border: none;
  background-color: transparent;
  cursor: pointer;

  img {
    width: 36px;
    height: 36px;
  }

  &:hover {
    opacity: 0.6;
  }
`;

const Count = styled.div`
  position: absolute;
  right: 16px;
  bottom: 16px;

  padding: 6px 12px;
  border-radius: 999px;
  background-color: rgba(42, 35, 79, 0.75);
  color: #fff8f3;
  font-size: 13px;
`;

const Caption = styled.p`
  margin-top: 12px;
  font-size: 15px;
  line-height: 1.6;
  color: #4d466f;
`;

const DotList = styled.div`
  display: flex;
  justify-content: center;
  gap: 8px;
  margin-top: 14px;
`;

const Dot = styled.button<{ $active: boolean }>`
  width: ${({ $active }) => ($active ? "22px" : "8px")};
  height: 8px;
  border-radius: 999px;
  border: none;
  cursor: pointer;
  background-color: ${({ $active }) =>
    $active ? "#2a234f" : "rgba(42, 35, 79, 0.25)"};
  transition: width 0.2s ease, background-color 0.2s ease;
`;

export default function ProjectImageSlider({
  images,
}: ProjectImageSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!images || images.length === 0) return null;

  const currentImage = images[currentIndex];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <Slider>
      <ImageBox>
        <Image src={currentImage.src} alt={currentImage.alt} />

        {images.length > 1 && (
          <>
            <ArrowButton type="button" $position="left" onClick={handlePrev}>
              <img src={ICO_ARROW_PREV} alt="슬라이드 이전" />
            </ArrowButton>

            <ArrowButton type="button" $position="right" onClick={handleNext}>
              <img src={ICO_ARROW_NEXT} alt="슬라이드 다음" />
            </ArrowButton>

            <Count>
              {currentIndex + 1} / {images.length}
            </Count>
          </>
        )}
      </ImageBox>

      {currentImage.caption && <Caption>{currentImage.caption}</Caption>}

      {images.length > 1 && (
        <DotList>
          {images.map((_, index) => (
            <Dot
              key={index}
              type="button"
              $active={currentIndex === index}
              onClick={() => setCurrentIndex(index)}
              aria-label={`${index + 1}번째 이미지 보기`}
            />
          ))}
        </DotList>
      )}
    </Slider>
  );
}
