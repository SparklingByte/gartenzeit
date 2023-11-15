import PageTitle from "@/components/ui/display/PageTitle";
import HarvestCreateForm from "./HarvestCreateForm";

export default function CreateHarvestPage() {
    return <main className="grid gap-6 p-5">
        <PageTitle title="Create a new harvest"></PageTitle>
        <HarvestCreateForm />
    </main>
}