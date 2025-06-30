import { styled } from '../../../styled-system/jsx';
import { Header } from './Header';
import { SearchContainer } from '../containers/SearchContainer';

const LayoutWrapper = styled('div', {
  base: {
    marginTop: 'layout.md',
    display: 'flex',
    flexDirection: 'column',
    width: 'full',
    maxWidth: 'container.sm',
  }
})

export const Layout = () => {
  return (
    <LayoutWrapper>
      <Header />
      <SearchContainer />
    </LayoutWrapper>
  );
};