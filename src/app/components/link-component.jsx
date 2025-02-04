import ViewDetails from "./view-details-component";
import ViewDetailsExternal from "./view-details-external-component";

export default function LinkComponent({
  link,
  internal = false,
  external = false,
}) {
  if (internal && link) {
    return <ViewDetails href={link} />;
  }

  if (external && link) {
    return <ViewDetailsExternal href={link} />;
  }

  return (
    <div className="flex flex-wrap max-w-fit rounded shadow bg-slate-500 text-white px-2 py-1 text-sm items-center">
      <span>Demo Not Available (Internal)</span>
    </div>
  );
}
