import React, { useState } from 'react'
import Logo from './Logo'
import Card from './Card'
import axios from 'axios'
import {useNavigate} from 'react-router-dom';
const SelectReason = ({ formData }) => {
    console.log(formData);
    const navigate=useNavigate();

    const [cardSelected, setCardSelected] = useState(false);
    const Handlesubmit = async () => {

        try {
            const [formData1, formData2] = formData;
            console.log(formData1.name);
            console.log(formData1.email);
            console.log(formData1.password);
            console.log(formData1.username);
            // Make a POST request to the database with formData1 and formData2
            const response = await axios.post('http://localhost:3000/api/reg/signupDribble', { name: formData1.name,email:formData1.email,password:formData1.email,username:formData1.username, image:formData2.image,location:formData2.location});
            console.log(response.data); // Log the response data
            // Optionally, handle the response data as needed

            // Reset the form or navigate to another page
        } catch (error) {
            console.error('Error:', error);
        }
        navigate('/emailverify')

    }
    const handleCardSelect = () => {
        setCardSelected(true);
    };
    return (

        <div className='container flex flex-col' >
            <Logo />
            <div className="text flex flex-col gap-2 justify-center m-auto" style={{ alignItems: "center" }}>

                <h1 className="text-3xl pt-2 m-auto font-bold text-center">What brings you to Dribble?</h1>
                <p className="font-thin pb-10 text-sm text-gray-500">Select the options that best Describe you. Don't worry, you can explore other options Later</p>
                <div className="grid pt-10 grid-cols-3 gap-3">

                    <Card className="h-20" src={"src/assets/1.png"} text={"I am a designer looking to share my work"} onSelect={handleCardSelect} />
                    <Card className="h-20" src={"src/assets/2.png"} text={"I am looking to hire a Designer"} onSelect={handleCardSelect} />
                    <Card className="h-20" src={"src/assets/3.png"} text={"I am Looking For Inspiration"} onSelect={handleCardSelect} />
                </div>
                <div className='text and button flex flex-col'>
                    <div className='Button pt-5 w-full'>
                        <button onClick={Handlesubmit} style={{ backgroundColor: "#EA4B8B" }} className={`${cardSelected ? "" : "opacity-60"} w-full pl-10 pr-10 text-white py-2 px-4 rounded-lg`}>
                            Finish
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SelectReason
