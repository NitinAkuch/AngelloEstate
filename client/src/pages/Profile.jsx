import { useState, useRef } from "react";
import { Link } from "react-router-dom";

const Profile = () => {
  const [formData, setFormData] = useState({});
  const fileRef = useRef();

  const handleChange = (e) => {
    e.preventDefault();
    setFormData(...formData, ([e.target.id] = e.target.value));
  };

  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl font-semibold text-center my-7">Profile</h1>
      <form className="flex flex-col gap-4">
        <input type="file" accept="image/*" ref={fileRef} hidden />
        <img
          src=""
          alt="profile"
          className="rounded-full h-24 w-24 object-cover cursor-pointer self-center mt-2"
          onClick={() => fileRef.current.click()}
        />
        <input
          type="text"
          id="username"
          placeholder="Username"
          className="border p-3 rounded-lg"
          onChange={handleChange}
        />
        <input
          type="email"
          id="email"
          placeholder="Email"
          className="border p-3 rounded-lg"
          onChange={handleChange}
        />
        <input
          type="password"
          id="password"
          placeholder="Password"
          className="border p-3 rounded-lg"
          onChange={handleChange}
        />
        <button className="bg-slate-700 text-white h-12 rounded-lg uppercase hover:opacity-95 disabled:opacity-80">
          Update
        </button>
        <Link
          to={"/create-listing"}
          className="bg-green-700 text-white p-3 h-12 text-center rounded-lg uppercase hover:opacity-95"
        >
          Create Listing
        </Link>
      </form>
      <div className="flex justify-between mt-5">
        <span className="text-red-700 cursor-pointer">Delete Account</span>
        <span className="text-red-700  cursor-pointer">Sign Out</span>
      </div>
    </div>
  );
};

export default Profile;
