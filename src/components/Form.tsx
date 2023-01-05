import React, {useState, ChangeEvent, FormEvent, useEffect}from 'react';
import './Form.css';
import { ITask } from '../interfaces/Task';

export interface IAppProps {
    btnText: string
    taskList: ITask[]
    setTaskList?: React.Dispatch<React.SetStateAction<ITask[]>>
    task?: ITask | null;
    handleUpdate?(id: number, title: string, difficult: number) :void;
}

export default function Form ({btnText, taskList, setTaskList, task, handleUpdate}: IAppProps) {

  const [id, setId] = useState<number>(0);
  const [title, setTitle] = useState<string>('');
  const [difficult, setDifficult] = useState<number>(0);

  useEffect(() => {
    if(task){
      setId(task.id);
      setTitle(task.title);
      setDifficult(task.difficult);
    }
  }, [task]);

  const addTaskHandler = (e:FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if(handleUpdate){
      handleUpdate(id, title, difficult);
    } else{
      const id = Math.floor(Math.random() * 1000);
      const newTask: ITask = {id, title, difficult};
      setTaskList!([...taskList, newTask]);
      setTitle('');
      setDifficult(0);
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if(e.target.name === 'title'){
      setTitle(e.target.value);
    }else{
      setDifficult(parseInt(e.target.value));
    }
  };

  return (
    <div>
     <form className='form' onSubmit={addTaskHandler}>
      <div className='input_container'>
       <label htmlFor="title">Title: </label>
       <input type="text" name='title' placeholder='Título da tarefa' onChange={handleChange} value={title}/>
      </div>
      <div className='input_container'>
       <label htmlFor="dificuldade">Dificuldade: </label>
       <input type="text" name='dificuldade' placeholder='Dificuldade da tarefa' onChange={handleChange} value={difficult}/>
      </div>
      <input type="submit" value={btnText}/>
     </form>
    </div>
  );
}
