import styled from 'styled-components';
export const SearchBarHeader = styled.header`
  top: 0;
  left: 0;
  position: sticky;
  z-index: 1100;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 60px;
  margin: auto;
  padding-left: ${p => p.theme.spasing(6)};
  padding-right: ${p => p.theme.spasing(6)};
  background-color: ${p => p.theme.colors.iris};
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;

export const SearchForm = styled.form`
  display: flex;
  align-items: center;
  max-width: 600px;
  border-radius: ${p => p.theme.radii.md};
  overflow: hidden;
`;

export const SearchButton = styled.button`
  display: inline-block;
  width: 60px;
  height: 40px;
  border: none;
  background-color: ${p => p.theme.colors.dairy};
  margin-right: ${p => p.theme.spasing(2)};
  padding-top: ${p => p.theme.spasing(2)};
  cursor: pointer;
  outline: none;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    background-color: ${p => p.theme.colors.GreenYellow};
  }
`;

export const SearchInput = styled.input`
  display: inline-block;
  width: 100%;
  height: 40px;
  font-size: 20px;
  border: none;
  outline: none;
  padding: ${p => p.theme.spasing(2)};
  &::placeholder {
    font-size: 16px;
    padding-left: ${p => p.theme.spasing(2)};
  }
`;
