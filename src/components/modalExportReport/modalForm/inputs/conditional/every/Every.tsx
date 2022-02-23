// styled
import {
  StyledInputContainer,
  StyledLabelWrapper,
  StyledInputWrapper,
  StyledInput,
  StyledTextSpacing,
  StyledSelect,
} from '../../commonStyled/StyledInputs';
// react-hook-form
import { useFormContext } from 'react-hook-form';

export const Every = () => {
  const { register } = useFormContext();
  const days = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
  ];

  return (
    <StyledInputContainer>
      <StyledLabelWrapper>Every</StyledLabelWrapper>
      <StyledInputWrapper>
        <StyledSelect {...register('repeat.day')} data-testid="everyInput1">
          {days.map((val) => {
            return (
              <option key={val} value={val}>
                {val}
              </option>
            );
          })}
        </StyledSelect>
        <StyledTextSpacing>
          <p>at</p>
        </StyledTextSpacing>
        <StyledInput
          {...register('repeat.time')}
          type="time"
          width="30%"
          placeholder="13:00"
          data-testid="everyInput2"
        />
      </StyledInputWrapper>
    </StyledInputContainer>
  );
};
