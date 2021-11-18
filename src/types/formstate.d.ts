export interface FormState {
  totalSteps: number;
  currentStep: number;
  formInstructions: Frontier.Job | null;
  setTotalSteps: (totalSteps: number) => void;
  setCurrentStep: (currentStep: number) => void;
  setFormInstructions: (formInstructions: Frontier.Job) => void;
}

export interface FormAction {
  type: FormActionType;
  payload: number | Frontier.Job;
}

export type FormActionType =
  | 'SET_CURRENT_STEP'
  | 'SET_TOTAL_STEPS'
  | 'SET_FORM_INSTRUCTIONS';
