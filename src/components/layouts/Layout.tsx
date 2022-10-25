import { Container } from '@chakra-ui/react';
import { FC } from 'react';

import { Footer } from './Footer'

interface Props {
  children?: React.ReactNode;
}

// TODO: if mobile, getMobileLayout, else getDesktopLayout
export const Layout: FC<Props> = ({ children }) => {
  return (
    <Container
      maxW={{ 
        sm: 'container.sm',
        md: 'container.md', 
        lg: 'container.lg',
        xl: 'container.xl'
      }}
      my={7}
    >
      {children}

      <Footer />
    </Container>
  );
};
