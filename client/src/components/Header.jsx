const Header = () => {
  return (
    <header>
      <h1 className="font-bold text-sm sm:text-xl flex flex-wrap">
        <span className="text-slate-500">Angello</span>
        <span className="text-slate-700">Estate</span>
      </h1>
      <div>
        <form>
          <input type="text" placeholder="Search" />
        </form>
      </div>
      <div>
        <ul>
          <li className="">Home</li>
          <li>About</li>
          <li>SignIn</li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
