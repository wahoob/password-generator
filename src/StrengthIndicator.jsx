import React from 'react'

const StrengthIndicator = ({ strength }) => {
    const strengthLevels = {
        'strong': ['border-custom-green-color bg-custom-green-color', 'border-custom-green-color bg-custom-green-color', 'border-custom-green-color bg-custom-green-color', 'border-custom-green-color bg-custom-green-color'],
        'medium': ['border-medium bg-medium', 'border-medium bg-medium', 'border-medium bg-medium', ''],
        'weak': ['border-weak bg-weak', 'border-weak bg-weak', '', ''],
        'too-weak': ['border-too-weak bg-too-weak', '', '', '']
    }

    const bars = strengthLevels[strength] || ['', '', '', '']

    return (
        <div className='flex items-center gap-2'>
            <p className='font-bold text-2xl uppercase max-[500px]:text-lg'>{strength}</p>
            {bars.map(bar => <div className={`w-3 h-8 border-2 ${bar}`}></div>)}
        </div>
    )
}

export default StrengthIndicator
