'use client';

import clsx from 'clsx';
import s from './divider.module.scss';

export const Divider = ({
   axis = 'x',
   size = 's',
   variant = 'primary',
}: TDividerProps) => {
   return <div className={clsx(s.divider, s[axis], s[axis + '-' + size], s[variant])} />;
};
