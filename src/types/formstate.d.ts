export interface FormState {
  totalSteps: number;
  currentStep: number;
  setTotalSteps: (totalSteps: number) => void;
  setCurrentStep: (currentStep: number) => void;
}

export interface FormAction {
  type: FormActionType;
  payload: number;
}

export type FormActionType = 'SET_CURRENT_STEP' | 'SET_TOTAL_STEPS';
