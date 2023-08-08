import Image from "next/image";

const getData = async () => {
  const res = await fetch(`${process.env.API_URL}/data`);
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
