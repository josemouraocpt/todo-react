import * as React from 'react';
import { ITask } from '../interfaces/Task';
import './Tasks.css'; 

export interface IAppProps {
  taskList: ITask[];
  handleDelete(id: number): void;
  handleEdit(task: ITask) : void;
}

export default function Tasks ({taskList, handleDelete, handleEdit}: IAppProps) {
  return (
    <>
     {taskList.length > 0 ? (
      taskList.map((task) => (
        <div key={task.id} className='task'>
         <div className='details'>
          <h4>{task.title}</h4>
          <p>Dificuldade: {task.difficult}</p>
         </div>
         <div className='actions'>
          <i className='bi bi-pencil' onClick={() => {handleEdit(task)}}></i>
          <i className='bi bi-trash' onClick={() => {
            handleDelete(task.id);
          }}></i>
         </div>
        </div>
      ))
     ) : (
      <p>Não há tarefas cadastradas.</p>
     )}
    </>
  );
};
