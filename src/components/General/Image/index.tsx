import React, { CSSProperties } from 'react';
import classnames from 'classnames';
import './Image.scss';
import { BaseTypeEnum } from '../../../global/enums/base-type';
import { BaseComponentProps } from '../../../global/types/base-component-props';
import { BsFillImageFill } from 'react-icons/bs';
import { createPreview } from '../Preview';

export interface ImagePropsType
  extends React.DetailedHTMLProps<
      React.ImgHTMLAttributes<HTMLImageElement>,
      HTMLImageElement
    >,
    BaseComponentProps {
  disabledPreview?: boolean;
  width?: number;
  height?: number;
  styleImage?: CSSProperties;
}

const Image: React.FC<ImagePropsType> = ({
  children,
  className,
  disabledPreview,
  componentType = BaseTypeEnum.default,
  theme,
  themeMode,
  width,
  height,
  style,
  styleImage,
  ...props
}) => {
  const cn = classnames([
    'kk-image',
    theme?.toLowerCase(),
    themeMode?.toLowerCase(),
    componentType.toLowerCase(),
    className,
  ]);

  const onOpenPreview = React.useCallback(
    () =>
      createPreview({
        children: (
          <img {...props} style={{ objectFit: 'contain' }} className={cn} />
        ),
      }),
    []
  );

  return (
    <div style={{ ...style, width, height }} className="kk-image-container">
      {!disabledPreview && (
        <div className="kk-front-image" onClick={onOpenPreview}>
          <BsFillImageFill size={32} />
          <span>Preview</span>
        </div>
      )}
      <img {...props} style={styleImage} className={cn} />
    </div>
  );
};

export default Image;
