import { FormAction, FormState } from 'types/formstate';

export const FormReducer = (
  state: FormState,
  action: FormAction,
): FormState => {
  switch (action.type) {
    case 'SET_CURRENT_STEP':
      return {
        ...state,
        currentStep: action.payload as number,
      };
    case 'SET_TOTAL_STEPS':
      return {
        ...state,
        totalSteps: action.payload as number,
      };
    case 'SET_FORM_INSTRUCTIONS':
      return {
        ...state,
        formInstructions: action.payload as Frontier.Job,
      };
    default:
      return state;
  }
};
