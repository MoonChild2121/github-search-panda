import { formControl } from '../../../styled-system/recipes';
import type { HTMLInputTypeAttribute } from 'react';

interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  type?: HTMLInputTypeAttribute;
  placeholder?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const Input = ({ 
  type = 'text', 
  placeholder, 
  size = 'md',
  className,
  ...props 
}: InputProps) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={`${formControl({ variant: 'input', size })} ${className || ''}`}
      {...props}
    />
  );
};
