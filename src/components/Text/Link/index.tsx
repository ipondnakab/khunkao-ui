import React from 'react';
import classnames from 'classnames';
import './Link.scss';
import { BaseTypeEnum } from '../../../global/enums/base-type';
import { BaseComponentProps } from '../../../global/types/base-component-props';

export interface LinkPropsType
  extends React.DetailedHTMLProps<
      React.AnchorHTMLAttributes<HTMLAnchorElement>,
      HTMLAnchorElement
    >,
    BaseComponentProps {
  disabled?: boolean;
}

const Link: React.FC<LinkPropsType> = ({
  children,
  className,
  disabled,
  componentType = BaseTypeEnum.default,
  ...props
}) => {
  const cn = classnames([
    'kk-link',
    disabled && 'disabled',
    componentType.toLowerCase(),
    className,
  ]);
  return (
    <a {...props} className={cn}>
      {children}
    </a>
  );
};

export default Link;
