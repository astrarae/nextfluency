/* eslint-disable react-hooks/set-state-in-effect */
"use client";
import { Box, Text, Image, Button } from "@chakra-ui/react";
import AnimatedWrapper from "./AnimatedWrapper";
import SearchInput from "@/components/SearchInput";
import { useState, useEffect } from "react";
import Tag from "@/components/Tag";
import TagContainer from "@/components/TagContainer";
import randomColor from "../functions/RandomColor";

export default function Page() {
  const [tags, setTags] = useState([]);
  const [userInputTag, setUserInputTag] = useState("");
  const [confirmation, setConfirmation] = useState(true);
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      const value = e.target.value.trim();
      if (value) {
        console.log("Confirmed", value);
        setUserInputTag((prev) => value);
        e.target.value = "";
      }
    }
  };

  useEffect(() => {
    if (tags.length > 5) {
      setConfirmation((prev) => false);
      alert("Limit is reached!");
    }
  }, [tags]);

  useEffect(() => {
    if (confirmation) {
      setTags((prev) => [...prev, userInputTag]);
    }
  }, [userInputTag]);

  return (
    <Box
      w="100vw"
      h="100vh"
      overflowX="hidden"
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      bgColor="white"
    >
      <AnimatedWrapper>
        <Box
          display="none"
          flexDir="column"
          alignItems="center"
          bg="white"
          w={{ base: "100vw", md: "500px", lg: "600px" }}
          minH="100vh"
          overflowX="hidden"
          p={2}
        >
          <SearchInput handleKeyDown={handleKeyDown}>
            <TagContainer>
              {tags.map((tag) => (
                <Tag key={tag.id} title={tag} bgColor={randomColor(tag)} />
              ))}
            </TagContainer>
          </SearchInput>
        </Box>
      </AnimatedWrapper>
    </Box>
  );
}
