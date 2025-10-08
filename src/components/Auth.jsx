import { useState } from "react";
import {auth, googleProvider} from "../config/firebase"
import {createUserWithEmailAndPassword, signInWithPopup, signOut} from "firebase/auth"

const Auth = () => {
    // State to hold the email and password values
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const signIn=async()=>{
    
    try{
      await createUserWithEmailAndPassword(auth,email,password);
    } catch(err){
      console.error(err);
    }
    
  }

    const signInWithGoogle=async()=>{
    
    try{
      await signInWithPopup(auth,googleProvider);
    } catch(err){
      console.error(err);
    }
    
  }
      const logout=async()=>{
    
    try{
      await signOut(auth);
    } catch(err){
      console.error(err);
    }
    
  }
 console.log(auth?.currentUser?.photoURL)
  return (

  <>
      <div className="bg-gray-100 flex items-center justify-center min-h-screen font-sans">
      <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-2xl shadow-lg">
        
        {/* Header Section */}
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-800">Create Account</h1>
          <p className="mt-2 text-sm text-gray-600">
            Get started with your new account today.
          </p>
        </div>

        {/* Sign Up Form */}
        <form className="mt-8 space-y-6">
          <div className="rounded-md shadow-sm -space-y-px">
            {/* Email Input */}
            <div>
              
              <input
               
                name="email"
                type="email"
                autoComplete="email"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Email address"
                onChange={(e)=> setEmail(e.target.value)}

              />
            </div>
            {/* Password Input */}
            <div>
            
              <input
              
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Password"
                onChange={(e)=> setPassword(e.target.value)}

              />
            </div>
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-300"
              onClick={signIn}
            >
              Sign In
            </button>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-300"
              onClick={signInWithGoogle}
            >
              Sign In with Google
            </button>
             <button
              type="submit"
              className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-300"
              onClick={logout}
            >
              log out
            </button>
          </div>
        </form>
        


    
      </div>
    </div></>
  )
}

export default Auth
