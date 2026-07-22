const MenuDropdown = () => {
  return (
    <div className="absolute right-0 top-14 w-[360px] bg-white rounded-3xl shadow-2xl border border-gray-200 overflow-hidden">
      <div className="flex items-center gap-3 px-6 py-5 hover:bg-gray-50 cursor-pointer">
        <span className="text-xl">❓</span>
        <span className="text-lg font-medium">Help Centre</span>
      </div>

      <hr />

      <div className="flex justify-between items-center px-6 py-5 hover:bg-gray-50 cursor-pointer">
        <div>
          <h3 className="font-semibold text-lg">Become a host</h3>

          <p className="text-sm text-gray-500">
            It's easy to start hosting and earn extra income.
          </p>
        </div>

        <img src="/image.png" alt="Host" className="w-16" />
      </div>

      <hr />

      <div className="px-6 py-5 hover:bg-gray-50 cursor-pointer text-lg">
        Refer a host
      </div>

      <div className="px-6 py-5 hover:bg-gray-50 cursor-pointer text-lg">
        Find a co-host
      </div>

      <hr />

      <div className="px-6 py-5 hover:bg-gray-50 cursor-pointer text-lg">
        Log in or sign up
      </div>
    </div>
  );
};

export default MenuDropdown;
