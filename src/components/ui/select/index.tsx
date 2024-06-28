'use client';

import { Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/react';
import clsx from 'clsx';
import { Fragment } from 'react';

import { ChevronDownIcon, WarnIcon } from '@/icons';

import s from './select.module.scss';

export const Select = ({
   displayingValue,
   onChange,
   options,
   value,
   className,
   disabled,
   error,
   id,
   placeholder,
   label,
   size,
   variant,
}: TSelectProps) => {
   return (
      <div
         id={id && id}
         className={clsx(
            s.wrapper,
            className,
            s[variant as string],
            s[size as string],
            disabled && s.disabled,
            error && s.errored,
         )}
      >
         {label && <label className={s.label}>{label}</label>}

         <Listbox
            value={value}
            onChange={onChange}
            className={s.selectWrapper}
            as={'section'}
         >
            {({ open }) => (
               <>
                  <ListboxButton className={clsx(s.select, open && s.opened)}>
                     {displayingValue || (
                        <span className={s.placeholder}>{placeholder}</span>
                     )}
                     <ChevronDownIcon className={s.chevron} />
                  </ListboxButton>
                  <ListboxOptions className={clsx(s.options, open && s.opened)}>
                     {options.map(option => (
                        <ListboxOption
                           key={option.key}
                           value={option.key}
                           className={s.option}
                        >
                           {option.value}
                        </ListboxOption>
                     ))}
                  </ListboxOptions>
               </>
            )}
         </Listbox>

         <div className={s.errorWrapper}>
            {error && (
               <>
                  <WarnIcon className={s.warnIcon} />
                  <span className={s.error}>{error}</span>
               </>
            )}
         </div>
      </div>
   );
};
