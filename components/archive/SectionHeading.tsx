// components/archive/SectionHeading.tsx
export default function SectionHeading({ children }: { children: React.ReactNode }) {
    return (
        <h2 className="text-2xl font-bold mt-12 mb-4 text-slate-900">
            {children}
        </h2>
    );
}