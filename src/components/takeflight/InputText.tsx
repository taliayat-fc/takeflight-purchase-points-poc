import React, { CSSProperties } from 'react';

interface InputTextProps {
  label?: string;
  placeholder?: string;
  value?: string;
  defaultValue?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  error?: string;
  fullWidth?: boolean;
  customWidth?: string;
  hiddenText?: boolean;
  hiddenLabel?: boolean;
  helperText?: string;
  type?: string;
  required?: boolean;
  autoComplete?: string;
  name?: string;
  id?: string;
  style?: CSSProperties;
}

export const InputText: React.FC<InputTextProps> = ({ 
  label,
  placeholder,
  value,
  defaultValue,
  onChange,
  disabled = false,
  error,
  fullWidth = false,
  customWidth,
  hiddenText = false,
  hiddenLabel = false,
  helperText,
  type = 'text',
  required = false,
  autoComplete,
  name,
  id,
  style = {}
}) => {
  const containerWidth = customWidth || (fullWidth ? '100%' : 'auto');
  
  return (
    <div style={{ width: containerWidth, ...style }}>
      {label && !hiddenLabel && (
        <label 
          style={{ 
            display: 'block',
            marginBottom: '4px',
            fontSize: '14px',
            color: '#616161',
            fontFamily: 'Roboto, Arial, sans-serif'
          }}
        >
          {label}
          {required && <span style={{ color: '#da2b2b' }}>*</span>}
        </label>
      )}
      <div style={{
        backgroundColor: disabled ? '#f5f5f5' : '#ffffff',
        border: `1px solid ${error ? '#da2b2b' : '#e0e0e0'}`,
        borderRadius: '12px',
        padding: '16px',
        height: '56px',
        display: 'flex',
        alignItems: 'center'
      }}>
        <input
          type={hiddenText ? 'password' : type}
          value={value}
          defaultValue={defaultValue}
          onChange={onChange}
          placeholder={placeholder || label}
          disabled={disabled}
          required={required}
          autoComplete={autoComplete}
          name={name}
          id={id}
          aria-label={hiddenLabel ? label : undefined}
          style={{
            border: 'none',
            outline: 'none',
            width: '100%',
            fontFamily: 'Roboto, Arial, sans-serif',
            fontSize: '16px',
            color: '#181818',
            backgroundColor: 'transparent'
          }}
        />
      </div>
      {error && (
        <p style={{ 
          margin: '4px 0 0 0',
          fontSize: '12px',
          color: '#da2b2b',
          fontFamily: 'Roboto, Arial, sans-serif'
        }}>
          {error}
        </p>
      )}
      {helperText && !error && (
        <p style={{ 
          margin: '4px 0 0 0',
          fontSize: '12px',
          color: '#616161',
          fontFamily: 'Roboto, Arial, sans-serif'
        }}>
          {helperText}
        </p>
      )}
    </div>
  );
};
