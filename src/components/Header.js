import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex justify-between mx-4">
      <div className="logo-container">
        <Link to="/">
          <img
            className="w-40"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_7dTB1TMY7hSB03xQhnyCTOCLZMwZZY8cxg&usqp=CAU"
          />
        </Link>
      </div>
      <div className="flex items-center ">
        <ul className="flex px-4">
          <li className="px-4">
            <Link to="/"> Home</Link>
          </li>
          <li className="px-4">
            <Link to="/about"> About us</Link>
          </li>
          <li className="px-4">
            <Link to="/contact-us"> Contact Us</Link>
          </li>
          <li className="px-4">Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
