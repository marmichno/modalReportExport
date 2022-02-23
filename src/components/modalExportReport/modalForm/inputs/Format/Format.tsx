// styled
import {
  StyledInputContainer,
  StyledLabelWrapper,
  StyledInputWrapper,
  StyledCheckboxContainer,
  StyledLabel,
  StyledCheckbox,
} from '../commonStyled/StyledInputs';
// react-hook-form
import { useFormContext, Controller } from 'react-hook-form';

export const Format = () => {
  const { control } = useFormContext();

  return (
    <StyledInputContainer>
      <StyledLabelWrapper>Format</StyledLabelWrapper>
      <StyledInputWrapper>
        <Controller
          name="format"
          defaultValue=""
          control={control}
          render={({ field }) => (
            <>
              <StyledCheckboxContainer>
                <StyledCheckbox
                  defaultChecked
                  {...field}
                  value="excel"
                  type="radio"
                  name="Format"
                />
                <StyledLabel htmlFor="Format">Excel</StyledLabel>
              </StyledCheckboxContainer>
              <StyledCheckboxContainer>
                <StyledCheckbox
                  {...field}
                  value="csv"
                  type="radio"
                  name="Format"
                />
                <StyledLabel htmlFor="Format">CSV</StyledLabel>
              </StyledCheckboxContainer>
            </>
          )}
        />
      </StyledInputWrapper>
    </StyledInputContainer>
  );
};
