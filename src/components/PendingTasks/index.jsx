import React from 'react';
import StickyNote from '../StickyNote';
import './PendingTasks.css';

const PendingTasks = () => {

    const loadTasks = () => {
        const dataArr = [];

        for (let n = 0; n < localStorage.length; n++) {
            let data = JSON.parse(localStorage.getItem(n));

            if (data) {
                if (data.pending === true) {
                    dataArr.push(data);
                }
            }
        }

        return dataArr.map(item => <StickyNote key={item.id} stickyid={item.id} color={item.color}>{item.task}</StickyNote>);
    }

    return (
        <div className="PendingTasks">
            {
                loadTasks()
            }
        </div>
    );
}

export default PendingTasks;