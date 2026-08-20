const COLS = 7;
const ROWS = 8;

export default function Loading() {
    return (
        <div className="p-6">
            <div className="h-8 w-24 rounded bg-zinc-200 dark:bg-zinc-800 animate-pulse mb-6" />
            <div className="overflow-x-auto rounded-lg border border-zinc-200 dark:border-zinc-800">
                <table className="w-full text-sm">
                    <thead className="bg-zinc-100 dark:bg-zinc-900">
                        <tr>
                            {Array.from({ length: COLS }).map((_, i) => (
                                <th key={i} className="px-4 py-3">
                                    <div className="h-4 rounded bg-zinc-300 dark:bg-zinc-700 animate-pulse" />
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {Array.from({ length: ROWS }).map((_, row) => (
                            <tr
                                key={row}
                                className={row % 2 === 0
                                    ? 'bg-white dark:bg-black'
                                    : 'bg-zinc-50 dark:bg-zinc-950'}
                            >
                                {Array.from({ length: COLS }).map((_, col) => (
                                    <td key={col} className="px-4 py-3">
                                        <div className="h-4 rounded bg-zinc-200 dark:bg-zinc-800 animate-pulse" />
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
