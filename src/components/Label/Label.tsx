import './Label.scss';

interface LabelProps {
  text: string;
  htmlFor?: string;
}

const Label = ({ text, htmlFor }: LabelProps) => (
  <label htmlFor={htmlFor} className="label">
    {text}
  </label>
);

export default Label;
