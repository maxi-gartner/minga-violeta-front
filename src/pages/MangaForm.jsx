import Select from '../components/Select.jsx'

export default function MangaForm() {
    return (
            <div className='p-32 sm:p-10 h-screen sm:h-[84vh] flex flex-col justify-center items-center gap-12'>
                <div className='h-full'>
                    <div className='text-center pb-12'>
                        <p className='text-2xl '>New Manga</p>
                    </div>
                    <div className='flex flex-col text-left gap-y-4'>
                        <div>
                            <input className='border-b-2 border-gray-400' type="text" placeholder='Insert title' id='title-manga' />
                        </div>

                        <div>
                            <Select />
                        </div>

                        <div>
                            <input className='border-b-2 border-gray-400' type="text" placeholder='Insert description' id='description-manga' />
                        </div>
                        <button className='bg-gradient-to-b from-[#F9A8D4] to-[#F472B6] gap-y-12 h-10 mt-10 rounded-full text-white font-bold'>Send</button>
                    </div>
                </div>
            </div>
            )}