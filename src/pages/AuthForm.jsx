import { useState } from 'react'
import Register from './Register'
import SignIn from './signIn'

export default function Authform() {

const [show, setShow] = useState(true);
return (
    <>
    {show ? <SignIn setShow={setShow} /> : <Register setShow={setShow} />}

    </>

)
}
