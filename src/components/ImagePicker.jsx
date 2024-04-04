import React, { useState } from 'react';
import ImagePicker from 'react-image-picker-editor';

const ImgPick = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const handleImageChange = (image) => {
        setSelectedImage(image);
    };
    return (
        <div>
            
            <ImagePicker
                width={400}
                height={300}
                onPick={handleImageChange}
                allowCrop={true}
                cropAspectRatio={1}
                allowRotate={true}
                allowResize={true}
                outputType="blob"
                outputOptions={{ maxWidth: 400, maxHeight: 300 }}
            />
            {selectedImage && (
                <div>
                    <h2>Selected Image</h2>
                    <img src={URL.createObjectURL(selectedImage)} alt="Selected" style={{ maxWidth: '400px' }} />
                </div>
            )}
        </div>
    )
}

export default ImgPick
