import React from 'react';
import { Link as Anchor } from 'react-router-dom'

export default function NewRole() {
    return (
        <div className="flex h-screen text-pink-400">
            <div className="bg-white w-full sm:w-1/2 flex justify-center items-center flex-col gap-4">
                <p className='font-montserrat font-normal text-xl '>Change role to</p>
                <img src="/Logo.png" className="h-[10vh] my-2" alt="background" />
                <Anchor to="/AuthorRegister/author-form" className='w-[70%] flex justify-center'>
                    <label htmlFor="author" className="flex justify-center items-center h-[24vh] md:h-[18vh] lg:h-[10vh] w-full cursor-pointer text-center border-2 border-gray-200 rounded-lg md:flex md:justify-center lg:justify-between lg:text-start hover:border-pink-400 active:border-3 active:border-pink-400">
                        <div className="flex">
                            <img src="/newRolePersonas1.png" className="lg:inline-block w-20 h-9 self-center m-2" />
                            <div className="m-2">
                                <h1 className="font-bold">Join as an Author!</h1>
                                <p className="text-sm">I'm a reader writting a manga</p>
                            </div>
                        </div>
                    </label>
                </Anchor>
                <Anchor to="/CompanyForm/CompanyForm" className='w-[70%] flex justify-center'>
                    <label htmlFor="company" className="flex justify-center items-center h-[24vh] md:h-[18vh] lg:h-[10vh] w-full cursor-pointer text-center border-2 border-gray-200 rounded-lg md:flex md:justify-center lg:justify-between lg:text-start hover:border-pink-400 active:border-3 active:border-pink-400">
                        <div className="flex">
                            <img src="/newRolePersonas2.png" className="lg:inline-block w-20 h-9 self-center m-2" />
                            <div className="m-2">
                                <h1 className="font-bold">Join as an Company!</h1>
                                <p className="text-sm">I'm a company and i want to publish my comics</p>
                            </div>
                        </div>
                    </label>
                </Anchor>
            </div>
            <div className='hidden sm:flex sm:flex-col h-screen w-1/2 bg-newRole-bg bg-no-repeat bg-center bg-cover'>
                <p className='text-white font-montserrat font-medium text-2xl leading-7	mt-[15vh] px-[10%]'>Minga.com is the best place to find manga reviews. We’ve been super impress by the quality of applicants.</p>
                <p className='text-white font-montserrat font-normal text-base leading-5 mt-[15vh] px-[10%]'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="text-white/50 w-6 h-6 inline-block">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15" />
                    </svg>
                    Ignacio Borraz
                </p>

            </div>
        </div>
    )
}