import React from 'react'
import Navbar from './Navbar'
import {Resend} from "resend"
const resend = new Resend('re_4u9RNLfk_2SHLnKMvGzSP4KMVbtKr8Yut');
import { useEffect } from 'react';
const Email = ({ formData, email }) => {
    useEffect(async() => {
        // Logic to send the confirmation email
        await resend.emails.send({
            from: 'onboarding@resend.dev',
            to: email ? email : 'accountferror@design.com',
            subject: 'Confirmation Email',
            html: '<p>Please confirm your email address to begin using Dribble.</p>'
        });
    }, [email]);

    return (
        <div>
            <Navbar formData={formData} />
            <div className="flex flex-col justify-center pt-8" style={{ alignItems: "center" }}>

                <h1 className='text-4xl font-bold'>Please Verify your Email </h1>
                <svg fill="#6B7280" className='h-[72px] w-[72px]' viewBox="0 0 36 36" version="1.1" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                    <title>email-solid</title>
                    <path class="clr-i-solid clr-i-solid-path-1" d="M32.33,6a2,2,0,0,0-.41,0h-28a2,2,0,0,0-.53.08L17.84,20.47Z"></path><path class="clr-i-solid clr-i-solid-path-2" d="M33.81,7.39,19.25,21.89a2,2,0,0,1-2.82,0L2,7.5a2,2,0,0,0-.07.5V28a2,2,0,0,0,2,2h28a2,2,0,0,0,2-2V8A2,2,0,0,0,33.81,7.39ZM5.3,28H3.91V26.57l7.27-7.21,1.41,1.41Zm26.61,0H30.51l-7.29-7.23,1.41-1.41,7.27,7.21Z"></path>
                    <rect x="0" y="0" width="36" height="36" fill-opacity="0" />
                </svg>
                <p className="font-thin text-md text-gray-500">Please Verify your email address, we have Sent a confirmation email to:</p>
                <p className="font-thin text-md pt-3">{email ? email : "accountferror@design.com"}</p>
                <p className="font-thin text-md text-gray-500">Click the confirmation link in that email to begin using Dribble</p>
                <div className="text-center">
                    <p className="font-thin text-md text-gray-500">
                        Didn't Receive the Email? Check your spam Folder, it might have been caught by a filter. If <br />
                        You still don't see it, <span style={{ color: "#EA4B8B" }}>Resend the confirmation email</span>
                    </p>
                </div>
                <p className="font-thin text-md text-gray-500">Wrong Email Address? <span style={{ color: "#EA4B8B", display: "block", textAlign: "center" }}>Change it</span></p>

            </div>

        </div>
    )
}

export default Email
