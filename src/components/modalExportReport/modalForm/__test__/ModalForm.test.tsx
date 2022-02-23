// axios
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
// jest
import '@testing-library/jest-dom/extend-expect';
// testing library
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
// components
import { ModalForm } from '../ModalForm';
// snapshot
import TestRenderer from 'react-test-renderer';

const mock = new MockAdapter(axios);

test('success message is visible after response 201 from api', async () => {
  render(<ModalForm />);

  const submitButton = screen.getByTestId('submitForm');

  mock.onPost('http://localhost:3000/exportReport').reply(201);

  fireEvent.click(submitButton);

  await waitFor(() => {
    expect(screen.getAllByText('data has been sent')).toBeTruthy();
  });
});

test('error message is visible after error response from api', async () => {
  render(<ModalForm />);

  const submitButton = screen.getByTestId('submitForm');

  mock.onPost('http://localhost:3000/exportReport').reply(404);

  fireEvent.click(submitButton);

  await waitFor(() => {
    expect(
      screen.getByText('Request failed with status code 404')
    ).toBeTruthy();
  });
});

test('on default schedule value no additional label is visible', async () => {
  render(<ModalForm />);

  expect(screen.queryByText('Every')).not.toBeTruthy();
  expect(screen.queryByText('Everyday at')).not.toBeTruthy();
  expect(screen.queryByText('Date')).not.toBeTruthy();
});

test('after selecting daily schedule correct label and inputs are visible', async () => {
  render(<ModalForm />);

  const scheduleDaily = screen.getByTestId('daily');

  fireEvent.click(scheduleDaily);

  expect(screen.getByText('Everyday at')).toBeTruthy();
  expect(screen.getByTestId('everyDayAtInput1')).toBeTruthy();
});

test('after selecting weekly schedule correct label and inputs are visible', async () => {
  render(<ModalForm />);

  const scheduleDaily = screen.getByTestId('weekly');

  fireEvent.click(scheduleDaily);

  expect(screen.getByText('Every')).toBeTruthy();
  expect(screen.getByTestId('everyInput1')).toBeTruthy();
  expect(screen.getByTestId('everyInput2')).toBeTruthy();
});

test('after selecting specific date schedule correct label and inputs are visible', async () => {
  render(<ModalForm />);

  const scheduleDaily = screen.getByTestId('specificDate');

  fireEvent.click(scheduleDaily);

  expect(screen.getByText('Date')).toBeTruthy();
  expect(screen.getByTestId('dateInput1')).toBeTruthy();
  expect(screen.getByTestId('dateInput2')).toBeTruthy();
});

test('matches snapshot', () => {
  const tree = TestRenderer.create(<ModalForm />).toJSON();
  expect(tree).toMatchSnapshot();
});
