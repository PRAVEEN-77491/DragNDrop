import React from 'react'

const PreviewDND = ({ file, handleRemove }) => {
    console.log(file)
    return (
        <div className='flex  mt-[30px] w-[650px] border rounded-md shadow-emerald-400 relative'>

            <img className='p-1 h-[50px] w-[50px] rounded-md' src={URL.createObjectURL(file)} alt='img' />
            <div className=' flex flex-col justify-center ml-4'>
                <p className='text-left text-[10px]'>{file.name}</p>
                <p className='text-left text-[10px]'>{file.size}</p>
            </div>
            <button className='absolute mr-2 cursor-pointer right-2 top-1/2 -translate-y-1/2' onClick={() => handleRemove(file.name)}>X</button>
        </div>
    )
}

export default PreviewDND