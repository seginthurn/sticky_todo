import React from 'react';
import './StickyNote.css';
import { refreshPage } from '../../hooks/refreshPage';

const StickyNote = (props) =>{

    const handleDone = () => {
        const localSticky = JSON.parse(localStorage.getItem(props.stickyid));
        if(localSticky.pending === true){
            localSticky.pending = false;
        }else{
            localSticky.pending = true;
        }
        localStorage.setItem(props.stickyid, JSON.stringify(localSticky));
        refreshPage();
    }

    return (
        <div onDoubleClick={() => handleDone()} stickyid={props.id} className={`sticky ${props.color}`}>
            {props.children}
        </div>
    );
}

export default StickyNote;