'use client';

import { useDroppable } from '@dnd-kit/core';
import clsx from 'clsx';
import { ReactNode } from 'react';

type TProps = {
   children: ReactNode;
   id: string;
};

import s from './droppable.module.scss';

export const Droppable = ({ children, id }: TProps) => {
   const { isOver, setNodeRef } = useDroppable({
      id,
   });

   return (
      <div ref={setNodeRef} className={clsx(s.wrapper, !isOver && s.dragging)}>
         <div className={s.index}></div>

         {children}
      </div>
   );
};
