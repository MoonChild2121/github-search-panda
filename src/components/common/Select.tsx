import { formControl } from '../../../styled-system/recipes';
import { css } from '../../../styled-system/css';

interface Option {
  value: string;
  label: string;
}

interface SelectProps extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, 'size'> {
  options: Option[];
  placeholder?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const Select = ({ 
  options, 
  placeholder, 
  size = 'md',
  className,
  ...props 
}: SelectProps) => {
  return (
    <select
      className={`${formControl({ variant: 'select', size })} ${className || ''}`}
      {...props}
    >
      {placeholder && (
        <option value="" disabled>
          {placeholder}
        </option>
      )}
      {options.map((option) => (
        <option 
          key={option.value} 
          value={option.value}
          className={css({
            backgroundColor: 'surface.base',
            color: 'content.primary',
            padding: 'component.xs'
          })}
        >
          {option.label}
        </option>
      ))}
    </select>
  );
};
