import React from 'react';

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'linked' | 'success' | 'caution' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  loading?: boolean;
  disabled?: boolean;
  children: React.ReactNode;
  onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  size = 'md', 
  fullWidth = false,
  loading = false,
  disabled = false,
  children,
  ...props 
}) => {
  const getVariantStyles = () => {
    switch(variant) {
      case 'primary':
        return {
          backgroundColor: '#001edc',
          color: '#ffffff',
          border: 'none'
        };
      case 'secondary':
        return {
          backgroundColor: '#ffffff',
          color: '#001edc',
          border: '1px solid #001edc'
        };
      default:
        return {
          backgroundColor: '#001edc',
          color: '#ffffff',
          border: 'none'
        };
    }
  };
  
  const getSizeStyles = () => {
    switch(size) {
      case 'sm': 
        return { 
          padding: '8px 14px',
          fontSize: '14px'
        };
      case 'md': 
        return { 
          padding: '10px 16px',
          fontSize: '16px'
        };
      case 'lg': 
        return { 
          padding: '10px 16px',
          fontSize: '18px'
        };
      default: 
        return { 
          padding: '10px 16px',
          fontSize: '16px'
        };
    }
  };
  
  const sizeStyles = getSizeStyles();
  
  return (
    <button
      style={{
        ...getVariantStyles(),
        ...sizeStyles,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '4px',
        width: fullWidth ? '100%' : 'auto',
        flex: fullWidth ? '1 0 0' : 'none',
        borderRadius: '1000px',
        fontFamily: 'DM Sans, -apple-system, BlinkMacSystemFont, sans-serif',
        fontWeight: 500,
        fontStyle: 'normal',
        cursor: disabled ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.6 : 1,
        transition: 'all 0.2s'
      }}
      disabled={disabled}
      {...props}
    >
      {loading ? 'Loading...' : children}
    </button>
  );
};
