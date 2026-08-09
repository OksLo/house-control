import FlatsTable from '@/src/components/flats/FlatsTable';

export default async function Flats() {

    return (
        <>
            <h1 className="mb-6 text-2xl dark:text-zinc-50">Flats</h1>
            <div className="overflow-x-auto overflow-y-auto max-h-[70vh] rounded-lg border border-zinc-200 dark:border-zinc-800">
                <FlatsTable/>
            </div>
        </>
    );
}
