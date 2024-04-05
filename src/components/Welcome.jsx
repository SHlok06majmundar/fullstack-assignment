import Logo from "./Logo"
import ImgPick from "./ImagePicker"
export function Welcome() {
    return (

        <>
            <div className="main flex flex-col m-auto">

                <Logo></Logo>
                <div className="main flex m-auto flex-col">
                    <div className='flex flex-col gap-3'>
                        <h1 className='font-bold text-3xl'>Welcome! Let's create your profile</h1>
                        <p className="font-thin text-sm text-gray-500">Let others get to know you Better! You can do these Later</p>
                    </div>
                    <div className="image-bar">
                        <h1 className='font-bold pt-10 text-xl'>Add an Avatar</h1>
                    <div className="imagepicker pt-4">

                        <ImgPick />
                    </div>
                    </div>
                </div>

            </div>
        </>



    )




}