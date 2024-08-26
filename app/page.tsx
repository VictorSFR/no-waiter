import Image from "next/image";
import PlaceholderData from "@/app/lib/placeholder-data";
import DishesTable from "@/app/ui/dishes/dishes-table";
export default function Home() {
  return (
    <main>

      <nav className="p-5 bg-cyan-400">
        <div>
          <span className="text-2x1 font-[Poppins]">
            nowaiter
          </span>
        </div>
        <ul>
          <li>
            <a href="#" className="text-x1 hover:text-red-500 duration-500">OLha</a>
          </li>
        </ul>
      </nav>
      {<DishesTable dishes={PlaceholderData.dishes}/>}

    </main>
  );
}
