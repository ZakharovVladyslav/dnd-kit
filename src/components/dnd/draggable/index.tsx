import { useDraggable } from '@dnd-kit/core';
import { CSS } from '@dnd-kit/utilities';
import clsx from 'clsx';
import React, { ReactNode, useEffect, useState } from 'react';

import s from './draggable.module.scss';

type TProps = {
   children: ReactNode;
   id: string;
};

export const Draggable = ({ id, children }: TProps) => {
   const { attributes, listeners, setNodeRef, transform, isDragging } = useDraggable({
      id,
   });

   // State to manage dynamic style changes
   const [style, setStyle] = useState({});

   useEffect(() => {
      // Apply transition only when not dragging
      const newStyle = {
         ...{ transition: isDragging ? 'none' : 'transform 250ms ease' },
         ...(transform ? { transform: CSS.Translate.toString(transform) } : {}),
      };
      setStyle(newStyle);
   }, [isDragging, transform]);

   return (
      <button
         ref={setNodeRef}
         className={clsx(s.wrapper, isDragging && s.dragging)}
         style={style}
         {...listeners}
         {...attributes}
      >
         {children}
      </button>
   );
};
