import connectToDB from "@/lib/connect";
import { revalidatePath } from "next/cache";
import React from "react";
import shortid from "shortid";
import slugify from "slugify";
import SubmitButton from "../sub";

const Add = () => {
  return (
    <form
      action={async (formData) => {
        "use server"
        const db = await connectToDB();
        const collection = db.collection("categori");

        const name = formData.get("name");
        const categoryObj = {
          name: name,
          slug: `${slugify(name)}-${shortid.generate()}`,
        };
        const cate = await collection.insertOne(categoryObj);
        console.log({cate});
        revalidatePath("/demo");
      }}
    >
      <input type="text" name="name" />
      <SubmitButton />
    </form>
  );
};

export default Add;
