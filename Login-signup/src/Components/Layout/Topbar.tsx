import { useState, useRef, useEffect } from "react";
import AuthStore from "../../store/AuthStore";
import { Link, useNavigate } from "react-router";

function Topbar() {
  const [open, setOpen] = useState(false);

  const clearUser = AuthStore(
    (state) => state.clearUser
  );

  const navigate = useNavigate();

  const dropdownRef =
    useRef<HTMLDivElement | null>(null);

  const user = JSON.parse(
    localStorage.getItem("user") || "{}"
  );

  const handleLogout = () => {
    localStorage.removeItem("token");

    localStorage.removeItem("user");

    clearUser();

    navigate("/login", {
      replace: true,
    });
  };

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(
          e.target as Node
        )
      ) {
        setOpen(false);
      }
    };

    document.addEventListener(
      "mousedown",
      handleClick
    );

    return () => {
      document.removeEventListener(
        "mousedown",
        handleClick
      );
    };
  }, []);

  return (
    <div
      className="relative flex items-center gap-3"
      ref={dropdownRef}
    >
      <div className="hidden sm:block text-right">
        <p className="font-semibold">
          {user.name}
        </p>

        <p className="text-sm text-gray-500 capitalize">
          {user.role}
        </p>
      </div>

      <img
        src="https://static.vecteezy.com/system/resources/previews/005/544/718/original/profile-icon-design-free-vector.jpg"
        alt="Profile"
        className="w-10 h-10 rounded-full cursor-pointer border"
        onClick={() => setOpen(!open)}
      />

      {open && (
        <div className="absolute right-0 top-12 w-44 bg-white rounded-sm border shadow-lg overflow-hidden z-50">
          
          <Link
            to="/profile"
            className="block px-5 py-3 hover:bg-gray-100 border-b"
            onClick={() => setOpen(false)}
          >
            View Profile
          </Link>

          <button
            onClick={handleLogout}
            className="w-full text-left px-5 py-3 hover:bg-gray-100 text-red-600"
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
}

export default Topbar;