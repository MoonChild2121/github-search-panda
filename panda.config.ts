import { defineConfig } from "@pandacss/dev";
import { textStyles } from './src/theme/text-styles';
import { buttonRecipe } from './src/theme/recipes/button';
import { 
  sharedCardRecipe,
  cardAvatarRecipe,
  cardContentRecipe,
  cardTitleRecipe,
  cardDescriptionRecipe,
  cardMetaRecipe,
  cardStarsRecipe
} from './src/theme/recipes/shared-card';
import { formControlRecipe } from './src/theme/recipes/form-control';

export default defineConfig({
  preflight: true,
  include: ["./src/**/*.{js,jsx,ts,tsx}"],
  exclude: [],
  
  conditions: {
    light: '.light &',
    dark: '.dark &',
  },

  globalCss: {
    'html, body': {
      margin: 0,
      backgroundColor: 'surface.base',
      color: 'content.primary',
      transition: 'background-color 0.2s ease-in-out, color 0.2s ease-in-out',
    },
    '#root': {
      backgroundColor: 'surface.base',
      color: 'content.primary',
      minHeight: '100vh',
    }
  },

  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        }
      },
      recipes: {
        button: buttonRecipe,
        sharedCard: sharedCardRecipe,
        cardAvatar: cardAvatarRecipe,
        cardContent: cardContentRecipe,
        cardTitle: cardTitleRecipe,
        cardDescription: cardDescriptionRecipe,
        cardMeta: cardMetaRecipe,
        cardStars: cardStarsRecipe,
        formControl: formControlRecipe
      }
    },
    tokens: {
      colors: {
        white: { value: '#ffffff' },
        black: { value: '#000000' },
        gray: {
          25: { value: '#fcfcfd' },
          50: { value: '#f8f9fa' },
          100: { value: '#edf2f7' },
          200: { value: '#e2e8f0' },
          300: { value: '#cbd5e0' },
          400: { value: '#a0aec0' },
          500: { value: '#718096' },
          600: { value: '#4a5568' },
          700: { value: '#2d3748' },
          800: { value: '#1a202c' },
          900: { value: '#171923' },
          950: { value: '#0d1015' }
        },
      },
      sizes: {
        sm: { value: '36px' },
        md: { value: '48px' },
        lg: { value: '56px' },
        xl: { value: '64px' },
        container: {
          sm: { value: '640px' },
          md: { value: '768px' },
          lg: { value: '1024px' },
          xl: { value: '1280px' }
        }
      },
      spacing: {
        0: { value: '0rem' },
        0.5: { value: '0.125rem' },
        1: { value: '0.25rem' },
        2: { value: '0.5rem' },
        3: { value: '0.75rem' },
        4: { value: '1rem' },
        5: { value: '1.25rem' },
        6: { value: '1.5rem' },
        8: { value: '2rem' },
        10: { value: '2.5rem' },
        12: { value: '3rem' },
        16: { value: '4rem' },
        20: { value: '5rem' },
        24: { value: '6rem' }
      },
      fontSizes: {
        xs: { value: '0.75rem' },
        sm: { value: '0.875rem' },
        md: { value: '1rem' },
        lg: { value: '1.125rem' },
        xl: { value: '1.25rem' },
        '2xl': { value: '1.5rem' },
        '3xl': { value: '1.875rem' }
      },
      radii: {
        none: { value: '0' },
        sm: { value: '4px' },
        md: { value: '6px' },
        lg: { value: '8px' },
        xl: { value: '12px' },
        full: { value: '9999px' }
      },
      shadows: {
        sm: { value: '0 1px 2px 0 rgb(0 0 0 / 0.05)' },
        md: { value: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)' },
        lg: { value: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)' },
        xl: { value: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)' }
      }
    },
    semanticTokens: {
      colors: {
        // Surface colors - for backgrounds and containers
        surface: {
          base: {
            value: {
              base: '{colors.white}',
              _dark: '{colors.gray.900}'
            }
          },
          elevated: {
            value: {
              base: '{colors.white}',
              _dark: '{colors.gray.800}'
            }
          },
          subtle: {
            value: {
              base: '{colors.gray.200}',
              _dark: '{colors.gray.950}'
            }
          },
          overlay: {
            value: {
              base: '{colors.gray.50}',
              _dark: '{colors.gray.800}'
            }
          }
        },
        
        // Content colors - for text and icons
        content: {
          primary: {
            value: {
              base: '{colors.gray.900}',
              _dark: '{colors.gray.50}'
            }
          },
          secondary: {
            value: {
              base: '{colors.gray.600}',
              _dark: '{colors.gray.300}'
            }
          },
          tertiary: {
            value: {
              base: '{colors.gray.500}',
              _dark: '{colors.gray.400}'
            }
          },
          placeholder: {
            value: {
              base: '{colors.gray.400}',
              _dark: '{colors.gray.500}'
            }
          },
          inverse: {
            value: {
              base: '{colors.white}',
              _dark: '{colors.gray.900}'
            }
          }
        },
        
        // Border colors - for dividers and outlines
        border: {
          primary: {
            value: {
              base: '{colors.gray.200}',
              _dark: '{colors.gray.700}'
            }
          },
          secondary: {
            value: {
              base: '{colors.gray.100}',
              _dark: '{colors.gray.800}'
            }
          },
          interactive: {
            value: {
              base: '{colors.gray.300}',
              _dark: '{colors.gray.600}'
            }
          },
          focus: {
            value: {
              base: '{colors.gray.900}',
              _dark: '{colors.gray.50}'
            }
          }
        },
        
        // Interactive colors - for buttons and interactive elements
        interactive: {
          primary: {
            value: {
              base: '{colors.gray.900}',
              _dark: '{colors.gray.50}'
            }
          },
          secondary: {
            value: {
              base: '{colors.gray.100}',
              _dark: '{colors.gray.800}'
            }
          },
          hover: {
            value: {
              base: '{colors.gray.50}',
              _dark: '{colors.gray.700}'
            }
          },
          active: {
            value: {
              base: '{colors.gray.200}',
              _dark: '{colors.gray.600}'
            }
          }
        },
        
      },
      
      // Component-specific semantic tokens
      shadows: {
        card: {
          value: {
            base: '{shadows.sm}',
            _dark: '{shadows.md}'
          }
        },
        dropdown: {
          value: {
            base: '{shadows.lg}',
            _dark: '{shadows.xl}'
          }
        },
        modal: {
          value: {
            base: '{shadows.xl}',
            _dark: '{shadows.xl}'
          }
        }
      },
      
      radii: {
        component: {
          value: '{radii.md}'
        },
        interactive: {
          value: '{radii.sm}'
        },
        container: {
          value: '{radii.lg}'
        }
      },
      
      spacing: {
        component: {
          xs: { value: '{spacing.2}' },
          sm: { value: '{spacing.3}' },
          md: { value: '{spacing.4}' },
          lg: { value: '{spacing.6}' },
          xl: { value: '{spacing.8}' }
        },
        layout: {
          xs: { value: '{spacing.4}' },
          sm: { value: '{spacing.6}' },
          md: { value: '{spacing.8}' },
          lg: { value: '{spacing.12}' },
          xl: { value: '{spacing.16}' }
        }
      }
    },
    textStyles
  },

  outdir: "styled-system",
  jsxFramework: 'react',
});