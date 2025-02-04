import ViewDetails from "./view-details-component";

export default function MapComponent({ title, mapData, isLink, linkPrefix }) {
  if (isLink) {
    return (
      <>
        <div className="pt-3">{title}</div>
        <div className="flex flex-row space-x-2 ">
          {Object.entries(mapData).map(([key, value]) => (
            <ViewDetails
              href={`/${linkPrefix}/${key}`}
              placeholder={value}
              key={key}
            />
          ))}
        </div>
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
