import { render } from '@testing-library/react';
import { FormContext } from 'context/FormState';
import formInstructions from 'data/form_instructions.json';
import { FormState } from 'types/formstate';
import App from './App';

const formState: FormState = {
  formInstructions: null,
  currentStep: 1,
  totalSteps: 2,
  setCurrentStep: () => {},
  setTotalSteps: () => {},
  setFormInstructions: () => {},
};

describe('App component', () => {
  test('renders phone mockup', () => {
    const { queryByTestId } = render(
      <FormContext.Provider
        value={{
          ...formState,
          formInstructions: formInstructions as Frontier.Job,
        }}
      >
        <App />
      </FormContext.Provider>,
    );
    expect(queryByTestId('phone-mockup')).toBeTruthy();
  });

  test("doesn't render phone mockup", () => {
    const { queryByTestId } = render(
      <FormContext.Provider value={formState}>
        <App />
      </FormContext.Provider>,
    );
    expect(queryByTestId('phone-mockup')).toBeFalsy();
  });
});
