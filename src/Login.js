import React from 'react'


function Login() {

    function goDashboard(e){
        e.preventDefault();
        alert("Login Successful");
        window.location.href="/dashboard";
    }
  return (
    <div className='m-2 text-center'>   
        <form onSubmit={goDashboard}>
            <h1 className='text-2xl font-bold'>Login</h1>
            <input type="email" placeholder='Enter email' className='p-2 my-2 rounded-lg outline-none bg-slate-300 text-white' required />
            <br />
            <input type="password" placeholder='Enter password' className='p-2 my-2 rounded-lg outline-none bg-slate-300 text-white' required />
            <br />
            <button type='submit' className='px-3 py-2 rounded-md text-white bg-blue-600'>Login</button>
        </form>
    </div>
  )
}

export default Login