import React, { useState } from 'react';
import styled from 'styled-components';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

const CardContainer = styled.div`
  border: 1px solid #ddd;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease-in-out, transform 0.3s ease-in-out;
  &:hover {
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
    transform: translateY(-5px);
  }
  width: 100%;
  max-width: 300px;
  margin: 0 auto;
  position: relative;
  background-color: white;
  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

const ImageWrapper = styled.div`
  width: 100%;
  position: relative;
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  border-bottom: 1px solid #ddd;
`;

const FavoriteIcon = styled(FavoriteBorderIcon)`
  position: absolute;
  top: 16px;
  right: 16px;
  color: white;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 50%;
  padding: 8px;
  cursor: pointer;
`;

const CardContent = styled.div`
  padding: 16px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const Title = styled.h2`
  margin: 0;
  font-size: 1.25rem;
  color: #333;
`;

const Description = styled.p`
  margin: 8px 0;
  color: #555;
`;

const Price = styled.p`
  margin: 0;
  font-size: 1rem;
  color: #333;
  font-weight: bold;
`;

const ArrowWrapper = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 1;
  cursor: pointer;
  color: white;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 50%;
  padding: 0.5rem;
  display: ${({ show }) => (show ? 'block' : 'none')};
  transition: background 0.3s ease-in-out;
  &:hover {
    background: rgba(0, 0, 0, 0.8);
  }
`;

const PrevArrow = ({ onClick, show }) => (
  <ArrowWrapper style={{ left: '10px' }} onClick={onClick} show={show}>
    <ArrowBackIosIcon />
  </ArrowWrapper>
);

const NextArrow = ({ onClick, show }) => (
  <ArrowWrapper style={{ right: '10px' }} onClick={onClick} show={show}>
    <ArrowForwardIosIcon />
  </ArrowWrapper>
);

const Card = ({ images, title, description, price }) => {
  const [hover, setHover] = useState(false);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow show={hover} />,
    prevArrow: <PrevArrow show={hover} />,
  };

  return (
    <CardContainer
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <ImageWrapper>
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index}>
              <Image src={image} alt={title} />
            </div>
          ))}
        </Slider>
        <FavoriteIcon />
      </ImageWrapper>
      <CardContent>
        <Title>{title}</Title>
        <Description>{description}</Description>
        <Price>{price} € par nuit</Price>
      </CardContent>
    </CardContainer>
  );
};

export default Card;
