import React, { useState } from 'react';
import ImagePicker from 'react-image-picker-editor';

const ImgPick = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    const handleImageChange = (image) => {
        setSelectedImage(image);
    };

    return (
        <div className="flex items-center">
            {/* Round div with selected image as background */}
            <div className={`w-40 h-40 rounded-full border-2 border-gray-300 overflow-hidden relative ${selectedImage ? '' : 'border-dashed'}`}>
                {selectedImage && (
                    <img src={URL.createObjectURL(selectedImage)} alt="Selected" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                )}
                {/* SVG placeholder */}
                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${selectedImage ? 'hidden' : 'block'}`}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z" />
                </svg>
            </div>

            {/* Button to select image */}
            <label htmlFor="fileInput" className="ml-4 cursor-pointer">
                <p className='border pt-2 pl-4 pr-4 pb-2 rounded-lg' style={{ width: "150px" }}>Choose Image</p>
                <p className="flex m-auto font-thin text-sm text-gray-500"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                </svg>
                    Or choose one of our Defaults</p>

            </label>
            <input id="fileInput" type="file" accept="image/*" style={{ display: 'none' }} onChange={(e) => handleImageChange(e.target.files[0])} />
        </div>
    )
}

export default ImgPick;
