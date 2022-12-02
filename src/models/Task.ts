export interface TaskProps {
  id: number;
  index: number;
  name: string;
  time: string,
  color: string;
  completed?: boolean;
}
export interface ITask {
  title: string,
  number: number,
  completed?: boolean;
  tasks: TaskProps[];
}

export interface DnDTaskProps {
  id: string;
  title: string,
  number: number,
  completed?: boolean;
  data: TaskProps[]
}
export interface TaskLists {
  [key: string]: TaskProps[]
}

