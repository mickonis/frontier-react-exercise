import classNames from 'classnames';
import FieldError from 'components/FieldError/FieldError';
import Label from 'components/Label/Label';
import { Controller } from 'react-hook-form';
import { MultiSelect } from 'react-multi-select-component';
import { Option } from 'react-multi-select-component/dist/types/lib/interfaces';
import { FieldProps } from 'types/form';
import './Select.scss';

const Select = ({
  element: {
    id,
    question_text,
    metadata: { placeholder, options },
  },
  control,
  error,
}: FieldProps) => (
  <div className={classNames('select', { 'select--error': error })}>
    <Label htmlFor={id} text={question_text} />
    <Controller
      control={control}
      name={id}
      render={({ field: { onChange, value } }) => {
        return (
          <MultiSelect
            options={options as Option[]}
            value={(value ?? []) as Option[]}
            onChange={onChange}
            labelledBy="Select"
            overrideStrings={{ selectSomeItems: placeholder ?? ' ' }}
            hasSelectAll={false}
          />
        );
      }}
    />
    {error && <FieldError text={error} />}
  </div>
);

export default Select;
