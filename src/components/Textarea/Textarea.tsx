import classNames from 'classnames';
import FieldError from 'components/FieldError/FieldError';
import Label from 'components/Label/Label';
import { Control, Controller } from 'react-hook-form';
import './Textarea.scss';

interface TextareaProps {
  content: Frontier.Element;
  control: Control;
  error?: string | null;
}

const Textarea = ({
  content: {
    id,
    question_text,
    metadata: { placeholder },
  },
  control,
  error,
}: TextareaProps) => (
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
