'use client';

const Navbar = () => {
  const handleButtonClick = () => {};

  const goToHomePage = () => {};

  const goToPrivateSale = () => {};

  return (
    <nav className="flex items-center justify-between pt-5 px-2 md:px-10 bg-white">
      <h1 className="text-medium md:text-lg font-bold text-center ml-2">EBN</h1>
      <div className="flex items-center gap-x-3 md:gap-x-7 justify-center">
        <h2
          className="text-xs md:text-sm font-medium text-center cursor-pointer"
          onClick={goToHomePage}
        >
          Home
        </h2>
        <h2
          className="text-xs md:text-sm font-medium text-center cursor-pointer"
          onClick={goToPrivateSale}
        >
          Private Sale
        </h2>
        <button
          className="text-xs md:text-sm font-medium text-center py-2 px-4 bg-[#1D4ED8] text-white rounded-md cursor-pointer hover:bg-[#1D4ED8]/90"
          onClick={handleButtonClick}
        >
          Whitepaper
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
