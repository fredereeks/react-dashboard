import React from 'react'
import { IoCameraOutline } from 'react-icons/io5';
import { flight_lions } from '../assets/images';

export default function Home() {
  const [upload, setUpload] = React.useState(null)

  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    const fileReader = new FileReader()
    fileReader.readAsDataURL(file)
    new Promise(res => {
      const timer = setTimeout(() => {
        const newImage = fileReader.result;
        setUpload(newImage)
        clearTimeout(timer)
      }, 2000)
      return res;
    })
  }

  const handleSubmit = async(e) => {
    e.preventDefault();
  }
  return (
    <main className="flex flex-col py-5 w-full flex-1">
      <div className="flex justify-between items-center py-20 rounded-lg dark:bg-slate-500 dark:grayscale relative z-10 shadow-lg overflow-hidden after:bg-pink-500/50 after:absolute after:w-full after:h-full after:left-0 after:top-0">
        <img src={flight_lions} alt={`Frederick Jones`} className="opacity-60 absolute left-0 top-0 object-cover object-center w-full h-full" />
      </div>
      <section className="flex flex-1 w-full -mt-10 mx-auto max-w-[95%] z-50 pt-5 pb-10 bg-white dark:bg-[#fcfcfc] h-auto rounded-lg shadow-xl">
        <form onSubmit={handleSubmit} className="flex flex-col gap-2 w-full">
          <div className="flex justify-between items-center gap-3 pb-6">
            <div className="pr-1 py-2 w-full flex gap-3 items-center p-3 sm:p-5 relative after:absolute after:left-1/2 after:-translate-x-1/2 after:top-full after:w-full after:h-[1px] after:bg-gradient-to-r after:from-transparent after:to-transparent after:via-slate-200 dark:after:via-slate-600">
              <div className="h-10 sm:h-16 w-10 sm:w-16 rounded-md relative bg-cyan-400 dark:bg-slate-600/50">
                <img src={flight_lions} alt={`Frederick Jones`} className="absolute left-0 top-0 object-cover rounded-md h-10 sm:h-16 w-10 sm:w-16" />
                <label htmlFor="image" className='h-5 w-5 bg-white shadow-2xl shadow-slate-700 rounded-full absolute -bottom-1 -right-1 grid place-items-center text-slate-700/50 cursor-pointer z-20 border border-slate-700/50'>
                  <IoCameraOutline className='text-inherit text-xs' />
                  <input type="file" name="image" id="image" onChange={handleFileUpload} className="hidden" />
                </label>
              </div>
              <div className="flex flex-col flex-1 dark-text">
                <h3 className="text-sm sm:text-lg md:text-xl font-medium leading-none">Frederick Jones</h3>
                <p className="text-xs sm:text-sm opacity-50 font-light leading-tight">jonesdoe@gmail.com</p>
              </div>
            </div>
            {upload ? 
            <img src={upload} alt={`New Profile Preview`} className="relative right-4 bg-white shadow-lg object-cover rounded-md h-10 sm:h-16 w-10 sm:w-16" /> :
            <span className="relative right-4 bg-white shadow-lg object-cover rounded-md h-10 sm:h-16 w-10 sm:w-16 text-xs dark-text grid place-items-center text-center">Profile Image Preview</span> 
            }
          </div>
          {/* <h3 className="py-4 text-lg sm:text-xl md:text-2xl darker-text font-bold text-center">Umar Peruzzi's Profile</h3> */}
          <div className="grid sm:grid-cols-2 gap-2 sm:gap-4 items-center w-full px-4 md:px-6 mx-auto">
            <div className="flex flex-col gap-1 flex-1">
              <label htmlFor='firstname' className="dark-text font-normal text-xs sm:text-sm leading-none">First Name <span className="-mt-2 text-xs text-red-500 dark:text-red-300">*</span></label>
              <input type="text" required id='firstname' defaultValue={'Umar'} className="bg-transparent text-xs sm:text-sm outline-none darker-text py-1 sm:py-2 px-3 rounded-md border border-slate-400/50" />
            </div>
            <div className="flex flex-col gap-1 flex-1">
              <label htmlFor='lastname' className="dark-text font-normal text-xs sm:text-sm leading-none">Last Name <span className="-mt-2 text-xs text-red-500 dark:text-red-300">*</span></label>
              <input type="text" required id='lastname' defaultValue={'Peruzzi'} className="bg-transparent text-xs sm:text-sm outline-none darker-text py-1 sm:py-2 px-3 rounded-md border border-slate-400/50" />
            </div>
            <div className="flex flex-col gap-1 flex-1">
              <label htmlFor='username' className="dark-text font-normal text-xs sm:text-sm leading-none">Username <span className="-mt-2 text-xs text-red-500 dark:text-red-300">*</span></label>
              <input type="text" required id='username' minLength={6} defaultValue={'perrozumar'} className="bg-transparent text-xs sm:text-sm outline-none darker-text py-1 sm:py-2 px-3 rounded-md border border-slate-400/50" />
            </div>
            <div className="flex flex-col gap-1 flex-1">
              <label htmlFor='email' className="dark-text font-normal text-xs sm:text-sm leading-none">Email <span className="-mt-2 text-xs text-red-500 dark:text-red-300">*</span></label>
              <input type="email" required id='email' defaultValue={'perrozumar@gmail.com'} className="bg-transparent text-xs sm:text-sm outline-none darker-text py-1 sm:py-2 px-3 rounded-md border border-slate-400/50" />
            </div>
            <div className="flex flex-col gap-1 flex-1">
              <label htmlFor='password' className="dark-text font-normal text-xs sm:text-sm leading-none">Password <span className="-mt-2 text-xs text-red-500 dark:text-red-300">(Leave empty to keep current password)</span></label>
              <input type="password" required id='password' defaultValue={'Do NOT Pry!'} className="bg-transparent text-xs sm:text-sm outline-none darker-text py-1 sm:py-2 px-3 rounded-md border border-slate-400/50" />
            </div>
            <div className="flex flex-col gap-1 flex-1">
              <label htmlFor='verify-password' className="dark-text font-normal text-xs sm:text-sm leading-none">Confirm Changes <span className="-mt-2 text-xs text-red-500 dark:text-red-300">(Enter your current password)</span></label>
              <input type="password" required id='verify-password' placeholder={'Enter Currrent Password'} className="bg-transparent text-xs sm:text-sm outline-none darker-text py-1 sm:py-2 px-3 rounded-md border border-slate-400/50" />
            </div>
            <button type="submit" className="text-gray-50 bg-red-500 rounded-[2rem] w-max mt-2 px-4 sm:px-8 py-2 text-xs sm:text-sm shadow-lg cursor-pointer shadow-red-500">Save Changes</button>
          </div>
        </form>
      </section>
    </main>
  )
}
