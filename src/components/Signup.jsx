export default function Signup(){
    return (
        <>
          <div className="main flex h-screen w-screen">
    
            <div className="left w-[33%] h-full ">
              <img src="src\assets\drib.png" alt="" className="h-full w-full" />
            </div>
    
            <div className="right w-[67%] h-full pr-5 pt-5 flex-col">
              <div className="upper flex justify-end font-normal ">Already a Member? <span className="text-blue-600">Signin</span></div>
    
              <div className="formSignup flex flex-col gap-10 w-[80%] text-left">
                <h1 className='font-black flex-grow p-40 pt-20 pb-0 text-2xl'>Sign Up to Dribble</h1>
                <div className="2inputs flex flex-row pl-40 pb-0 justify-between w-full">
                  <h2 className='font-semibold w-1/2'>Name <br /> <input className="font-normal p-2 text-normal w-1/2 bg-slate-200 rounded-lg" type="text" /></h2>
                  <h2 className='font-semibold w-1/2'>Username <br />  <input className="font-normal p-2 text-normal w-1/2  bg-slate-200 rounded-lg" type="text" /></h2>
                </div>
                <div className="email_password flex flex-col gap-10 w-full pl-40 pb-0">
                  <div className="email">
                    <h2 className='font-semibold w-full'>Email<br /> <input className="font-normal p-2 text-normal w-full  bg-slate-200 rounded-lg" type="text" /></h2>
                  </div>
                  <div className="Password">
                    <h2 className='font-semibold w-full'>Password<br /> <input placeholder='6+ Characters' className="font-normal  text-normal w-full p-2 bg-slate-200 rounded-lg" type="text" /></h2>
                  </div>
                  <div className="flex items-center mb-4">
                    <input id="default-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-100 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-100" />
                    <label htmlFor="default-checkbox" className="ms-2 text-sm font-medium">
                      Creating an Account means you're okay with our
                      <span className="text-blue-600"> Terms Of Service</span>,
                      <span className="text-blue-600"> Privacy Policy</span>,
                      and our default
                      <span className="text-blue-600"> Notification Settings</span>
                    </label>
                  </div>
                  <div className='Button'>
                    <button style={{backgroundColor:"#EA4B8B"}} className=" text-white font-bold py-2 px-4 rounded-lg">
                      Create Account
                    </button>
                  </div>
                  <p className='text-slate-800 text-sm'>This Site is protected by reCAPTCHA and the Google <br /><span className="text-blue-600">Policy</span> and <span className="text-blue-600"> Terms Of Service</span> Apply </p>
                </div>
              </div>
            </div>
          </div>
    
        </>
      )
}