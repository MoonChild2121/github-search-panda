import { defineRecipe } from '@pandacss/dev'

export const sharedCardRecipe = defineRecipe({
  className: 'shared-card',
  base: {
    display: 'flex',
    backgroundColor: 'surface.overlay',
    borderRadius: 'md',
    borderWidth: '1px',
    borderColor: 'border.primary',
    padding: '4',
    transition: 'all 0.2s ease-in-out',
    cursor: 'pointer',
    _hover: {
      transform: 'translateY(-2px)',
      boxShadow: 'md',
      borderColor: 'border.interactive',
    }
  },
  variants: {
    variant: {
      user: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: '4',
        minH: '80px',
      },
      repository: {
        flexDirection: 'column',
        gap: '3',
        height: '180px',
        overflow: 'hidden',
      }
    },
    size: {
      sm: {
        padding: '3',
        fontSize: 'sm',
      },
      md: {
        padding: '4',
        fontSize: 'md',
      },
      lg: {
        padding: '5',
        fontSize: 'lg',
      }
    }
  },
  defaultVariants: {
    size: 'md',
    variant: 'user'
  }
})

// Sub-components recipes
export const cardAvatarRecipe = defineRecipe({
  className: 'card-avatar',
  base: {
    borderRadius: 'full',
    overflow: 'hidden',
    flexShrink: 0,
  },
  variants: {
    size: {
      sm: { width: '32px', height: '32px' },
      md: { width: '40px', height: '40px' },
      lg: { width: '48px', height: '48px' }
    }
  },
  defaultVariants: {
    size: 'md'
  }
})

export const cardContentRecipe = defineRecipe({
  className: 'card-content',
  base: {
    flex: '1',
    minWidth: '0', // Ensures text truncation works
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden',
  }
})

export const cardTitleRecipe = defineRecipe({
  className: 'card-title',
  base: {
    fontWeight: 'semibold',
    color: 'content.primary',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    marginBottom: '2',
  },
  variants: {
    size: {
      sm: { fontSize: 'sm' },
      md: { fontSize: 'md' },
      lg: { fontSize: 'lg' }
    }
  },
  defaultVariants: {
    size: 'md'
  }
})

export const cardDescriptionRecipe = defineRecipe({
  className: 'card-description',
  base: {
    color: 'content.secondary',
    fontSize: 'sm',
    display: '-webkit-box',
    WebkitLineClamp: '2',
    WebkitBoxOrient: 'vertical',
    overflow: 'hidden',
    margin: '0',
    flex: '1',
  }
})

export const cardMetaRecipe = defineRecipe({
  className: 'card-meta',
  base: {
    display: 'flex',
    alignItems: 'center',
    gap: '3',
    fontSize: 'sm',
    color: 'content.tertiary',
    marginTop: 'auto',
    paddingTop: '3',
    flexShrink: 0,
  }
})

export const cardStarsRecipe = defineRecipe({
  className: 'card-stars',
  base: {
    display: 'flex',
    alignItems: 'center',
    gap: '1',
    color: 'content.secondary',
  }
}) 