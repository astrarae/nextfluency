import { Button, Box, Text, Image } from "@chakra-ui/react";
// import Image from 'next/image'
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import { AnimatePresence, motion } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./InteractiveSection.css";
import { useActiveImageIndex, useTheme } from "@/store";

const InteractiveSection = ({
  theme,
  title,
  description,
  images,
  onSlideChange,
  handleClick,
  ...otherProps
}) => {
  const CourseTitle = () => {
    return (
      <AnimatePresence mode="wait">
        <motion.div
          key={title}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: "0.4" }}
        >
          <Text mt={3} ml={0.5} color="white" fontSize="2rem" fontWeight={700}>
            {title}
          </Text>
        </motion.div>
      </AnimatePresence>
    );
  };

  const CourseDescription = ({ description, ...otherProps }) => {
    return (
      <AnimatePresence mode="wait">
        <motion.div
          key={description}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: "0.4" }}
        >
          <Text
            textAlign="left"
            ml={0.5}
            {...otherProps}
            whiteSpace="wrap"
            color="white"
            fontSize="1rem"
            fontWeight={700}
          >
            {description}
          </Text>
        </motion.div>
      </AnimatePresence>
    );
  };
  const { activeImg } = useActiveImageIndex();

  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    if (!progressCircle.current || !progressContent.current) return;
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
    <Box
      {...otherProps}
      rounded="2xl"
      boxShadow="1px 1px 7px rgba(0, 0, 0, 0.2)"
    >
      <Swiper // The main card swiper
        style={{
          height: "550px",
        }}
        loop={true}
        pagination={{
          dynamicBullets: true,
          clickable: true,
        }}
        navigation={true}
        spaceBetween={30}
        centeredSlides={true}
        modules={[Navigation]}
        className="mySwiper"
        onRealIndexChange={(e) => onSlideChange(e.realIndex)}
        slidesPerView={1}
      >
        {images.map((item, index) => (
          <SwiperSlide style={{ height: "100%" }} key={index}>
            <Box
              h="full"
              w="full"
              bgSize="cover"
              rounded="2xl"
              bgPos="center"
              bgRepeat="no-repeat"
              bgImage={`url(${item.imgSrc})`}
              display="flex"
              flexDir="column"
              alignContent="flex-end"
              justifyContent="flex-end"
            >
              {/* <Image
                width="100%"
                height="100%"
                alt="course-image"
                src={item.imgSrc}
                rounded="2xl"
              /> */}
              <Box
                bg="linear-gradient(to top, #9e9b9bff, transparent 70%)" // semi-transparent white
                backdropFilter="blur(1px)"
                w="full"
                h="fit"
                roundedBottom="2xl"
                display="flex"
                flexDir="column"
                alignItems="flex-start"
                justifyContent="flex-start"
                p={1}
              >
                <CourseTitle />
                <CourseDescription mt={2} description={description} />
                <Box
                  w="full"
                  h="full"
                  mt={2}
                  display="flex"
                  justifyContent="flex-end"
                  p={2}
                  mr={2}
                  alignItems="center"
                >
                  <Link href="/contacts">
                    <Button
                      w="full"
                      colorPalette="gray"
                      variant="subtle"
                      rounded="3xl"
                      position="relative"
                      overflow="hidden"
                      color="white"
                      bgColor="black"
                    >
                      Записаться на бесплатный урок
                    </Button>
                  </Link>
                </Box>
              </Box>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default InteractiveSection;
