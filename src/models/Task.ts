export interface TaskProps {
  name: string;
  time: string,
  color: string;
}
export interface ITask {
  title: string,
  number: number,
  completed?: boolean;
  tasks: TaskProps[];
}