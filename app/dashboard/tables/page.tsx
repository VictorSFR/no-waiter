import PlaceholderData from "@/app/lib/placeholder-data";
import DishesTable from "@/app/ui/dishes/dishes-table";
import TablesTable from "@/app/ui/tables/tables-table";
export default function Page() {
    return (
        <div>
            {<TablesTable tables={PlaceholderData.tables} />}
        </div>
    );
}