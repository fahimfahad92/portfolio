import SectionLabel from "./section-label";
import TagPill from "./tag-pill";
import ViewDetails from "./view-details-component";

export default function MapComponent({ title, mapData, isLink, linkPrefix }) {
    if (!mapData || Object.keys(mapData).length === 0) return null;

    return (
        <div>
            <SectionLabel>{title}</SectionLabel>
            <div className="flex flex-wrap gap-1.5">
                {Object.entries(mapData).map(([key, value]) =>
                    isLink ? (
                        <ViewDetails
                            key={key}
                            href={`/${linkPrefix}/${key}`}
                            placeholder={value}
                        />
                    ) : (
                        <TagPill key={key} label={value} />
                    )
                )}
            </div>
        </div>
    );
}