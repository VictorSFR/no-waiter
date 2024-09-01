import PlaceholderData from "@/app/lib/placeholder-data";
import DishesTable from "@/app/ui/dishes/dishes-table";
import { fetchDishes } from '@/app/lib/data';

export default function Page() {
    return (
        <div>
            {<DishesTable dishes={PlaceholderData.dishes} />}
        </div>
    );
}