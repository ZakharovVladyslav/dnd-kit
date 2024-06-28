'use client';

import classNames from 'classnames';
import { MouseEvent } from 'react';

import { TIconedButtonProps } from '@/types/iconed-button';
import s from './iconed-button.module.scss';

export const IconedButton = ({
   size = 'm',
   variant = 'primary',
   className,
   icon,
   onClick,
   disabled = false,
   position,
   children,
   iconPosition = 'right',
   id,
   type = 'button',
}: TIconedButtonProps) => {
   const Icon = icon;

   const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      onClick();
   };

   return (
      <button
         className={classNames(
            s.iconedButton,
            s[size],
            s[variant],
            s[position],
            s[`icon-${iconPosition}`],
            className,
         )}
         onClick={handleClick}
         disabled={disabled}
         type={type}
         id={id}
      >
         <Icon className={s.icon} />
         {children && <span className={s.text}>{children}</span>}
      </button>
   );
};
