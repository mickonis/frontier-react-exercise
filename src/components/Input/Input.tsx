import classNames from 'classnames';
import FieldError from 'components/FieldError/FieldError';
import Label from 'components/Label/Label';
import { Control, Controller } from 'react-hook-form';
import './Input.scss';

interface InputProps {
  content: Frontier.Element;
  control: Control;
  error?: string | null;
}

const Input = ({
  content: {
    id,
    question_text,
    metadata: { placeholder, format, step },
  },
  control,
  error,
}: InputProps) => (
  <div className={classNames('input', { 'input--error': error })}>
    <Label htmlFor={id} text={question_text} />
    <Controller
      control={control}
      name={id}
      render={({ field: { onChange, value } }) => (
        <input
          id={id}
          onChange={e => {
            let newValue = e.target.value;
            if (newValue && format === 'number') {
              return parseFloat(String(newValue));
            }
            onChange(newValue);
          }}
          value={value}
          placeholder={placeholder}
          type={format}
          step={step}
          className="input__field"
        />
      )}
    />
    {error && <FieldError text={error} />}
  </div>
);

export default Input;
