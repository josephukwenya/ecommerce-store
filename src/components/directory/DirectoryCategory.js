import "./directoryCategory.scss";
import CategoryItem from "../categoryItem/CategoryItem";

function DirectoryCategory({ categories }) {
  return (
    <div className="categories-container">
      {categories.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </div>
  );
}

export default DirectoryCategory;
