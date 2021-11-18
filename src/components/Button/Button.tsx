import classNames from 'classnames';
import { ReactNode, SyntheticEvent } from 'react';
import './Button.scss';

interface ButtonProps {
  children: ReactNode;
  disabled?: boolean;
  onClick: (event: SyntheticEvent) => void;
}

const Button = ({ children, disabled, onClick }: ButtonProps) => (
  <button
    onClick={onClick}
    className={classNames('button', { 'button--disabled': disabled })}
  >
    {children}
  </button>
);

export default Button;
