import { useState } from "react";
import CodeEditor from '../components/CodeEditor';
import { Box, Button, Container, Flex, Heading, HStack, IconButton, Image, Stack, Text, VStack, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, FormControl, FormLabel, Input } from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Index = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", course: "" });

  const openModal = (course) => {
    setFormData({ ...formData, course });
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleEnroll = () => {
    // Handle enrollment logic here (e.g., send data to the server)
    console.log("Enrolled:", formData);
    closeModal();
  };

  return (
    <Container maxW="container.xl" p={0}>
      {/* Navigation Bar */}
      <Flex as="nav" bg="blue.800" color="white" p={4} justifyContent="space-between" alignItems="center">
        <Heading size="md">CodeLearn</Heading>
        <HStack spacing={8}>
          <Button variant="link" colorScheme="whiteAlpha">Home</Button>
          <Button variant="link" colorScheme="whiteAlpha">Courses</Button>
          <Button variant="link" colorScheme="whiteAlpha">About</Button>
          <Button variant="link" colorScheme="whiteAlpha">Contact</Button>
        </HStack>
      </Flex>

      {/* Hero Section */}
      <Flex
        as="section"
        height="70vh"
        alignItems="center"
        justifyContent="center"
        bgImage="url('/images/hero-bg.jpg')"
        bgSize="cover"
        bgPosition="center"
        color="white"
        textAlign="center"
        p={4}
      >
        <VStack spacing={4}>
          <Heading size="2xl">Learn to Code, Anytime, Anywhere</Heading>
          <Text fontSize="xl">Join our community and start your coding journey today!</Text>
          <Button colorScheme="teal" size="lg">Get Started</Button>
        </VStack>
      </Flex>

      {/* Featured Courses */}
      <Box as="section" p={8} bg="gray.100">
        <Heading size="lg" mb={6} textAlign="center">Featured Courses</Heading>
        <Flex wrap="wrap" justifyContent="center" spacing={8}>
          <Box bg="white" p={6} m={4} borderRadius="md" boxShadow="md" maxW="sm">
            <Image src="/images/course1.jpg" alt="Course 1" borderRadius="md" mb={4} />
            <Heading size="md" mb={2}>Introduction to Python</Heading>
            <Text mb={4}>Learn the basics of Python programming.</Text>
            <Button colorScheme="teal" onClick={() => openModal("Introduction to Python")}>Enroll Now</Button>
          </Box>
          <Box bg="white" p={6} m={4} borderRadius="md" boxShadow="md" maxW="sm">
            <Image src="/images/course2.jpg" alt="Course 2" borderRadius="md" mb={4} />
            <Heading size="md" mb={2}>Web Development Bootcamp</Heading>
            <Text mb={4}>Become a full-stack web developer.</Text>
            <Button colorScheme="teal" onClick={() => openModal("Web Development Bootcamp")}>Enroll Now</Button>
          </Box>
          <Box bg="white" p={6} m={4} borderRadius="md" boxShadow="md" maxW="sm">
            <Image src="/images/course3.jpg" alt="Course 3" borderRadius="md" mb={4} />
            <Heading size="md" mb={2}>Data Science with R</Heading>
            <Text mb={4}>Master data analysis and visualization.</Text>
            <Button colorScheme="teal" onClick={() => openModal("Data Science with R")}>Enroll Now</Button>
          </Box>
        </Flex>
      </Box>

      {/* Code Editor Section */}
      <Box as="section" p={8}>
        <Heading size="lg" mb={6} textAlign="center">Code Editor</Heading>
        <CodeEditor />
      </Box>

      {/* Testimonials */}
      <Box as="section" p={8}>
        <Heading size="lg" mb={6} textAlign="center">What Our Students Say</Heading>
        <Flex wrap="wrap" justifyContent="center" spacing={8}>
          <Box bg="gray.50" p={6} m={4} borderRadius="md" boxShadow="md" maxW="sm">
            <Text mb={4}>"This platform has transformed my career. The courses are top-notch!"</Text>
            <Text fontWeight="bold">- Jane Doe</Text>
          </Box>
          <Box bg="gray.50" p={6} m={4} borderRadius="md" boxShadow="md" maxW="sm">
            <Text mb={4}>"I love the flexibility and the quality of the content."</Text>
            <Text fontWeight="bold">- John Smith</Text>
          </Box>
          <Box bg="gray.50" p={6} m={4} borderRadius="md" boxShadow="md" maxW="sm">
            <Text mb={4}>"The community and support are amazing. Highly recommend!"</Text>
            <Text fontWeight="bold">- Sarah Lee</Text>
          </Box>
        </Flex>
      </Box>

      {/* Footer */}
      <Box as="footer" bg="blue.800" color="white" p={4}>
        <Flex justifyContent="space-between" alignItems="center" wrap="wrap">
          <Text>&copy; 2023 CodeLearn. All rights reserved.</Text>
          <HStack spacing={4}>
            <IconButton as="a" href="#" aria-label="Facebook" icon={<FaFacebook />} />
            <IconButton as="a" href="#" aria-label="Twitter" icon={<FaTwitter />} />
            <IconButton as="a" href="#" aria-label="Instagram" icon={<FaInstagram />} />
          </HStack>
        </Flex>
      </Box>

      {/* Enrollment Modal */}
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Enroll in {formData.course}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl id="name" mb={4}>
              <FormLabel>Name</FormLabel>
              <Input type="text" name="name" value={formData.name} onChange={handleInputChange} />
            </FormControl>
            <FormControl id="email" mb={4}>
              <FormLabel>Email</FormLabel>
              <Input type="email" name="email" value={formData.email} onChange={handleInputChange} />
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={handleEnroll}>Enroll</Button>
            <Button variant="ghost" onClick={closeModal}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Container>
  );
};

export default Index;