import styled from 'styled-components';

export const StyledFormWrapper = styled.div`
  width: 40%;
  height: 50%;
  min-width: 700px;
  min-height: 500px;
  display: flex;
  flex-direction: column;
  border: solid 1px rgba(233, 233, 233, 0.9);
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.6);
`;

export const StyledFormHeader = styled.div`
  width: 100%;
  height: 10%;
  background-color: rgb(242, 242, 242);
  display: flex;
  align-items: center;
  justify-content: left;
  padding: 1em;
`;

export const StyledForm = styled.form`
  width: 100%;
  height: 90%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-direction: column;
`;

export const StyledFormInputsWrapper = styled.div`
  width: 100%;
  height: 80%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  padding-top: 1em;
  padding-bottom: 1em;
`;

export const StyledFormButtonsWrapper = styled.div`
  width: 100%;
  height: 20%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  border-top: solid 3px rgba(119, 119, 119, 0.4);
  padding: 1em;

  & button:first-of-type {
    margin-right: 1em;
    border: solid 2px rgba(233, 233, 233, 0.9);
    color: rgb(164, 164, 164);
    background-color: transparent;
  }
`;

export const StyledFormButton = styled.button`
  background-color: rgb(51, 51, 51);
  padding: 12px 10px 12px 10px;
  width: 8em;
  cursor: pointer;
  border: none;
  color: white;
`;

export const StyledFormText = styled.p`
  font-size: 14px;
`;

export const StyledSuccess = styled.p`
  font-size: 14px;
  color: green;
  padding-right: 1em;
`;

export const StyledError = styled.p`
  font-size: 14px;
  color: red;
  padding-right: 1em;
`;
