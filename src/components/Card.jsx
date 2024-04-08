import React, { useState } from 'react'

const Card = ({ src, text, onSelect }) => {
    const [selected, setSelected] = useState(false);

    const toggleSelected = () => {
        onSelect()
        setSelected(!selected);
    };
    return (
        <div>
            <div style={{ maxWidth: '300px', maxHeight:"500px" }} className={`relative  flex border-2 flex-col h-full justify-center text-center p-4 rounded-lg ${selected ? 'border-pink-500' : 'border-gray-100'}`}>
                <img src={src} alt={text} />
                <p className='font-bold'>{text}</p>
                
                <div className="flex justify-center">
                    <button 
                        className={`h-6 w-6 border-2 rounded-full ${selected ? 'bg-pink-500 border-pink-500' : ''}`}
                        onClick={toggleSelected}
                    >
                        {selected && <svg width="800px" className="h-10 w-10 text-white" viewBox='0 0 28 28' fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M11.3904 5.31232L7.07178 10.7106L3.67991 7.88408L4.32009 7.11586L6.92822 9.2893L10.6096 4.68762L11.3904 5.31232Z" fill="#ffffff" />
                        </svg>
                        }
                    </button>
                   
                </div>
            </div>
        </div>
    )
}

export default Card
