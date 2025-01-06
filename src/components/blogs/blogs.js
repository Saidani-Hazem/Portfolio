import React from "react";
import { Container } from "react-bootstrap";
import Particle from "../Particle";
import BlogCard from "./blogCard";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const StyledContainer = styled(Container)`
  position: relative;
  z-index: 1;
  padding: 0rem 1rem;

  h1 {
    color: white;
    font-size: 2.5rem;
    margin-bottom: 1rem;
    text-align: center;
    
    span {
      color: #9f4ac9;
    }
  }

  p {
    color: #c4c4c4;
    text-align: center;
    margin-bottom: 3rem;
    font-size: 1.1rem;
  }

  .swiper {
    padding: 2rem 1rem;
  }

  .swiper-pagination-bullet {
    background: #9f4ac9;
    width: 12px;
    height: 12px;
  }

  .swiper-button-next,
  .swiper-button-prev {
    color: #9f4ac9;
    &:after {
      font-size: 2rem;
    }
  }

  @media (max-width: 768px) {
    padding: 3rem 0.5rem;

    h1 {
      font-size: 2rem;
    }

    p {
      font-size: 1rem;
      margin-bottom: 2rem;
    }

    .swiper {
      padding: 1.5rem 0.5rem;
    }

    .swiper-button-next,
    .swiper-button-prev {
      &:after {
        font-size: 1.5rem;
      }
    }
  }

  @media (max-width: 480px) {
    padding: 2rem 0.25rem;

    h1 {
      font-size: 1.75rem;
    }

    p {
      font-size: 0.9rem;
      margin-bottom: 1.5rem;
    }

    .swiper {
      padding: 1rem 0.25rem;
    }

    .swiper-button-next,
    .swiper-button-prev {
      &:after {
        font-size: 1.25rem;
      }
    }

    .swiper-pagination-bullet {
      width: 8px;
      height: 8px;
    }
  }
`;

function Blogs() {
  const blogData = [
    {
      title: "The Importance of Data Cleaning in the Analysis Process",
      description: "Data cleaning is a crucial step in the analysis process because it ensures that the data is accurate, complete, and consistent. This process involves identifying and correcting errors, handling missing values, and eliminating any inconsistencies that could lead to misleading results. Without proper data cleaning, analysis can become unreliable and lead to incorrect conclusions. By taking the time to clean the data, you increase the quality and reliability of your analysis, leading to more insightful and actionable outcomes.",
    }
  ];

  return (
    <Container fluid className="project-section">
      <Particle />
      <StyledContainer>
        <h1>My Recent <span>Blogs</span></h1>
        <p>Here are a few articles I've written recently.</p>
        
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={50}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          loop={true}
        >
          {blogData.map((blog, index) => (
            <SwiperSlide key={index}>
              <BlogCard {...blog} />
            </SwiperSlide>
          ))}
        </Swiper>
      </StyledContainer>
    </Container>
  );
}

export default Blogs;

