import { useEffect, useState } from "react";

const LeftSideNav = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("categories.json")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);
  console.log(categories.name);

  return (
    <div>
      <h2 className="text-2xl text-center font-semibold">All Categories</h2>
      {categories.map((category) => {
        <h2 key={category.id} className="text-2xl">
          category Name: {category.name}
        </h2>;
      })}
    </div>
  );
};

export default LeftSideNav;
