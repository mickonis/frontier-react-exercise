import classNames from 'classnames';
import FieldError from 'components/FieldError/FieldError';
import Label from 'components/Label/Label';
import { Controller } from 'react-hook-form';
import { FieldProps } from 'types/form';
import './Input.scss';

const Input = ({
  element: {
    id,
    question_text,
    metadata: { placeholder, format, step },
  },
  control,
  error,
}: FieldProps) => (
  <div className={classNames('input', { 'input--error': error })}>
    <Label htmlFor={id} text={question_text} />
    {control && (
      <Controller
        control={control}
        name={id}
        render={({ field: { onChange, value } }) => (
          <input
            id={id}
            onChange={e => {
              let newValue: number | string = e.target.value;
              if (newValue && format === 'number') {
                newValue = parseFloat(String(newValue));
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
    )}
    {error && <FieldError text={error} />}
  </div>
);

export default Input;
