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

export const Schedule = () => {
  const { control } = useFormContext();

  return (
    <StyledInputContainer>
      <StyledLabelWrapper>Schedule</StyledLabelWrapper>
      <StyledInputWrapper>
        <Controller
          name="schedule"
          defaultValue=""
          control={control}
          render={({ field }) => (
            <>
              <StyledCheckboxContainer>
                <StyledCheckbox
                  {...field}
                  value="noRepeat"
                  type="radio"
                  name="schedule"
                  defaultChecked
                  data-testid="noRepeat"
                />
                <StyledLabel htmlFor="schedule">No repeat</StyledLabel>
              </StyledCheckboxContainer>
              <StyledCheckboxContainer>
                <StyledCheckbox
                  {...field}
                  value="specificDate"
                  type="radio"
                  name="schedule"
                  data-testid="specificDate"
                />
                <StyledLabel htmlFor="schedule">Specific date</StyledLabel>
              </StyledCheckboxContainer>
              <StyledCheckboxContainer>
                <StyledCheckbox
                  {...field}
                  value="daily"
                  type="radio"
                  name="schedule"
                  data-testid="daily"
                />
                <StyledLabel htmlFor="schedule">Daily</StyledLabel>
              </StyledCheckboxContainer>
              <StyledCheckboxContainer>
                <StyledCheckbox
                  {...field}
                  value="weekly"
                  type="radio"
                  name="schedule"
                  data-testid="weekly"
                />
                <StyledLabel htmlFor="schedule">Weekly</StyledLabel>
              </StyledCheckboxContainer>
            </>
          )}
        />
      </StyledInputWrapper>
    </StyledInputContainer>
  );
};
