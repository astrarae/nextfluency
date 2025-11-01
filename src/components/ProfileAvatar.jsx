/* eslint-disable jsx-a11y/alt-text */
import { Image } from '@chakra-ui/react'
export default function ProfileAvatar({src}) {
  return (
    <Image
      src={src}
      w="100px"
      h="100px"
      rounded="50%"
      position="absolute"
      left={4}
      top="90px"
      border="3px solid green"
    />
  );
}
