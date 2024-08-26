import Image from "next/image";
import PlaceholderData from "@/app/lib/placeholder-data";
import DishesTable from "@/app/ui/dishes/dishes-table";
import NavBar from "@/app/ui/navbar";
export default function Home() {
  return (
    <main>

      <DishesTable dishes={PlaceholderData.dishes}/> 

    </main>
  );
}
