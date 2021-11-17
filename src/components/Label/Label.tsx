import './Label.scss';

interface LabelProps {
  text: string;
}

const Label = ({ text }: LabelProps) => <div className="label">{text}</div>;

export default Label;
