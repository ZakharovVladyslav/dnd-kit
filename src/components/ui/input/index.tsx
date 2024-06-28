'use client';

import classNames from 'classnames';

import { WarnIcon } from '@/icons';

import s from './input.module.scss';

export const Input = ({
   onChange,
   value,
   disabled = false,
   label,
   size = 'm',
   variant = 'primary',
   type = 'text',
   className,
   error,
   position,
   icon,
   iconPosition = 'right',
   placeholder,
   id,
   optional,
}: TInputProps) => {
   const Icon = icon;

   return (
      <div
         className={classNames(
            s.wrapper,
            s[size],
            s[variant],
            s[type],
            s[position],
            className,
         )}
      >
         {label && (
            <label className={s.label}>
               {label}{' '}
               {optional && <span className={s.optional}>&#40;Optional&#41;</span>}
            </label>
         )}

         <div className={classNames(s.inputWrapper, s[`icon-${iconPosition}`])}>
            <input
               onChange={onChange}
               value={value}
               disabled={disabled}
               className={s.input}
               placeholder={placeholder}
               id={id && id}
            />

            {icon && <Icon className={s.icon} />}
         </div>

         {error && (
            <div className={s.errorWrapper}>
               <WarnIcon className={s.icon} />
               <span className={s.error}>{error}</span>
            </div>
         )}
      </div>
   );
};
