import { styled } from '../../../styled-system/jsx';
import type { ReactNode } from 'react';

interface TextProps {
  children: ReactNode;
  variant?: 'h1' | 'body';
  className?: string;
}

const StyledText = styled('p', {
  base: {
    color: 'content.primary'
  },
  variants: {
    variant: {
      h1: {
        textStyle: 'h1'
      },
      body: {
        textStyle: 'body'
      }
    }
  },
  defaultVariants: {
    variant: 'body'
  }
})

export const Text = ({ children, variant = 'body', className }: TextProps) => {
  return (
    <StyledText variant={variant} className={className}>
      {children}
    </StyledText>
  );
};