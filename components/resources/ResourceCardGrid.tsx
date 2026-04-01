// components/resources/ResourceCardGrid.tsx
import { ReactNode } from "react";

type ResourceCardGridProps = {
    columns?: 2 | 3;
    children: ReactNode;
};

export default function ResourceCardGrid({ columns = 3, children }: ResourceCardGridProps) {
    return (
        <div className={`grid grid-cols-1 ${columns === 2 ? "md:grid-cols-2" : "md:grid-cols-3"} gap-4 mt-8`}>
            {children}
        </div>
    );
}
