import './FieldError.scss';

interface FieldErrorProps {
  text: string;
}

const FieldError = ({ text }: FieldErrorProps) => (
  <div data-testid="field-error" className="field-error">
    {text}
  </div>
);

export default FieldError;
