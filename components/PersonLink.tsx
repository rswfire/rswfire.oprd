// components/PersonLink.tsx
//
// The key-individuals pages were removed. The component stays because the
// timeline and the evidence pages call it by name; with no destinations left
// it renders the label as plain text.

interface PersonLinkProps {
    name: string;
    label?: string;
}

export default function PersonLink({ name, label }: PersonLinkProps) {
    return <span>{label ?? name}</span>;
}
