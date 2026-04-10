import React from 'react';

export default function PushButton({
  variant = 'primary', // 'primary', 'email', 'listening', 'speaking', 'reading', 'writing', 'secondary'
  icon,
  text,
  isLoading = false,
  disabled = false,
  onClick,
  className = '',
  style = {},
  type = 'button'
}) {
  const variantClass = `pb-${variant}`;
  
  return (
    <button
      type={type}
      className={`push-btn ${variantClass} ${isLoading ? 'is-loading' : ''} ${disabled ? 'disabled' : ''} ${className}`}
      onClick={(e) => {
        // Only trigger if not disabled/loading
        if (!disabled && !isLoading && onClick) {
          onClick(e);
        }
      }}
      disabled={disabled || isLoading}
      style={style}
    >
      <span className="push-btn-shadow"></span>
      <span className="push-btn-edge"></span>
      <span className="push-btn-front">
        {isLoading ? (
          <>
            <span style={{ 
              width: 16, height: 16, 
              border: `2px solid ${variant === 'secondary' ? 'rgba(0,131,143,0.2)' : 'rgba(255,255,255,0.4)'}`, 
              borderTopColor: 'currentColor', 
              borderRadius: '50%', 
              animation: 'spin 0.8s linear infinite' 
            }}></span>
            Processing...
          </>
        ) : (
          <>
            {icon && <span style={{ display: 'flex', alignItems: 'center' }}>{icon}</span>}
            {text}
          </>
        )}
      </span>
    </button>
  );
}
