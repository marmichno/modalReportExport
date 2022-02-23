// styled
import {
  StyledInputContainer,
  StyledLabelWrapper,
  StyledInputWrapper,
  StyledInput,
} from '../commonStyled/StyledInputs';
// react-hook-form
import { useFormContext, Controller } from 'react-hook-form';

export const EmailTo = () => {
  const { control } = useFormContext();

  return (
    <StyledInputContainer>
      <StyledLabelWrapper>E-mail to</StyledLabelWrapper>
      <StyledInputWrapper>
        <Controller
          name="emailTo"
          defaultValue=""
          control={control}
          render={({ field }) => (
            <StyledInput {...field} placeholder="client@company.com" />
          )}
        />
      </StyledInputWrapper>
    </StyledInputContainer>
  );
};
