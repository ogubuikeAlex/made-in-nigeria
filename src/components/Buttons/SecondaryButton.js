import React from 'react';
import { Button, Link } from '@chakra-ui/react';

const SecondaryButton = ({ text, link }) => {
  return (
    <Button
      display="block"
      margin={10}
      borderRadius={30}
      borderColor="#009E77"
      color={'#009E77'}
      _hover={{ bg: '#009E77', color: '#FFFFFF' }}
      fontWeight={'semibold'}
      w="10.5rem"
      height="3rem"
      href={link}
      variant="outline"
    >
      <Link href={link} _hover={{ textDecoration: 'none' }}>
        {text}
      </Link>
    </Button>
  );
};

export default SecondaryButton;
