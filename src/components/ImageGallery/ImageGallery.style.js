import styled from 'styled-components';

export const ImageGalleryList = styled.ul`
  display: grid;
  max-width: calc(100vw - 48px);
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  grid-gap: ${p => p.theme.spasing(4)};
  list-style: none;
  margin-top: ${p => p.theme.spasing(2)};
  margin-bottom: ${p => p.theme.spasing(2)};
  padding-left: ${p => p.theme.spasing(4)};
  padding-right: ${p => p.theme.spasing(4)};
`;
