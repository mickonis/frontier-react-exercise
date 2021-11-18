import { ReactNode, SyntheticEvent } from 'react';
import './Button.scss';

interface ButtonProps {
  children: ReactNode;
  onClick: (event: SyntheticEvent) => void;
}

const Button = ({ children, onClick }: ButtonProps) => (
  <button onClick={onClick} className="button">
    {children}
  </button>
);

export default Button;
