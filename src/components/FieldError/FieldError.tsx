import './FieldError.scss';

interface FieldErrorProps {
  text: string;
}

const FieldError = ({ text }: FieldErrorProps) => (
  <div className="field-error">{text}</div>
);

export default FieldError;
