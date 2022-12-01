import React from 'react';
import classnames from 'classnames';
import './Card.scss';
import { BaseTypeEnum } from '../../../global/enums/base-type';
import { BaseComponentProps } from '../../../global/types/base-component-props';
import { H2 } from '../../Text/Heading';
import { ThemeModeEnum } from '../../../global/enums/theme-mode';
import { BsXLg } from 'react-icons/bs';
export interface CardPropsType
  extends React.DetailedHTMLProps<
      React.AnchorHTMLAttributes<HTMLDivElement>,
      HTMLDivElement
    >,
    BaseComponentProps {
  cardHeader?: React.ReactNode;
  cardFooter?: React.ReactNode;
  classNameBody?: string;
  minWidth?: number;
  minHeight?: number;
  onClose?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  closeButton?: React.ReactNode;
}

export interface CardHeader
  extends React.DetailedHTMLProps<
      React.AnchorHTMLAttributes<HTMLDivElement>,
      HTMLDivElement
    >,
    BaseComponentProps {}

export const CardFooter: React.FC<CardHeader> = props => {
  const cnHeader = classnames([
    'kk-card-footer-container',
    props?.theme?.toLowerCase(),
    props?.themeMode?.toLowerCase(),
    props?.componentType?.toLowerCase(),
    props?.className,
  ]);
  return (
    <div {...props} className={cnHeader}>
      {props.children}
    </div>
  );
};

export const CardHeader: React.FC<CardHeader> = props => {
  const cnHeader = classnames([
    'kk-card-header-container',
    props?.themeMode?.toLowerCase(),
    props?.theme?.toLowerCase(),
    props?.componentType?.toLowerCase(),
    props?.className,
  ]);

  return (
    <div {...props} className={cnHeader}>
      <H2 className="m-0">{props.children}</H2>
    </div>
  );
};

const Card: React.FC<CardPropsType> = ({
  children,
  className,
  theme,
  themeMode = ThemeModeEnum.light,
  cardHeader,
  cardFooter,
  componentType = BaseTypeEnum.default,
  classNameBody,
  minWidth,
  minHeight,
  closeButton,
  onClose,
  ...props
}) => {
  const cn = classnames([
    'kk-card',
    themeMode.toLowerCase(),
    theme?.toLowerCase(),
    componentType.toLowerCase(),
    className,
  ]);
  const Header =
    typeof cardHeader === 'string' ? (
      <CardHeader
        theme={theme}
        themeMode={themeMode}
        componentType={componentType}
      >
        {cardHeader}
      </CardHeader>
    ) : (
      cardHeader
    );
  const Footer =
    typeof cardFooter === 'string' ? (
      <CardFooter
        theme={theme}
        themeMode={themeMode}
        componentType={componentType}
      >
        {cardFooter}
      </CardFooter>
    ) : (
      cardFooter
    );
  const cnBody = classnames(['kk-card-body-container', classNameBody]);
  const styles = { ...props.style, minWidth, minHeight };
  console.log({ closeButton, onClose, c: closeButton || onClose });

  return (
    <div {...props} style={styles} className={cn}>
      {(closeButton || onClose) && (
        <div className="close-button-container" onClick={onClose}>
          {closeButton ? closeButton : <BsXLg />}
        </div>
      )}
      {Header}
      <div className={cnBody}>{children}</div>
      {Footer}
    </div>
  );
};

export default Card;
