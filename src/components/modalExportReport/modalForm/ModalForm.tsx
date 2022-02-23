// react-hook-form
import { useForm, SubmitHandler, FormProvider } from 'react-hook-form';
// styled
import {
  StyledFormWrapper,
  StyledFormHeader,
  StyledFormText,
  StyledForm,
  StyledFormButtonsWrapper,
  StyledFormInputsWrapper,
  StyledFormButton,
  StyledError,
  StyledSuccess,
} from './StyledModalForm';
// components
import { ReportName } from './inputs/reportName/ReportName';
import { EmailTo } from './inputs/EmailTo/EmailTo';
import { Format } from './inputs/Format/Format';
import { Schedule } from './inputs/Schedule/Schedule';
import { Date } from './inputs/conditional/date/Date';
import { EverydayAt } from './inputs/conditional/everydayAt/EverydayAt';
import { Every } from './inputs/conditional/every/Every';
// hooks
import { useEffect, useState } from 'react';
// requests
import { mockPost } from '../requests/mockPost';

export interface InputForm {
  reportName: string;
  format: string;
  emailTo: string;
  schedule: string;
  repeat: {
    date: string;
    time: string;
    day: string;
  };
}

const initialPostState = {
  response: {},
  error: '',
  success: '',
};

export const ModalForm = () => {
  const methods = useForm<InputForm>({
    defaultValues: {
      reportName: '',
      format: 'excel',
      emailTo: '',
      schedule: 'noRepeat',
    },
  });
  const schedule = methods.watch('schedule');
  const [apiResponse, setApiResponse] = useState(initialPostState);

  const formSubmitHandler: SubmitHandler<InputForm> = async (data) => {
    const response = await mockPost(data);
    setApiResponse(response);
  };

  useEffect(() => {
    switch (schedule) {
      case 'noRepeat':
        methods.unregister(['repeat.date', 'repeat.day', 'repeat.time']);
        break;
      case 'specificDate':
        methods.unregister('repeat.day');
        break;
      case 'daily':
        methods.unregister(['repeat.day', 'repeat.date']);
        break;
      case 'weekly':
        methods.unregister('repeat.date');
        break;
    }
  }, [schedule, methods]);

  return (
    <StyledFormWrapper>
      <StyledFormHeader>
        <StyledFormText>Export Report</StyledFormText>
      </StyledFormHeader>

      <FormProvider {...methods}>
        <StyledForm
          onSubmit={methods.handleSubmit(formSubmitHandler)}
          noValidate
          autoComplete="off"
        >
          <StyledFormInputsWrapper>
            <ReportName />
            <Format />
            <EmailTo />
            <Schedule />
            {schedule === 'noRepeat' && null}
            {schedule === 'specificDate' && <Date />}
            {schedule === 'daily' && <EverydayAt />}
            {schedule === 'weekly' && <Every />}
          </StyledFormInputsWrapper>
          <StyledFormButtonsWrapper>
            {apiResponse.error && (
              <StyledError>{apiResponse.error}</StyledError>
            )}
            {apiResponse.success && (
              <StyledSuccess>{apiResponse.success}</StyledSuccess>
            )}
            <StyledFormButton>Cancel</StyledFormButton>
            <StyledFormButton data-testid="submitForm">OK</StyledFormButton>
          </StyledFormButtonsWrapper>
        </StyledForm>
      </FormProvider>
    </StyledFormWrapper>
  );
};
