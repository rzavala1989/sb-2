import React, { FC, HTMLAttributes } from 'react';

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant: 'elevation' | 'error';
  classes?: string;
}

export const Card: FC<CardProps> = ({ variant = 'elevation', children, classes, ...rest }) => {
  return (
    <div
      className={[
        classes,
        'rounded-xl p-2',
        `${variant === 'elevation' ? 'shadow-md' : 'border-2 border-red-500 shadow-lg'}`
      ].join(' ')}
      {...rest}>
      {children}
    </div>
  );
};
