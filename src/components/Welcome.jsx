import Logo from "./Logo";
import ImgPick from "./ImagePicker";
import {useNavigate} from 'react-router-dom';

export function Welcome({ formData, handleChange, handleImageChange }) {
    const navigate=useNavigate();
    const nextPage=()=>{
        navigate('/selectReason');
      }
    return (
        <>
            <div className="main flex flex-col m-auto">
                <Logo />
                <div className="main flex m-auto flex-col">
                    <div className='flex flex-col gap-3'>
                        <h1 className='font-bold text-3xl'>Welcome! Let's create your profile</h1>
                        <p className="font-thin text-sm text-gray-500">Let others get to know you Better! You can do these Later</p>
                    </div>
                    <div className="image-bar">
                        <h1 className='font-bold pt-10 text-xl'>Add an Avatar</h1>
                        <div className="imagepicker pt-4">
                            <ImgPick handleImageChange={handleImageChange} />
                        </div>
                        <div className="flex flex-row pb-0 justify-between w-full">
                            <h2 className='font-semibold w-full'>Location <br /> <input placeholder="Add your Location" className="font-normal p-2 text-bold w-1/2rounded-lg" type="text" name="location" value={formData.location} onChange={handleChange} /></h2>
                        </div>
                        <div className='Button pt-5 w-500'>
                            <button style={{ backgroundColor: "#EA4B8B" }} onClick={nextPage} className="w-1/2 text-white py-2 px-4 rounded-lg">
                               Next
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
