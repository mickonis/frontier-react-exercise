import classNames from 'classnames';
import FieldError from 'components/FieldError/FieldError';
import Label from 'components/Label/Label';
import { Controller } from 'react-hook-form';
import { FieldProps } from 'types/form';
import './Textarea.scss';

const Textarea = ({
  element: {
    id,
    question_text,
    metadata: { placeholder },
  },
  control,
  error,
}: FieldProps) => (
  <div className={classNames('textarea', { 'textarea--error': error })}>
    <Label htmlFor={id} text={question_text} />
    <Controller
      control={control}
      name={id}
      render={({ field: { onChange, value } }) => (
        <textarea
          id={id}
          onChange={e => onChange(e.target.value)}
          value={value}
          placeholder={placeholder}
          className="textarea__field"
          rows={5}
        />
      )}
    />
    {error && <FieldError text={error} />}
  </div>
);

export default Textarea;
