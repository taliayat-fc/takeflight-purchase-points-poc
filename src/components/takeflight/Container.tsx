import React, { CSSProperties } from 'react';

interface ContainerProps {
  maxWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | false;
  disableGutters?: boolean;
  children: React.ReactNode;
  style?: CSSProperties;
}

export const Container: React.FC<ContainerProps> = ({ 
  maxWidth = 'xl',
  disableGutters = false,
  children,
  style = {}
}) => {
  const getMaxWidth = () => {
    if (maxWidth === false) return '100%';
    switch(maxWidth) {
      case 'xs': return '444px';
      case 'sm': return '640px';
      case 'md': return '768px';
      case 'lg': return '1024px';
      case 'xl': return '1280px';
      default: return '1280px';
    }
  };
  
  return (
    <div 
      style={{ 
        maxWidth: getMaxWidth(),
        width: '100%',
        marginLeft: 'auto',
        marginRight: 'auto',
        paddingLeft: disableGutters ? 0 : '16px',
        paddingRight: disableGutters ? 0 : '16px',
        ...style
      }}
    >
      {children}
    </div>
  );
};
