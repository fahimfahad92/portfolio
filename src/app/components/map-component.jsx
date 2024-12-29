import ViewDetails from "./view-details-component";

export default function MapComponent({ title, mapData, isLink }) {
  if (isLink) {
    return (
      <>
        {Object.entries(mapData).map(([key, value]) => (
          <ViewDetails
            href={`/experience/${key}`}
            placeholder={value}
            key={key}
          />
        ))}
      </>
    );
  } else {
    return (
      <>
        <div className="pt-3">{title}</div>
        <div className="space-x-2 space-y-2">
          {Object.entries(mapData).map(([key, value]) => (
            <div
              className="inline-block rounded shadow bg-black text-white px-1 py-1 text-sm"
              key={key}
            >
              {value}
            </div>
          ))}
        </div>
      </>
    );
  }
}
