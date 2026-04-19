import ViewDetails from "./view-details-component";
import ViewDetailsExternal from "./view-details-external-component";

export default function LinkComponent({
                                          link,
                                          internal = false,
                                          external = false,
                                      }) {
    if (internal && link) {
        return <ViewDetails href={link}/>;
    }

    if (external && link) {
        return <ViewDetailsExternal href={link}/>;
    }

    return (
        <span
            className="inline-flex items-center px-3 py-1.5 rounded-lg text-sm font-medium text-gray-400 border border-gray-200 cursor-default select-none">
      Demo not available
    </span>
    );
}
