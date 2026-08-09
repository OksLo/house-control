import OwnersTable from '@/src/components/owners/OwnersTable';

export default async function Owners() {
    return (
        <>
            <h1 className="mb-6 text-2xl dark:text-zinc-50">Owners</h1>
            <OwnersTable />
        </>
    );
}
