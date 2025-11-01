/* eslint-disable jsx-a11y/alt-text */
import { Image } from "@chakra-ui/react";

export default function ProfileBackgroundImage({ src }) {
  return (
    <Image
      src={src}
      roundedStartStart="md"
      roundedStartEnd="md"
      w="full"
      h="140px"
    />
  );
}
