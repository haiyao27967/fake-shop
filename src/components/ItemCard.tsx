export default function ItemCard({ name, url }: { name: string; url: string }) {
  return (
    <div className="p-4 shadow-lg rounded min-w-fit">
      <img src={url} />
      <h1>{name}</h1>
      <p>price</p>
      <p>rating</p>
    </div>
  );
}
