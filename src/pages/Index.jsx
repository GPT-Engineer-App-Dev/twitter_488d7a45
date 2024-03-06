import React from "react";
import { Box, Flex, VStack, IconButton, Text, Input, InputGroup, InputLeftElement, Stack, Avatar, Heading, Button, useColorModeValue, Divider, Spacer } from "@chakra-ui/react";
import { FaTwitter, FaHashtag, FaRegBell, FaRegEnvelope, FaRegBookmark, FaClipboardList, FaUserAlt, FaEllipsisH, FaSearch, FaFeatherAlt } from "react-icons/fa";

const Index = () => {
  const bg = useColorModeValue("gray.50", "gray.800");
  const secondaryText = useColorModeValue("gray.600", "gray.400");

  return (
    <Flex minHeight="100vh" direction={{ base: "column", md: "row" }}>
      {/* Sidebar */}
      <VStack bg={bg} padding={4} width={{ base: "full", md: "250px" }} alignItems="flex-start" spacing={4}>
        <IconButton variant="ghost" aria-label="Open Menu" icon={<FaTwitter fontSize="1.5rem" />} />
        <VStack alignItems="flex-start" spacing={2}>
          <Button leftIcon={<FaHashtag />} justifyContent="flex-start" variant="ghost" width="full">
            Explore
          </Button>
          <Button leftIcon={<FaRegBell />} justifyContent="flex-start" variant="ghost" width="full">
            Notifications
          </Button>
          <Button leftIcon={<FaRegEnvelope />} justifyContent="flex-start" variant="ghost" width="full">
            Messages
          </Button>
          <Button leftIcon={<FaRegBookmark />} justifyContent="flex-start" variant="ghost" width="full">
            Bookmarks
          </Button>
          <Button leftIcon={<FaClipboardList />} justifyContent="flex-start" variant="ghost" width="full">
            Lists
          </Button>
          <Button leftIcon={<FaUserAlt />} justifyContent="flex-start" variant="ghost" width="full">
            Profile
          </Button>
          <Button leftIcon={<FaEllipsisH />} justifyContent="flex-start" variant="ghost" width="full">
            More
          </Button>
        </VStack>
        <Button colorScheme="twitter" leftIcon={<FaFeatherAlt />} width="full">
          Tweet
        </Button>
      </VStack>

      {/* Feed */}
      <VStack flex={1} spacing={0} borderX="1px solid" borderColor={secondaryText} minHeight="100vh">
        <Flex width="full" paddingX={4} paddingY={2} alignItems="center">
          <Heading size="md">Home</Heading>
          <Spacer />
          <IconButton aria-label="Options" icon={<FaEllipsisH />} variant="ghost" />
        </Flex>
        <Divider />
        {/* Tweet Input */}
        <Flex width="full" paddingX={4} paddingY={2} alignItems="center">
          <Avatar size="sm" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx1c2VyJTIwYXZhdGFyfGVufDB8fHx8MTcwOTczMzE2Nnww&ixlib=rb-4.0.3&q=80&w=1080" />
          <InputGroup ml={4}>
            <InputLeftElement pointerEvents="none" children={<FaFeatherAlt color="gray.500" />} />
            <Input variant="filled" placeholder="What's happening?" />
          </InputGroup>
        </Flex>
        {/* Tweets */}
        <Stack width="full" spacing={0} divider={<Divider />}>
          {/* Tweet Item */}
          <Flex padding={4} alignItems="flex-start">
            <Avatar size="md" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwyfHx1c2VyJTIwYXZhdGFyfGVufDB8fHx8MTcwOTczMzE2Nnww&ixlib=rb-4.0.3&q=80&w=1080" />
            <Box ml={4}>
              <Text fontWeight="bold">John Doe</Text>
              <Text fontSize="sm" color={secondaryText}>
                @johndoe
              </Text>
              <Text mt={2}>Just setting up my twttr clone 😉</Text>
            </Box>
          </Flex>
          {/* ... more tweets */}
        </Stack>
      </VStack>

      {/* Profile Card */}
      <Box width={{ base: "full", md: "300px" }} bg={bg} padding={4} borderLeft="1px solid" borderColor={secondaryText}>
        <VStack spacing={4} alignItems="flex-start">
          <Avatar size="xl" src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwzfHx1c2VyJTIwYXZhdGFyfGVufDB8fHx8MTcwOTczMzE2Nnww&ixlib=rb-4.0.3&q=80&w=1080" />
          <Heading size="md">John Doe</Heading>
          <Text>@johndoe</Text>
          <Text color={secondaryText}>Digital Explorer, React Enthusiast. Love to code and build things.</Text>
          <Button width="full" variant="outline" leftIcon={<FaUserAlt />}>
            View Profile
          </Button>
        </VStack>
      </Box>
    </Flex>
  );
};

export default Index;
