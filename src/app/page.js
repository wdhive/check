import connectToDB from "@/lib/connect";
import Link from "next/link";
const getCategories = async () => {
  try {
    const db = await connectToDB();
    const collection = db.collection("categories");

    const category = await collection.find({}).toArray();
    return category;
  } catch (err) {
    return err.message;
  }
};
export default async function Home() {
  const data = await getCategories();
  return (
    <main>

      <Link href="/add-cate"> cate</Link>
      {data.map((item, i) => (
        <div className="flex flex-col gap-4" key={i}>
          {item.name}
        </div>
      ))}
    </main>
  );
}
