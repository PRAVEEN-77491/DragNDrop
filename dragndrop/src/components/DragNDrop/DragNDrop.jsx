/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import PreviewDND from './PreviewDND';

const DragNDrop = () => {
    const [file, setFile] = useState([]);
    const [isDragging, setIsDragging] = useState(false);
    const handleOnChange =(e)=>{
       const fileSelected = e.target.files;
       setFile([...file,...fileSelected]);
    }
    
    const handleRemove = (fileName) =>{
        console.log("handle function Called", fileName)
        const newArr = file.filter(item=>
            item.name !== fileName
        )
        setFile(newArr)
    }

    const handleDragEnter = (e) => {
        e.preventDefault();
        setIsDragging(true);
        console.log("Drag Entered", e);
    }

    const handleDrageLeave = (e) => {
        e.preventDefault();
        setIsDragging(false);
    }

    const handleDrop =(e)=>{
        e.preventDefault();
        const droppedFiles = e.dataTransfer.files;
        setFile([...file, ...droppedFiles]);
    }

return (
    <div className='flex flex-col items-center justify-center h-screen'>
        <div 
        onDrop={(e)=> handleDrop(e)}
        onDragEnter={(e)=> handleDragEnter(e)}
        onDragOver={(e)=> handleDragEnter(e)}
        onDragLeave={(e)=> handleDrageLeave(e)}
         className={`border-2 border-dashed rounded-md h-[200px] w-[650px] text-center flex flex-col justify-center items-center gap-10 ${isDragging ? 'border-blue-500' : ''}`}> 
            <p>Drag and Drop here or</p>
            <input onChange={(e)=> handleOnChange(e)} type='file' multiple className='hidden' id="input-file"/>
            <label htmlFor='input-file' className='bg-green-300 rounded-md p-1 mb-5'>Browse Files</label>
        </div>
        {
            file.map((item,index)=> <PreviewDND key={index} file={item} handleRemove={handleRemove}/>)
        }
    </div>
)
// ...existing code...
}

export default DragNDrop