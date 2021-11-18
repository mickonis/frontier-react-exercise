import { FormAction, FormState } from 'types/formstate';

export const FormReducer = (
  state: FormState,
  action: FormAction,
): FormState => {
  switch (action.type) {
    case 'SET_CURRENT_STEP':
      return {
        ...state,
        currentStep: action.payload,
      };
    case 'SET_TOTAL_STEPS':
      return {
        ...state,
        totalSteps: action.payload,
      };
    default:
      return state;
  }
};
