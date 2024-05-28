import React, { useState } from 'react';
import { Box, Button, Flex, Textarea, useToast } from '@chakra-ui/react';

const CodeEditor = () => {
  const [code, setCode] = useState('');
  const toast = useToast();

  const handleRun = () => {
    try {
      // eslint-disable-next-line no-eval
      eval(code);
    } catch (error) {
      toast({
        title: 'Error',
        description: error.message,
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    }
  };

  const handleSave = () => {
    localStorage.setItem('savedCode', code);
    toast({
      title: 'Code Saved',
      description: 'Your code has been saved locally.',
      status: 'success',
      duration: 3000,
      isClosable: true,
    });
  };

  const handleClear = () => {
    setCode('');
  };

  return (
    <Box p={4} bg="gray.100" borderRadius="md" boxShadow="md">
      <Textarea
        value={code}
        onChange={(e) => setCode(e.target.value)}
        placeholder="Write your code here..."
        size="md"
        height="300px"
        bg="white"
        fontFamily="monospace"
        mb={4}
      />
      <Flex justifyContent="space-between">
        <Button colorScheme="teal" onClick={handleRun}>Run</Button>
        <Button colorScheme="blue" onClick={handleSave}>Save</Button>
        <Button colorScheme="red" onClick={handleClear}>Clear</Button>
      </Flex>
    </Box>
  );
};

export default CodeEditor;