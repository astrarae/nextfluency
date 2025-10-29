import { Button, Box, Image } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import Link from "next/link";
import "swiper/css";
import "swiper/css/pagination";
import "./InteractiveSection.css";

const InteractiveSection = ({
  title,
  firstSlideImageSrc,
  secondSlideImageSrc,
  onSlideChange,
  handleClick,
  ...otherProps
}) => {
  return (
    <Box {...otherProps}>
      <Swiper // The main card swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
        onSlideChange={(e) => onSlideChange(e.activeIndex)}
        slidesPerView={1}
        spaceBetween={30}
      >
        <SwiperSlide>
          <Image src={firstSlideImageSrc} rounded="md" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={secondSlideImageSrc} rounded="md" />
        </SwiperSlide>
      </Swiper>

      <h1>{title}</h1>

      <Button
        w="full"
        border="1px solid black"
        variant="plain"
        mt={4}
        rounded="md"
        position="relative"
        overflow="hidden"
        color="black"
        onClick={handleClick}
      >
        Подробнее
      </Button>

      <Link href="/contacts">
        <Button // The button that leads to contacts
          w="full"
          colorPalette="gray"
          variant="subtle"
          mt={4}
          rounded="md"
          position="relative"
          overflow="hidden"
        >
          Взять беслатный урок
        </Button>
      </Link>
    </Box>
  );
};

export default InteractiveSection;
