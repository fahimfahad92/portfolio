export default function ListComponent({ title, listData }) {
  return (
    <>
      <div className="font-bold">{title}</div>
      <ul className="list-disc pl-5">
        {listData.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
}
