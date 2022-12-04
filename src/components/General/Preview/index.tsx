import React from 'react';
import classnames from 'classnames';
import './Preview.scss';
import {
  BsArrowCounterclockwise,
  BsArrowClockwise,
  BsXLg,
  BsZoomIn,
  BsZoomOut,
  BsArrowRepeat,
} from 'react-icons/bs';
import { pushComponentToBody } from '../../../functions/push-component-to-body';

export interface PreviewPropsType
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  onZoomIn?: (event: React.MouseEvent) => void;
  onZoomOut?: (event: React.MouseEvent) => void;
  onRotate?: (event: React.MouseEvent) => void;
  onClose?: (event: React.MouseEvent) => void;
  onReZoom?: (event: React.MouseEvent) => void;
  scale?: number;
  open?: boolean;
  barPosition?: 'top' | 'bottom' | 'left' | 'right';
}

const Preview: React.FC<PreviewPropsType> = ({
  children,
  className,
  onZoomIn,
  onZoomOut,
  onRotate,
  onClose,
  onReZoom,
  scale,
  open,
  barPosition = 'top',
  ...props
}) => {
  const [zoom, setZoom] = React.useState(100);
  const [rotate, setRotation] = React.useState(0);
  const intervalRef = React.useRef(null);

  const startHoldingZoom = (func: 'zoom-in' | 'zoom-out') => (
    e: React.MouseEvent<any, MouseEvent>
  ) => {
    if (func === 'zoom-in') onZoomIn && onZoomIn(e);
    else if (func === 'zoom-out') onZoomOut && onZoomOut(e);

    if (intervalRef.current) return;
    setZoom(prevCounter => {
      const nVal = func === 'zoom-in' ? prevCounter + 10 : prevCounter - 10;
      return nVal > 0 ? nVal : prevCounter;
    });
    //@ts-ignore
    intervalRef.current = setInterval(() => {
      setZoom(prevCounter => {
        const nVal = func === 'zoom-in' ? prevCounter + 10 : prevCounter - 10;
        return nVal > 0 ? nVal : prevCounter;
      });
    }, 100);
  };

  const stopCounter = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  React.useEffect(() => {
    return () => stopCounter(); // when App is unmounted we should stop counter
  }, []);

  const onClickRotateCCW = (e: React.MouseEvent<any, MouseEvent>) => {
    setRotation(prev => prev - 90);
    onRotate && onRotate(e);
  };
  const onClickRotateCW = (e: React.MouseEvent<any, MouseEvent>) => {
    setRotation(prev => prev + 90);
    onRotate && onRotate(e);
  };

  const onClickReset = (e: React.MouseEvent<any, MouseEvent>) => {
    setRotation(0);
    setZoom(100);
    onReZoom && onReZoom(e);
  };

  const cn = classnames(['kk-preview-container', className]);

  const position: { [key: string]: string | number | undefined } = {
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  };

  const partition: { [key: string]: string | number | undefined } = {};

  switch (barPosition) {
    case 'top':
      position.bottom = undefined;
      partition.width = '1px';
      partition.height = '20px';
      break;
    case 'bottom':
      position.top = undefined;
      partition.width = '1px';
      partition.height = '20px';
      break;
    case 'left':
      position.right = undefined;
      position.flexDirection = 'column';
      partition.width = '20px';
      partition.height = '1px';
      break;
    case 'right':
      position.left = undefined;
      position.flexDirection = 'column';
      partition.width = '20px';
      partition.height = '1px';
      break;
    default:
      position.bottom = undefined;
      break;
  }

  if (!open) return null;
  return (
    <>
      <div {...props} className={cn}>
        <div className="close-button-container" onClick={onClose}>
          <BsXLg size={17} />
        </div>
        <div className="kk-header-preview" style={{ ...position }}>
          <span className="menu-item-container" onClick={onClickReset}>
            <BsArrowRepeat />
          </span>
          <span className="section" style={partition} />
          <span
            className="menu-item-container"
            onMouseDown={startHoldingZoom('zoom-in')}
            onMouseUp={stopCounter}
            onMouseLeave={stopCounter}
          >
            <BsZoomIn />
          </span>
          <span
            className="menu-item-container"
            onMouseDown={startHoldingZoom('zoom-out')}
            onMouseUp={stopCounter}
            onMouseLeave={stopCounter}
          >
            <BsZoomOut />
          </span>
          <span className="section" style={partition} />
          <span className="menu-item-container" onClick={onClickRotateCCW}>
            <BsArrowCounterclockwise size={17} />
          </span>
          <span className="menu-item-container" onClick={onClickRotateCW}>
            <BsArrowClockwise size={17} />
          </span>
        </div>
        <div className="kk-body-preview-container">
          <div
            className="kk-body-preview"
            style={{
              transform: `scale(${(scale || zoom) / 100}) rotate(${rotate}deg)`,
            }}
          >
            {children}
          </div>
        </div>
      </div>
    </>
  );
};

export const createPreview = (props: PreviewPropsType) => {
  const { container, onClose } = pushComponentToBody('preview-container');
  container.render(
    <Preview {...props} open={true} onClose={onClose(props.onClose)} />
  );
};

export default Preview;
