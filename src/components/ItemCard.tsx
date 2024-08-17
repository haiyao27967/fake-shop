import { MdOutlineStar, MdOutlineStarHalf, MdStarOutline } from 'react-icons/md';

export default function ItemCard({ name, url }: { name: string; url: string }) {
  function randomRating(max = 5) {
    return Math.random() * max;
  }

  function ratingToArray(score: number) {
    const integerPart = Math.floor(score);
    const fractionalPart = score - integerPart;

    const result = Array(5).fill(0);

    for (let i = 0; i < integerPart; i++) {
      result[i] = 1;
    }
    result[integerPart] = fractionalPart;

    return result;
  }

  return (
    <div className="flex flex-col gap-1 p-4 shadow rounded min-w-fit border-2">
      <img src={url} />
      <h1 className="font-semibold">{name}</h1>
      <p>$0</p>
      <div className="flex">
        {ratingToArray(randomRating()).map((i) => {
          if (i === 1) {
            return <MdOutlineStar size={24} />;
          } else if (i >= 0.5) {
            return <MdOutlineStarHalf size={24} />;
          } else {
            return <MdStarOutline size={24} />;
          }
        })}
      </div>
    </div>
  );
}
