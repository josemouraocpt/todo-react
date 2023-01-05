import { useState } from 'react';
import Footer from './components/Footer';
import Form from './components/Form';
import Header from './components/Header'
import Modal from './components/Modal';
import Tasks from './components/Tasks';
import './index.css';
import { ITask } from './interfaces/Task';

function App() {
 const [taskList, setTaskList] = useState<ITask[]>([]);
 const [taskToUpdate, setTaskToUpdate] = useState<ITask | null>(null);

 const deleteTask = (id: number) => {
  setTaskList(
    taskList.filter(task => {
      return task.id !== id;
    })
  )
 };
 const hideOrShowModal = (display: boolean) => {
  const modal = document.querySelector('#modal');
  if(display){
    modal!.classList.remove('hide');
  }else{
    modal!.classList.add('hide');
  }
 };
 const editTask = (task: ITask): void =>{
  hideOrShowModal(true);
  setTaskToUpdate(task);
 };
 const updateTask = (id: number, title: string, difficult: number) => {
  const updatedTask: ITask = {id, title, difficult};
  const updatedItems = taskList.map((task) => {
   return task.id === updatedTask.id ? updatedTask : task;
  })
  setTaskList(updatedItems);
  hideOrShowModal(false);
 };

  return (
    <div>
      <Modal children={<Form btnText='Editar Tarefa' taskList={taskList} task={taskToUpdate} handleUpdate={updateTask}/>}/>
     <Header/>
     <div>
        <div className="main">
          <div>
           <h2>O que você vai fazer?</h2>
           <Form btnText='Criar Tarefa' taskList={taskList} setTaskList={setTaskList}/>
          </div>
          <div>
           <Tasks taskList={taskList} handleDelete={deleteTask} handleEdit={editTask}/>
          </div>
        </div>
     </div>
     <Footer/>
    </div>
  )
}

export default App
