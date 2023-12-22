import Add from "@/component/forms/add";
import connectToDB from "@/lib/connect";
import React from "react";
const getCategories = async () => {
  const db = await connectToDB();
  const collection = db.collection("categori");

  const category = await collection.find({}).toArray();
  return category;
};
const DemoPage = async () => {
  const categories = await getCategories();
  console.log(categories);
  return (
    <div>
      {categories.map((category) => (
        <pre key={category._id.toString()}>
          {category.name}
          {category.slug}
          {category.parentId}
        </pre>
      ))}

      <Add />
    </div>
  );
};

export default DemoPage;
