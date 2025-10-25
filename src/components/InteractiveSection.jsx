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
          Записаться на курс
        </Button>
      </Link>
    </Box>
  );
};

export default InteractiveSection;
