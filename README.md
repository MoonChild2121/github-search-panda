src/
  ├── components/         # Reusable UI components
  │   ├── common/        # Shared components like Button, Input, etc.
  │   ├── layout/        # Layout components like Header, Container
  │   └── search/        # Search related components
  ├── features/          # Feature-based modules
  │   └── github/        # GitHub search feature
  │       ├── api/       # API related code
  │       ├── hooks/     # Custom hooks for search
  │       ├── store/     # Redux store slices
  │       └── types/     # TypeScript types
  ├── theme/             # Theme configuration
  │   ├── tokens/        # Design tokens
  │   └── recipes/       # Panda CSS recipes
  ├── utils/             # Utility functions
  └── App.tsx            # Root component