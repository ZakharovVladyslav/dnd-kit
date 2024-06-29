'use client';

import { DndContext, DragEndEvent } from '@dnd-kit/core';

import { useState } from 'react';
import { Draggable, Droppable } from '@/components';

import s from './page.module.scss';

type TData = {
   droppables: {
      id: string;
      items: [{ id: string; content: string }];
   }[];
};

const initialData: TData = {
   droppables: [
      {
         id: 'droppable-1',
         items: [{ id: 'item-1', content: 'Item 1' }],
      },
      {
         id: 'droppable-2',
         items: [{ id: 'item-2', content: 'Item 2' }],
      },
      {
         id: 'droppable-3',
         items: [{ id: 'item-3', content: 'Item 3' }],
      },
      {
         id: 'droppable-4',
         items: [{ id: 'item-4', content: 'Item 4' }],
      },
   ],
};

export default function Home() {
   const [data, setData] = useState<TData>(initialData);

   const handleDragEnd = (event: DragEndEvent) => {
      const { active, over } = event;

      if (!over) {
         return;
      }

      const sourceDroppableId = data.droppables.find(droppable =>
         droppable.items.some(item => item.id === active.id),
      )?.id;
      const targetDroppableId = over.id;

      const sourceDroppableIndex = data.droppables.findIndex(
         droppable => droppable.id === sourceDroppableId,
      );
      const targetDroppableIndex = data.droppables.findIndex(
         droppable => droppable.id === targetDroppableId,
      );

      console.log({ sourceDroppableIndex, targetDroppableIndex });

      const sourceDroppable = { ...data.droppables[sourceDroppableIndex] };
      const targetDroppable = { ...data.droppables[targetDroppableIndex] };

      console.log({ sourceDroppable, targetDroppable });

      sourceDroppable.items = [data.droppables[targetDroppableIndex].items[0]];
      targetDroppable.items = [data.droppables[sourceDroppableIndex].items[0]];

      console.log({ sourceDroppable, targetDroppable });

      const newData = { ...data };

      newData.droppables[sourceDroppableIndex] = sourceDroppable;
      newData.droppables[targetDroppableIndex] = targetDroppable;

      setData(newData);
   };

   return (
      <DndContext onDragEnd={handleDragEnd}>
         <main className={s.main}>
            <section className={s.droppables}>
               {data.droppables.map(droppable => (
                  <Droppable id={droppable.id} key={droppable.id}>
                     {droppable.items.map(item => (
                        <Draggable id={item.id} key={item.id}>
                           {item.content}
                        </Draggable>
                     ))}
                  </Droppable>
               ))}
            </section>
         </main>
      </DndContext>
   );
}
