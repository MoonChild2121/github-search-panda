import { defineRecipe } from '@pandacss/dev'

export const formControlRecipe = defineRecipe({
  className: 'form-control',
  base: {
    height: 'md',
    padding: 'component.sm',
    fontSize: 'md',
    backgroundColor: 'surface.base',
    color: 'content.primary',
    border: '1px solid',
    borderColor: 'border.primary',
    borderRadius: 'interactive',
    width: 'full',
    transition: 'all 0.2s ease-in-out',
    _placeholder: { 
      color: 'content.placeholder' 
    },
    _hover: {
      backgroundColor: 'interactive.hover',
      borderColor: 'border.interactive'
    },
    _focus: { 
      outline: 'none',
      borderColor: 'border.focus',
      backgroundColor: 'surface.base',
      boxShadow: '0 0 0 3px rgba(59, 130, 246, 0.1)'
    },
  },
  variants: {
    variant: {
      input: {},
      select: {
        paddingRight: '8',
        cursor: 'pointer',
        appearance: 'none',
        backgroundImage: 'url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' fill=\'none\' viewBox=\'0 0 20 20\'%3E%3Cpath stroke=\'%236b7280\' stroke-linecap=\'round\' stroke-linejoin=\'round\' stroke-width=\'1.5\' d=\'M6 8l4 4 4-4\'/%3E%3C/svg%3E")',
        backgroundPosition: 'right 0.5rem center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '1.5em 1.5em',
      }
    },
    size: {
      sm: {
        height: 'sm',
        padding: 'component.xs',
        fontSize: 'sm'
      },
      md: {
        height: 'md',
        padding: 'component.sm',
        fontSize: 'md'
      },
      lg: {
        height: 'lg',
        padding: 'component.md',
        fontSize: 'lg'
      }
    }
  },
  defaultVariants: {
    variant: 'input',
    size: 'md'
  }
})