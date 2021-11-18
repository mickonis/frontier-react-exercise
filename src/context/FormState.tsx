import { Context, createContext, ReactNode, useReducer } from 'react';
import { FormState } from 'types/formstate';
import { FormReducer } from './FormReducer';

const initialState: FormState = {
  totalSteps: 0,
  currentStep: 0,
  formInstructions: null,
  setTotalSteps: () => {},
  setCurrentStep: () => {},
  setFormInstructions: () => {},
};

export const FormContext: Context<FormState> = createContext(initialState);

export const FormProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(FormReducer, initialState);

  const setCurrentStep = (currentStep: number) => {
    dispatch({
      type: 'SET_CURRENT_STEP',
      payload: currentStep,
    });
  };

  const setTotalSteps = (totalSteps: number) => {
    dispatch({
      type: 'SET_TOTAL_STEPS',
      payload: totalSteps,
    });
  };

  const setFormInstructions = (formInstructions: Frontier.Job) => {
    dispatch({
      type: 'SET_FORM_INSTRUCTIONS',
      payload: formInstructions,
    });
  };

  return (
    <FormContext.Provider
      value={{
        totalSteps: state.totalSteps,
        currentStep: state.currentStep,
        formInstructions: state.formInstructions,
        setCurrentStep,
        setTotalSteps,
        setFormInstructions,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};
