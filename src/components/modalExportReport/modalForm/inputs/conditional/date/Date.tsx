// styled
import {
  StyledInputContainer,
  StyledLabelWrapper,
  StyledInputWrapper,
  StyledInput,
  StyledTextSpacing,
} from '../../commonStyled/StyledInputs';
// react-hook-form
import { useFormContext } from 'react-hook-form';

export const Date = () => {
  const { register } = useFormContext();

  return (
    <StyledInputContainer>
      <StyledLabelWrapper>Date</StyledLabelWrapper>
      <StyledInputWrapper>
        <StyledInput
          type="date"
          width="30%"
          {...register('repeat.date')}
          placeholder="2019/05/22"
          data-testid="dateInput1"
        />
        <StyledTextSpacing>
          <p>at</p>
        </StyledTextSpacing>
        <StyledInput
          type="time"
          {...register('repeat.time')}
          width="30%"
          placeholder="13:00"
          data-testid="dateInput2"
        />
      </StyledInputWrapper>
    </StyledInputContainer>
  );
};
