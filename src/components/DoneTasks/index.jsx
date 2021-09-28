import React, { useEffect } from 'react';
import StickyNote from '../StickyNote';
import './DoneTasks.css';

const DoneTasks = () => {

    const loadTasks = () => {
        const dataArr = [];

        for (let n = 0; n < localStorage.length; n++) {
            let data = JSON.parse(localStorage.getItem(n));

            if (data) {
                if (data.pending === false) {
                    dataArr.push(data);
                }
            }
        }


        return dataArr.map(item => <StickyNote key={item.id} stickyid={item.id} color={item.color}>{item.task}</StickyNote>);

    }

    useEffect(()=>{
        loadTasks()
    });

    return (
        <div className="DoneTasks">
            {
                loadTasks()
            }
        </div>
    );
}

export default DoneTasks;

