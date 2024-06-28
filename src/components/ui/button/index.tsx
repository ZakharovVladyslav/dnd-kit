'use client';

import clsx from 'clsx';
import { MouseEvent } from 'react';

import s from './button.module.scss';

export const Button = ({
   size = 'm',
   variant = 'primary',
   type = 'button',
   className,
   children,
   onClick,
   disabled = false,
   id,
   position,
}: TButtonProps) => {
   const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      onClick();
   };

   return (
      <button
         className={clsx(s.button, s[position], s[size], s[type], s[variant], className)}
         type={type}
         onClick={handleClick}
         disabled={disabled}
         id={id && id}
      >
         {children}
      </button>
   );
};
