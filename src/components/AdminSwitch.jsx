import axios from 'axios';
import { useState } from 'react';

export default function AdminSwitch({ author, company, url, params }) {
    let token = localStorage.getItem('token')
    let headers = {headers:{'Authorization' : `Bearer ${token}`}}

    const [isOn, setIsOn] = useState(author?.active || company?.active);

    function handleSwitch() {
        let data = {
            active: !isOn,
        };
        setIsOn(!isOn);
        axios.put(`${url}${params}`, data, headers)
            .then(res => {
                console.log(res)
            })
            .catch(error => {
                console.log(error)
            });
    }

    return (
        <button type="button" onClick={handleSwitch} className={`flex relative w-5 h-3 rounded-full transition-colors duration-300 ${isOn ? 'bg-pink-400' : 'bg-gray-400'}`} >
            <span className={`absolute inset-0 w-[0.5rem] h-[0.5rem] mt-[1.6px] ml-[0.12rem] bg-white rounded-full transition-transform duration-300 ${isOn ? 'transform translate-x-full' : ''}`} />
        </button>
    );
}