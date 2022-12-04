import React from 'react';

const BackgroundStory: React.FC<{ children: React.ReactNode }> = props => {
  return (
    <div
      style={{
        minWidth: 'calc(100% - 62px)',
        minHeight: 'calc(100vh - 32px)',
        backgroundImage:
          'url(https://images.hdqwalls.com/download/paint-corrosion-4k-80-1440x900.jpg)',
        // 'url(https://images.hdqwalls.com/wallpapers/color-confusions-abstract-4k-xz.jpg)',
        objectFit: 'contain',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 16,
        padding: 32,
        position: 'relative',
      }}
    >
      {props.children}
    </div>
  );
};

export default BackgroundStory;
