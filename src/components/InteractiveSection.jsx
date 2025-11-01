import { Button, Box, Image, Text } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import { AnimatePresence, motion } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./InteractiveSection.css";
import { useActiveImageIndex } from "@/store";
export function Title({ title }) {
  return (
    <Text ml={0.5} color="black" fontSize="24px" fontWeight={700}>
      {title}
    </Text>
  );
}

const InteractiveSection = ({
  title,
  images,
  onSlideChange,
  handleClick,
  ...otherProps
}) => {
  const { activeImg } = useActiveImageIndex();
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    if (!progressCircle.current || !progressContent.current) return;
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
    <Box {...otherProps}>
      <Swiper // The main card swiper
        loop={true}
        pagination={{
          dynamicBullets: true,
          clickable: true,
        }}
        navigation={true}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 45000,
          disableOnInteraction: false,
        }}
        modules={[Pagination, Autoplay, Navigation]}
        className="mySwiper"
        onInit={() => console.log("Swiper initialized")}
        onRealIndexChange={(e) => onSlideChange(e.realIndex)}
        slidesPerView={1}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
      >
        {images.map((item, index) => (
          <SwiperSlide key={index}>
            <Image src={item.imgSrc} rounded="md" />
          </SwiperSlide>
        ))}

        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>

      <AnimatePresence mode="wait">
        <motion.div
          key={title}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: "0.4" }}
        >
          <Box w="full">
            <Title title={title} />
          </Box>
        </motion.div>
      </AnimatePresence>

      {activeImg === 2 ? (
        <Link href="/contacts">
        <Button // The button that leads to contacts
          w="full"
          colorPalette="gray"
          variant="subtle"
          mt={4}
          rounded="md"
          position="relative"
          overflow="hidden"
          bgColor="black"
        >
          Подробнее
        </Button>
      </Link>
      ) : (
        <Link href="/contacts">
        <Button 
          w="full"
          colorPalette="gray"
          variant="subtle"
          mt={4}
          rounded="md"
          position="relative"
          overflow="hidden"
          bgColor="black"
        >
          Записаться на бесплатный урок
        </Button>
      </Link>
      )}

      {/* <Button
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
      </Button> */}
    </Box>
  );
};

export default InteractiveSection;
