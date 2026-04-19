import TagPill from "./tag-pill";
import SectionLabel from "./section-label";

export default function ItemComponent({ title, items }) {
    if (!items?.length) return null;

    return (
        <div>
            <SectionLabel>{title}</SectionLabel>
            <div className="flex flex-wrap gap-1.5">
                {items.map((item) => (
                    <TagPill key={item} label={item} />
                ))}
            </div>
        </div>
    );
}