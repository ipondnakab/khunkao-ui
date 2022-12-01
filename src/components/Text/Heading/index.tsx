import React from 'react';
import classnames from 'classnames';
import './Heading.scss';
import { BaseTypeEnum } from '../../../global/enums/base-type';
import { BaseComponentProps } from '../../../global/types/base-component-props';
import { ThemeModeEnum } from '../../../global/enums/theme-mode';

export interface HeadingPropsType
  extends React.DetailedHTMLProps<
      React.AnchorHTMLAttributes<HTMLHeadingElement>,
      HTMLHeadingElement
    >,
    BaseComponentProps {
  level: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

const Heading: React.FC<HeadingPropsType> = ({
  className,
  componentType = BaseTypeEnum.default,
  themeMode = ThemeModeEnum.light,
  level,
  ...props
}) => {
  const cn = classnames([
    'kk-Heading',
    componentType.toLowerCase(),
    themeMode.toLowerCase(),
    className,
  ]);
  if (level === 'h1') return <h1 {...props} className={cn} />;
  else if (level === 'h2') return <h2 {...props} className={cn} />;
  else if (level === 'h3') return <h3 {...props} className={cn} />;
  else if (level === 'h4') return <h4 {...props} className={cn} />;
  else if (level === 'h5') return <h5 {...props} className={cn} />;
  else if (level === 'h6') return <h6 {...props} className={cn} />;
  else return <h1 {...props} className={cn} />;
};

const H1: React.FC<Omit<HeadingPropsType, 'level'>> = props => (
  <Heading {...props} level="h1" />
);
const H2: React.FC<Omit<HeadingPropsType, 'level'>> = props => (
  <Heading {...props} level="h2" />
);
const H3: React.FC<Omit<HeadingPropsType, 'level'>> = props => (
  <Heading {...props} level="h3" />
);
const H4: React.FC<Omit<HeadingPropsType, 'level'>> = props => (
  <Heading {...props} level="h4" />
);
const H5: React.FC<Omit<HeadingPropsType, 'level'>> = props => (
  <Heading {...props} level="h5" />
);
const H6: React.FC<Omit<HeadingPropsType, 'level'>> = props => (
  <Heading {...props} level="h6" />
);

export { H1, H2, H3, H4, H5, H6 };

export default Heading;
