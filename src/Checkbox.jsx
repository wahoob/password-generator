import React from 'react'

const Checkbox = ({ label, id, value, onChange }) => {
    return (
        <div className='flex items-center gap-4'>
            <input type='checkbox' id={id} className='relative border-2 outline-none appearance-none size-4 cursor-pointer checked:bg-custom-green-color checked:border-custom-green-color hover:border-custom-green-color'
                onChange={onChange}
                value={value}
            />
            <label htmlFor={id} className='text-lg max-[500px]:text-base'>{label}</label>
        </div>
    )
}

export default Checkbox
