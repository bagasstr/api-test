import Image from "next/image";

const getData = async () => {
  const res = await fetch("http://localhost:4000/data");
  return res.json();
};

export default async function Home() {
  const data = await getData();
  return (
    <>
      <div>
        {data.map((item) => (
          <div className="">
            <h1>{item.title}</h1>
            <h1>{item.price}</h1>
            <h1>{item.area}</h1>
          </div>
        ))}
      </div>
    </>
  );
}
