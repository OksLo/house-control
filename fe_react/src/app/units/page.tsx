import UnitsTable from '@/src/components/units/UnitsTable';

export default async function Units() {

    return (
        <>
            <h1 className="mb-6 text-2xl dark:text-zinc-50">Units</h1>
            <div className="overflow-x-auto overflow-y-auto max-h-[70vh] rounded-lg border border-zinc-200 dark:border-zinc-800">
                <UnitsTable/>
            </div>
        </>
    );
}
