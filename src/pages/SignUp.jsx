import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <>
      <div className="w-full h-screen">
        <img className="hidden sm:block absolute w-full h-full object-cover" src="https://assets.nflxext.com/ffe/siteui/vlv3/5fd505fa-f425-4a18-b3cc-00dd2638f541/163803c4-de32-4f1f-9fd5-d28804b7549c/US-en-20220704-popsignuptwoweeks-perspective_alpha_website_medium.jpg" alt="background" />
        <div className="bg-black/60 fixed top-0 left-0 w-full h-screen">
          <div className="fixed w-full px-4 py-24 z-50">
            <div className="max-w-[450px] h-[600px] mx-auto bg-black/75 text-white">
              <div className="max-w-[320px] mx-auto py-16">
                <h1 className="text-3xl font-bold ">Sign Up</h1>
                <form className="w-full flex flex-col py-4">
                  <input className="p-3 my-2 bg-gray-700 rounded" type="email" placeholder="Email" />
                  <input className="p-3 my-2 bg-gray-700 rounded" type="password" placeholder="Password" />
                  <button className="bg-red-600 py-3 my-6 rounded font-bold">Sign Up</button>
                  <div className="flex justify-between items-center text-sm text-gray-600">
                    <p>
                      <input className="mr-2" type="checkbox" />Remember me
                    </p>
                    <p>Need Help?</p>
                  </div>
                  <p className="py-8">
                    <span className="text-gray-600">
                      Already subscribed to Netflix?
                    </span>
                    <Link to="/sign-in">Sign In</Link>   
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignUp;