import React from 'react';
import './button.css';

export interface ButtonProps {
  children?: React.ReactNode;
}

export const Button = ({ children }: ButtonProps) => (
  <button className='button'>{children}</button>
);
