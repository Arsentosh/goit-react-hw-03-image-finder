import styled from 'styled-components';

export const LoadButton = styled.button`
  display: block;
  margin: auto;
  padding: ${p => p.theme.spasing(2)} ${p => p.theme.spasing(4)};
  background-color: ${p => p.theme.colors.iris};
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  border: 0;
  border-radius: ${p => p.theme.radii.md};
  cursor: pointer;
  font-weight: 500;
  min-width: 180px;
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
  &:hover,
  :focus {
    background-color: ${p => p.theme.colors.GreenYellow};
  }
`;
