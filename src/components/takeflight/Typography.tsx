import React, { CSSProperties } from 'react';

interface TypographyProps {
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'body' | 'label' | 'caption' | 'price';
  weight?: 'regular' | 'medium' | 'bold';
  align?: 'left' | 'center' | 'right';
  color?: string;
  children: React.ReactNode;
  style?: CSSProperties;
}

export const Typography: React.FC<TypographyProps> = ({ 
  variant = 'body', 
  weight = 'regular',
  align = 'left',
  color,
  children,
  style = {}
}) => {
  const getVariantStyles = (): CSSProperties => {
    switch(variant) {
      case 'h1': return { fontSize: '26px', lineHeight: '30px', fontWeight: 500, letterSpacing: '0px' };
      case 'h2': return { fontSize: '20px', lineHeight: '24px', fontWeight: 500, letterSpacing: '0px' };
      case 'h6': return { fontSize: '14px', lineHeight: '18px', fontWeight: 700, letterSpacing: '0px', fontVariantNumeric: 'lining-nums proportional-nums' };
      case 'body': return { fontSize: '16px', lineHeight: '24px', fontWeight: 400, letterSpacing: '0.2px' };
      case 'caption': return { fontSize: '12px', lineHeight: '16px', fontWeight: 400, letterSpacing: '0.2px' };
      case 'price': return { fontSize: '20px', lineHeight: '22px', fontWeight: 500, letterSpacing: '0px' };
      default: return { fontSize: '16px', lineHeight: '24px', fontWeight: 400, letterSpacing: '0.2px' };
    }
  };
  
  const getWeightOverride = (): number | undefined => {
    if (weight === 'regular') return 400;
    if (weight === 'medium') return 500;
    if (weight === 'bold') return 700;
    return undefined;
  };
  
  const getFontFamily = () => {
    if (['h1', 'h2', 'h6'].includes(variant)) {
      return 'World360, Inter, Arial, sans-serif';
    }
    if (variant === 'body') {
      return 'DM Sans, Inter, Arial, sans-serif';
    }
    if (variant === 'caption') {
      return 'DM Sans, Inter, Arial, sans-serif';
    }
    return 'Roboto, Arial, sans-serif';
  };
  
  const getDefaultColor = () => {
    if (['h1', 'h2', 'h6'].includes(variant)) {
      return '#001edc';
    }
    return '#212121';
  };

  const variantStyles = getVariantStyles();
  const weightOverride = getWeightOverride();
  
  return (
    <p 
      style={{
        ...variantStyles,
        fontWeight: weightOverride || variantStyles.fontWeight,
        fontFamily: getFontFamily(),
        textAlign: align,
        color: color || getDefaultColor(),
        margin: 0,
        ...style
      }}
    >
      {children}
    </p>
  );
};
