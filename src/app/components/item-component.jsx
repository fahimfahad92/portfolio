export default function ItemComponent({ title, items }) {
  return (
    <>
      <div className="pt-1">{title}</div>
      <div className="space-x-1 space-y-2">
        {items.map((item) => (
          <div
            className="inline-block rounded shadow bg-black text-white px-1 py-1 text-sm"
            key={item}
          >
            {item}
          </div>
        ))}
      </div>
    </>
  );
}
