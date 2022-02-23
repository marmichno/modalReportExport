// styled
import {
  StyledInputContainer,
  StyledLabelWrapper,
  StyledInputWrapper,
  StyledInput,
} from '../commonStyled/StyledInputs';
// react-hook-form
import { useFormContext, Controller } from 'react-hook-form';

export const ReportName = () => {
  const { control } = useFormContext();

  return (
    <StyledInputContainer>
      <StyledLabelWrapper>Report Name</StyledLabelWrapper>
      <StyledInputWrapper>
        <Controller
          name="reportName"
          defaultValue=""
          control={control}
          render={({ field }) => (
            <StyledInput {...field} placeholder="Shareablee Report" />
          )}
        />
      </StyledInputWrapper>
    </StyledInputContainer>
  );
};
