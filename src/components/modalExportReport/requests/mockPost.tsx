import axios, { AxiosError } from 'axios';

import { InputForm } from '../modalForm/ModalForm';

export const mockPost = async (data: InputForm) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  try {
    const response = await axios.post(
      'http://localhost:3000/exportReport',
      JSON.stringify(data),
      config
    );
    return {
      response: response.data,
      success: 'data has been sent',
      error: '',
    };
  } catch (error: any) {
    const errors = error as Error | AxiosError;
    if (!axios.isAxiosError(error)) {
      return {
        response: {},
        success: '',
        error: errors.message,
      };
    }
    return {
      response: {},
      success: '',
      error: errors.message,
    };
  }
};
