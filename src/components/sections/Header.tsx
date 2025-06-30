import { styled } from '../../../styled-system/jsx';
import { GitHubLogo } from '../common/GitHubLogo';
import { Text } from '../common/Text';

const LogoSection = styled('div', {
  base: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 'component.md',
    marginBottom: 'layout.md'
  }
})

const TextSection = styled('div', {
  base: {
    display: 'flex',
    flexDirection: 'column',
    gap: 'component.xs'
  }
})

export const Header = () => {
  return (
    <LogoSection>
      <GitHubLogo size="lg" />
      <TextSection>
        <Text variant="h1">GitHub Searcher</Text>
        <Text variant="body">Search users or repositories below</Text>
      </TextSection>
    </LogoSection>
  );
};