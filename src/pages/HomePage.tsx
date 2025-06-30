import { styled } from '../../styled-system/jsx';
import { Layout } from '../components/sections/Layout';
import { ThemeToggle } from '../components/common/ThemeToggle';

const PageWrapper = styled('div', {
  base: {
    top: '5',
    minHeight: '100vh',
    width: 'full',
    backgroundColor: 'surface.base',
    color: 'content.primary',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative'
  }
})

const ToggleWrapper = styled('div', {
  base: {
    position: 'fixed',
    top: 'layout.sm',
    right: 'layout.sm',
    zIndex: 10,
  }
})

export const HomePage = () => {
  return (
    <PageWrapper>
      <ToggleWrapper>
        <ThemeToggle />
      </ToggleWrapper>
      <Layout />
    </PageWrapper>
  );
};