import styled from 'styled-components';

export const StyledInputContainer = styled.div`
  width: 100%;
  height: 20%;
  display: flex;
  padding: 0.5em 1.5em 0.5em 1.5em;
`;

export const StyledLabelWrapper = styled.div`
  width: 18%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export const StyledInputWrapper = styled.div`
  width: 82%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const StyledInput = styled.input`
  height: 100%;
  width: ${(props) => (props.width ? props.width : '100%')};
  padding: 1em;
  background-color: transparent;
  border: 1px solid rgb(193, 193, 193);
`;

export const StyledCheckbox = styled.input`
  accent-color: black;
`;

export const StyledLabel = styled.label`
  font-size: 1em;
  padding-left: 0.5em;
`;

export const StyledCheckboxContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding-right: 1.5em;
`;

export const StyledSelect = styled.select`
  height: 100%;
  width: 30%;
  padding: 1em;
  background-color: transparent;
  border: 1px solid rgb(193, 193, 193);
`;
export const StyledTextSpacing = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding-left: 2em;
  padding-right: 2em;
  font-size: 14px;
`;
