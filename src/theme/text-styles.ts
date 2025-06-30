export const textStyles = {
  h1: {
    value: {
      fontSize: '{fontSizes.lg}',
      fontWeight: '700',
      lineHeight: '1.2',
      letterSpacing: '-0.02em',
      color: '{colors.text.primary}'
    }
  },
  body: {
    value: {
      fontSize: '{fontSizes.md}',
      fontWeight: '400',
      lineHeight: '1.5',
      letterSpacing: '-0.01em',
      color: '{colors.text.primary}'
    }
  },
  emptyMessage: {
    value: {
      fontSize: '{fontSizes.md}',
      color: '{colors.content.secondary}',
      textAlign: 'center',
      paddingY: '8'
    }
  }
} as const;
