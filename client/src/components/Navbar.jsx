import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { selectIsAuthenticated, setLogout } from "../redux/slices/authslice";
import assets from "../assets/assets";

const Navbar = () => {
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const dispatchToRedux = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatchToRedux(setLogout());
    navigate("/");
  };

  return (
    <nav className="bg-gray-800 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link
              to="/"
              className="text-xl font-bold hover:text-white transition"
            >
              <img src={assets.logo} alt="Logo" className="h-12" />
            </Link>
          </div>

          <div className="flex items-center space-x-8">
            <Link to="/" className="text-white hover:text-white transition">
              Home
            </Link>

            {!isAuthenticated ? (
              <>
                <Link
                  to="/login"
                  className="text-white hover:text-white transition"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="text-white hover:text-white transition"
                >
                  Register
                </Link>
              </>
            ) : (
              <>
                <Link
                  to="/employee"
                  className="text-white hover:text-white transition"
                >
                  Employee
                </Link>
                <button
                  onClick={handleLogout}
                  className="text-white hover:text-white transition cursor-pointer"
                >
                  Logout
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
