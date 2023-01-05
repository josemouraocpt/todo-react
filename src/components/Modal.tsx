import * as React from 'react';
import './Modal.css';

export interface IAppProps {
    children: React.ReactNode;
}

export default function Modal ({children}: IAppProps) {
  const closeModal = (e:React.MouseEvent): void => {
    const modal = document.querySelector('#modal');
    modal!.classList.add('hide');
  }
  return (
    <div id='modal' className='hide'>
     <div className='fade' onClick={closeModal}></div>
     <div className='modal'>
        <h2>Modal</h2>
        {children}
     </div>
    </div>
  );
}
