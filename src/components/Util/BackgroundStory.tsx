import React from 'react';

const BackgroundStory: React.FC<{ children: React.ReactNode }> = props => {
  return (
    <div
      style={{
        width: 'calc(100vw - 32px)',
        height: 'calc(100vh - 32px)',
        backgroundImage:
          'url(https://images.hdqwalls.com/wallpapers/color-confusions-abstract-4k-xz.jpg)',
        objectFit: 'contain',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 16,
      }}
    >
      {props.children}
    </div>
  );
};

export default BackgroundStory;
