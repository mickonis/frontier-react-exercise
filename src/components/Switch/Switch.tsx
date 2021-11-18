import classNames from 'classnames';
import FieldError from 'components/FieldError/FieldError';
import Label from 'components/Label/Label';
import { Control, Controller } from 'react-hook-form';
import './Switch.scss';

interface SwitchProps {
  content: Frontier.Element;
  control: Control;
  error?: string | null;
}

const Switch = ({
  content: {
    id,
    question_text,
    metadata: { placeholder, format, step },
  },
  control,
  error,
}: SwitchProps) => (
  <div className={classNames('switch', { 'switch--error': error })}>
    <Label text={question_text} />
    <Controller
      control={control}
      name={id}
      render={({ field: { onChange, value } }) => (
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
          <label htmlFor="yes" className="switch__label">
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
          <label htmlFor="no" className="switch__label">
            No
          </label>
        </div>
      )}
    />
    {error && <FieldError text={error} />}
  </div>
);

export default Switch;
