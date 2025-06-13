import React from 'react'

export const todoReducer = (draf, action) => {
    switch(action.type){
        case "ADD_TODO":
            draf.push(action.payload);
            break;
        case "REMOVE_TODO":
            const indexDelete = draf.findIndex((todo) => todo.id === action.id)
            if (indexDelete !== -1) {
                draf.splice(indexDelete, 1);
            }else{
                alert('Todo not found or something went wrong');
            }
            break;
        case 'UPDATE_TODO':
            const indexUpdate = draf.findIndex((todo) => todo.id === action.id)
            if (indexUpdate !== -1){
                draf[indexUpdate] = action.payload;
            }
    }
}

