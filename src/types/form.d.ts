import { Control } from 'react-hook-form';

export interface FieldProps {
  element: Frontier.Element;
  control?: Control;
  error?: string | null;
}
