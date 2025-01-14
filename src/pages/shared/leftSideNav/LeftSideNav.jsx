import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LeftSideNav = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("categories.json")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setCategories(data);
      });
  }, []);

  return (
    <div className="space-y-3 ml-4 font-semibold">
      <h2 className="text-2xl ">All Categories: {categories.length}</h2>

      {categories.map((category) => (
        <Link
          className="block ml-4 font-semibold px-4"
          key={category.id}
          to={`category/${category.id}`}
        >
          {category?.name}
        </Link>
      ))}
    </div>
  );
};

export default LeftSideNav;
