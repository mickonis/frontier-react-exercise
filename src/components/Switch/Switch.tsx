import classNames from 'classnames';
import FieldError from 'components/FieldError/FieldError';
import Label from 'components/Label/Label';
import { Controller } from 'react-hook-form';
import { FieldProps } from 'types/form';
import './Switch.scss';

const Switch = ({
  element: {
    id,
    question_text,
    metadata: { placeholder },
  },
  control,
  error,
}: FieldProps) => (
  <div className={classNames('switch', { 'switch--error': error })}>
    <Label text={question_text} />
    <Controller
      control={control}
      name={id}
      render={({ field: { onChange } }) => (
        <div className="switch__container">
          <input
            name={id}
            id="yes"
            onChange={e => onChange(true)}
            value="yes"
            placeholder={placeholder}
            type="radio"
            className="switch__field"
          />
          <label htmlFor="yes" className="switch__label switch__label--left">
            Yes
          </label>
          <input
            name={id}
            id="no"
            onChange={e => onChange(false)}
            value="no"
            placeholder={placeholder}
            type="radio"
            className="switch__field"
          />
          <label htmlFor="no" className="switch__label switch__label--right">
            No
          </label>
        </div>
      )}
    />
    {error && <FieldError text={error} />}
  </div>
);

export default Switch;
