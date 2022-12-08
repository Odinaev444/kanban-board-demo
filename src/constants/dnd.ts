import { DnDTaskProps, TaskProps } from "../models/Task";

export type ItemKey = 'TASK';

export const ItemTypes: { [key in ItemKey]: string } = {
  TASK: "new_task",
}

export interface MoveCard {
  dragIndex: number,
  hoverIndex: number
}
export interface DragItem {
  itemType: ItemKey;
  draggable: boolean;
  moveCard: ({ dragIndex, hoverIndex }: MoveCard) => void;
  setTaskData: React.Dispatch<React.SetStateAction<DnDTaskProps[]>>
}
export interface DndProps {
  itemType: ItemKey,
  onDrop?: (item: DnDTaskProps) => void;
  setTaskData: React.Dispatch<React.SetStateAction<DnDTaskProps[]>>
}

export interface DropResultType {
  dropEffect: string;
  item: TaskProps;
  title: string;
}