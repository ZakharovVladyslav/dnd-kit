'use client';

import { ChangeEvent, useState } from 'react';

import { Divider, Button, IconedButton, Input, SearchableSelect } from '@/components';
import { WarnIcon } from '@/icons';

import s from './page.module.scss';

export default function Home() {
   const [value, setValue] = useState<TOption>({ key: '', value: '' });
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

   return (
      <main className={s.main}>
         <section className={s.components}>
            <section className={s.component}>
               <p>Button:</p>

               <Divider />

               <Button onClick={() => {}}>Button</Button>

               <Button onClick={() => {}} disabled>
                  Button
               </Button>
            </section>

            <section className={s.component}>
               <p>Iconed Button:</p>

               <Divider />

               <IconedButton icon={WarnIcon} onClick={() => {}} />

               <IconedButton icon={WarnIcon} onClick={() => {}} disabled />
            </section>

            <section className={s.component}>
               <p>Input:</p>

               <Divider />

               <Input
                  onChange={handleChange}
                  value={value?.value || ''}
                  placeholder="Complete"
                  error="Error"
                  label="Label"
                  icon={WarnIcon}
               />

               <Input
                  onChange={handleChange}
                  value={value?.value || ''}
                  placeholder="Label Only"
                  label="Label"
               />

               <Input
                  onChange={handleChange}
                  value={value?.value || ''}
                  placeholder="Label only with optional"
                  label="Label"
                  optional
               />

               <Input
                  onChange={handleChange}
                  value={value?.value || ''}
                  placeholder="Without Label"
                  error="Error"
               />

               <Input
                  onChange={handleChange}
                  value={value?.value || ''}
                  placeholder="With Icon"
                  icon={WarnIcon}
               />

               <Input
                  onChange={handleChange}
                  value={value?.value || ''}
                  placeholder="Icon left"
                  iconPosition="left"
                  icon={WarnIcon}
               />

               <Input
                  onChange={handleChange}
                  value={value?.value || ''}
                  placeholder="Without everything"
               />
            </section>

            <section className={s.component}>
               <p>Searchable Select:</p>

               <Divider />

               <SearchableSelect
                  value={value?.key || ''}
                  displayingValue={value?.value || ''}
                  onChange={handleChange}
                  setOption={handleSelect}
                  options={options}
                  placeholder="Complete"
                  label="Label"
                  error="Error"
               />

               <SearchableSelect
                  value={value?.key || ''}
                  displayingValue={value?.value || ''}
                  onChange={handleChange}
                  setOption={handleSelect}
                  options={options}
                  placeholder="Label Only"
                  label="Label"
               />

               <SearchableSelect
                  value={value?.key || ''}
                  displayingValue={value?.value || ''}
                  onChange={handleChange}
                  setOption={handleSelect}
                  options={options}
                  placeholder="Label Only But Optional"
                  label="Label"
                  optional
               />

               <SearchableSelect
                  value={value?.key || ''}
                  displayingValue={value?.value || ''}
                  onChange={handleChange}
                  setOption={handleSelect}
                  options={options}
                  placeholder="Error Only"
                  error="Error"
               />

               <SearchableSelect
                  value={value?.key || ''}
                  displayingValue={value?.value || ''}
                  onChange={handleChange}
                  setOption={handleSelect}
                  options={options}
                  placeholder="Without everything"
               />
            </section>
         </section>
      </main>
   );
}
