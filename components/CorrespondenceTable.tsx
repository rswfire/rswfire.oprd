// components/CorrespondenceTable.tsx
import Link from "next/link";

type CorrespondenceItem = {
    id: string;
    date: string;
    recipient: string;
    description: string;
};

type Props = {
    items: CorrespondenceItem[];
    category: string;
};

export default function CorrespondenceTable({ items, category }: Props) {
    if (items.length === 0) {
        return (
            <div className="text-center text-gray-500 italic py-8">
                No correspondence in this category yet.
            </div>
        );
    }

    return (
        <div className="overflow-x-auto">
            <table className="min-w-full border-collapse border border-gray-300">
                <thead>
                <tr className="bg-gray-100">
                    <th className="border border-gray-300 px-4 py-2 text-left">Date</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Recipient</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Description</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">View</th>
                </tr>
                </thead>
                <tbody>
                {items.map((item) => (
                    <tr key={item.id}>
                        <td className="border border-gray-300 px-4 py-2">{item.date}</td>
                        <td className="border border-gray-300 px-4 py-2">{item.recipient}</td>
                        <td className="border border-gray-300 px-4 py-2">{item.description}</td>
                        <td className="border border-gray-300 px-4 py-2">
                            <Link
                                href={`/correspondence/${category}/${item.id}`}
                                className="text-emerald-700 underline hover:text-emerald-600"
                            >
                                View
                            </Link>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}