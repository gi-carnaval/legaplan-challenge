import React, { forwardRef } from "react";
import "./styles.scss"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  buttonStyle?: 'primary' | 'seconday' | 'delete'
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, buttonStyle = 'primary', ...props }, ref) => {
    return (
      <button ref={ref} className={`addNewTaksButton ${buttonStyle}`} {...props} >
        {children}
      </button>
    )
  }
)

Button.displayName = 'Button';

export { Button };