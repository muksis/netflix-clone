import SavedMovies from "../components/SavedMovies";

const Account = () => {
  return (
    <>
     <div className="w-full  text-white">
      <img className="w-full h-[400px] object-cover" src="https://assets.nflxext.com/ffe/siteui/vlv3/5fd505fa-f425-4a18-b3cc-00dd2638f541/163803c4-de32-4f1f-9fd5-d28804b7549c/US-en-20220704-popsignuptwoweeks-perspective_alpha_website_medium.jpg" alt="background" />
      <div className="bg-black/60 fixed top-0 left-0 w-full h-[550px]"></div>
      <div className="absolute top-[20%] p-4 md:p-8">
        <h1 className="text-3xl md:text-5xl font-bold">My Favorites</h1>
      </div>
     </div> 
     <SavedMovies />
    </>
  );
};

export default Account;
