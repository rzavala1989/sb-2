import React, { FC, HTMLAttributes } from 'react';

export interface PillProps extends HTMLAttributes<HTMLDivElement> {
  text: string;
  size: 'sm' | 'md' | 'lg';
  backgroundColor?: string;
  textColor?: string;
  children?: React.ReactNode;
  classes?: string;
}

// Build out the component based on the props
export const Pill: FC<PillProps> = ({
  text,
  size = 'sm',
  backgroundColor,
  textColor,
  children,
  classes
}) => {
  //Build out our size classes
  const sizeClasses = {
    sm: 'px-4 py-1',
    md: 'px-6 py-2',
    lg: 'px-8 py-3'
  };

  //return our component
  return (
    <div
      className={[classes, 'rounded-xl inline-block text-sm', `${sizeClasses[size]}`].join(' ')}
      style={{ background: `${backgroundColor}` }}>
      <span style={{ color: `${textColor}` }}>{text}</span>
      {children}
    </div>
  );
};
