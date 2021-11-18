import classNames from 'classnames';
import { ReactNode, SyntheticEvent } from 'react';
import './Button.scss';

interface ButtonProps {
  children: ReactNode;
  disabled?: boolean;
  secondary?: boolean;
  onClick: (event: SyntheticEvent) => void;
}

const Button = ({ children, disabled, secondary, onClick }: ButtonProps) => (
  <button
    onClick={onClick}
    className={classNames('button', {
      'button--disabled': disabled,
      'button--secondary': secondary,
    })}
  >
    {children}
  </button>
);

export default Button;
