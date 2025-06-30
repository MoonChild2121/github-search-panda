import { defineRecipe } from '@pandacss/dev'

export const buttonRecipe = defineRecipe({
  className: 'button',
  description: 'A button component using semantic design tokens',
  base: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 'medium',
    borderRadius: 'interactive',
    border: '1px solid',
    borderColor: 'border.interactive',
    cursor: 'pointer',
    transition: 'all 0.2s ease-in-out',
    outline: 'none',
    textDecoration: 'none',
    _focus: {
      ring: '2px solid',
      ringColor: 'border.focus',
      ringOffset: '2px'
    }
  },
  variants: {
    variant: {
      primary: {
        bg: 'interactive.primary',
        color: 'content.inverse',
        border: 'none',
        _hover: {
          opacity: 0.9
        },
        _active: {
          bg: 'interactive.active'
        }
      },
      secondary: {
        bg: 'surface.elevated',
        color: 'content.primary',
        borderColor: 'border.primary',
        _hover: {
          bg: 'interactive.hover'
        },
        _active: {
          bg: 'interactive.active'
        }
      },
      outline: {
        bg: 'transparent',
        color: 'content.primary',
        borderColor: 'border.interactive',
        _hover: {
          bg: 'interactive.hover'
        },
        _active: {
          bg: 'interactive.active'
        }
      },
      toggle: {
        width: 'md',
        height: 'md',
        borderRadius: 'full',
        bg: 'surface.base',
        color: 'content.primary',
        borderColor: 'border.primary',
        padding: 0,
        _hover: {
          bg: 'interactive.hover'
        },
        _active: {
          transform: 'scale(0.95)'
        }
      }
    },
    size: {
      xs: {
        height: 'sm',
        px: 'component.xs',
        fontSize: 'xs'
      },
      sm: {
        height: 'sm',
        px: 'component.sm',
        fontSize: 'sm'
      },
      md: {
        height: 'md',
        px: 'component.md',
        fontSize: 'md'
      },
      lg: {
        height: 'lg',
        px: 'component.lg',
        fontSize: 'lg'
      },
      xl: {
        height: 'xl',
        px: 'component.xl',
        fontSize: 'xl'
      }
    },
    status: {
      default: {},
      success: {
        bg: 'status.success',
        color: 'content.inverse',
        border: 'none',
        _hover: {
          opacity: 0.9
        }
      },
      warning: {
        bg: 'status.warning',
        color: 'content.inverse',
        border: 'none',
        _hover: {
          opacity: 0.9
        }
      },
      error: {
        bg: 'status.error',
        color: 'content.inverse',
        border: 'none',
        _hover: {
          opacity: 0.9
        }
      }
    }
  },
  defaultVariants: {
    variant: 'primary',
    size: 'md',
    status: 'default'
  }
})