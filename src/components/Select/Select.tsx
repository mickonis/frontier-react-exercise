import classNames from 'classnames';
import FieldError from 'components/FieldError/FieldError';
import Label from 'components/Label/Label';
import { Control, Controller } from 'react-hook-form';
import { MultiSelect } from 'react-multi-select-component';
import { Option } from 'react-multi-select-component/dist/types/lib/interfaces';
import './Select.scss';

interface SelectProps {
  content: Frontier.Element;
  control: Control;
  error?: string | null;
}

const Select = ({
  content: {
    id,
    question_text,
    metadata: { placeholder, format, step, options },
  },
  control,
  error,
}: SelectProps) => (
  <div className={classNames('select', { 'select--error': error })}>
    <Label htmlFor={id} text={question_text} />
    <Controller
      control={control}
      name={id}
      render={({ field: { onChange, value } }) => {
        console.log('value', value);
        return (
          <>
            <input
              id={id}
              onChange={e => onChange(e.target.value)}
              value={value}
              placeholder={placeholder}
              type={format}
              step={step}
              className="input__field"
            />
            <MultiSelect
              options={options as Option[]}
              value={value}
              onChange={onChange}
              labelledBy="Select"
            />
          </>
        );
      }}
    />
    {error && <FieldError text={error} />}
  </div>
);

export default Select;
