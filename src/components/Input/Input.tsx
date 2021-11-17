import Label from 'components/Label/Label';
import { Control, Controller } from 'react-hook-form';
import './Input.scss';

interface Form {
  content: Frontier.Element;
  control: Control;
}

const Input = ({ content, control }: Form) => (
  <div className="input">
    <Label htmlFor={content.id} text={content.question_text} />
    <Controller
      control={control}
      name={content.id}
      render={({ field: { onChange, value } }) => (
        <input
          id={content.id}
          onChange={e => onChange(e.target.value)}
          value={value}
          type={content.metadata.format}
          className="input__field"
        />
      )}
    />
  </div>
);

export default Input;
