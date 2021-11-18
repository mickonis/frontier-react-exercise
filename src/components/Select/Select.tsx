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
    metadata: { placeholder, options },
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
        return (
          <MultiSelect
            options={options as Option[]}
            value={value ?? ([] as Option[])}
            onChange={onChange}
            labelledBy="Select"
            overrideStrings={{ selectSomeItems: placeholder ?? '' }}
            hasSelectAll={false}
          />
        );
      }}
    />
    {error && <FieldError text={error} />}
  </div>
);

export default Select;
