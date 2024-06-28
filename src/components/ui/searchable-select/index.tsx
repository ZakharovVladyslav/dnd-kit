'use client';

import {
   Combobox,
   ComboboxButton,
   ComboboxInput,
   ComboboxOption,
   ComboboxOptions,
} from '@headlessui/react';
import clsx from 'clsx';

import { useEffect, useState } from 'react';
import { ChevronDownIcon, WarnIcon } from '@/icons';

import s from './searchable-select.module.scss';

/**
 * Example of usage:
 * ----------------------------------------------------------------------
 * const [value, setValue] = useState<TOption>({ key: '', value: '' });
   const [options] = useState<TOption[]>([
      { key: '1', value: 'Option 1' },
      { key: '2', value: 'Option 2' },
      { key: '3', value: 'Option 3' },
   ]);

   const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      setValue({ ...value, value: e.target.value || '' });
   };

   const handleSelect = (value: string) => {
      setValue({
         key: value,
         value: value && `Option ${value}`,
      });
   };

   ...

   <SearchableSelect
      value={value?.key || ''}
      displayingValue={value?.value || ''}
      onChange={handleChange}
      setOption={handleSelect}
      options={options}
      placeholder="Placeholder"
   />
 * ----------------------------------------------------------------------
 */

export const SearchableSelect = ({
   label = '',
   error = '',
   value = '',
   displayingValue = '',
   placeholder = '',
   options = [],
   size = 'm',
   variant = 'primary',
   onChange,
   setOption,
   className,
   id = '',
   disabled = false,
   optional = false,
}: TSearchableSelectProps) => {
   const [filteredOptions, setFilteredOptions] = useState<TOption[]>(options);

   useEffect(() => {
      if (!displayingValue) {
         setFilteredOptions(options);
         return;
      }

      setFilteredOptions(
         options.filter(option =>
            option.value.toLowerCase().includes(displayingValue.toLowerCase()),
         ),
      );
   }, [displayingValue, options]);

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
         {label && (
            <label className={s.label}>
               {label}{' '}
               {optional && <span className={s.optional}>&#40;Optional&#41;</span>}
            </label>
         )}

         <Combobox
            className={s.searchableSelectWrapper}
            value={value}
            onChange={setOption}
            as={'section'}
            immediate
         >
            <div className={s.inputWrapper}>
               <ComboboxInput
                  aria-label={label}
                  onChange={onChange}
                  value={displayingValue}
                  placeholder={placeholder}
                  className={s.input}
               />

               <ComboboxButton as={'button'} className={s.button}>
                  <ChevronDownIcon className={s.chevron} />
               </ComboboxButton>
            </div>
            <ComboboxOptions className={s.options}>
               {filteredOptions.map(option => (
                  <ComboboxOption
                     key={option.key}
                     value={option.key}
                     className={s.option}
                  >
                     {option.value}
                  </ComboboxOption>
               ))}
            </ComboboxOptions>
         </Combobox>

         {error && (
            <div className={s.errorWrapper}>
               <WarnIcon className={s.warnIcon} />
               <span className={s.error}>{error}</span>
            </div>
         )}
      </div>
   );
};
