import Label from 'components/Label/Label';
import { Control, Controller, FieldErrors } from 'react-hook-form';
import './Input.scss';

interface Form {
  content: Frontier.Element;
  control: Control;
  errors: FieldErrors;
}

const Input = ({
  content: {
    id,
    question_text,
    metadata: { placeholder, format, step },
  },
  control,
}: Form) => (
  <div className="input">
    <Label htmlFor={id} text={question_text} />
    <Controller
      control={control}
      name={id}
      render={({ field: { onChange, value } }) => (
        <input
          id={id}
          onChange={e => onChange(e.target.value)}
          value={value}
          placeholder={placeholder}
          type={format}
          step={step}
          className="input__field"
        />
      )}
    />
  </div>
);

export default Input;
