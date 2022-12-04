import React from 'react';
import classnames from 'classnames';
import './Button.scss';
import { BaseTypeEnum } from '../../../global/enums/base-type';
import { BaseComponentProps } from '../../../global/types/base-component-props';

export interface ButtonPropsType
  extends React.DetailedHTMLProps<
      React.ButtonHTMLAttributes<HTMLButtonElement>,
      HTMLButtonElement
    >,
    BaseComponentProps {
  disabled?: boolean;
  color?: string;
  textColor?: string;
}

const Button: React.FC<ButtonPropsType> = ({
  children,
  className,
  disabled,
  componentType = BaseTypeEnum.default,
  theme,
  themeMode,
  color,
  textColor,
  ...props
}) => {
  const cn = classnames([
    'kk-button',
    disabled && 'disabled',
    theme?.toLowerCase(),
    themeMode?.toLowerCase(),
    componentType.toLowerCase(),

    className,
  ]);
  return (
    <span className="kk-button-container">
      <button
        {...props}
        style={{ ...props.style, backgroundColor: color, color: textColor }}
        className={cn}
      >
        {children}
      </button>
    </span>
  );
};

export default Button;
