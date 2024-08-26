import {
    DishesTableType,
    FormattedDishesTable,
} from '@/app/lib/definitions';


export default async function DishesTable({
    dishes,
}: {
    dishes: FormattedDishesTable[];
}) {
    const group = (items: any[], n: number) => items.reduce((acc, x, i) => {
        const idx = Math.floor(i / n);
        acc[idx] = [...(acc[idx] || []), x];
        return acc;
    }, []);



    return (

        <table className="w-screen h-screen justify-center inline-flex ">
            <tbody>

               {/*Splits dishes list into groups if 3*/}
                {group(dishes, 3).map((dishTrio: any[], index: number) =>
                    /*Unique key prop to ROW*/
                    <tr key={index}>
                        {/*Iterates over groups of 3 dishes*/}
                        {dishTrio?.map((dish) => (
                            //Unique key prop to row item        
                            <td key={dish.id} className="w-[422px] flex-col justify-start items-start gap-2.5 inline-flex bg-white border border-gray-200 rounded-lg shadow hover:bg-[#abbad1]">
                                <div className="h-[190px] w-full object-cover rounded-t-2xl rounded-b-md overflow-hidden">
                                    <img className="m-auto w-full h-full object-cover" src={dish.dish_image_url} />
                                </div>
                                <h3 className="w-[422px] h-5 text-black text-xs font-normal font-['Inter']">{dish.dish_name}</h3>
                                <p className="w-[422px] h-[170px] text-black text-xs font-normal font-['Inter']">{dish.dish_description}</p>
                            </td>
                        ))}
                    </tr>
                )}


            </tbody>
        </table>

    );
}