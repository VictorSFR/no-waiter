import { fetchDishes } from '@/app/lib/data';

const group = (items: any[], n: number) => items.reduce((acc, x, i) => {
    const idx = Math.floor(i / n);
    acc[idx] = [...(acc[idx] || []), x];
    return acc;
}, []);


export default async function DishesTable() {

    const tables = await fetchDishes();

    return (

        <table className="w-screen h-screen justify-center inline-flex ">
            <tbody>

               {/*Splits dishes list into groups if 3*/}
                {group(tables, 3).map((dishTrio: any[], index: number) =>
                    /*Unique key prop to ROW*/
                    <tr key={index}>
                        {/*Iterates over groups of 3 dishes*/}
                        {dishTrio?.map((dish) => (
                            //Unique key prop to row item        
                            <td key={dish.id} className="w-96 flex-col justify-start items-start gap-2.5 inline-flex bg-white border border-gray-200 rounded-lg shadow hover:bg-[#abbad1]">
                                <div className="h-48 w-full object-cover rounded-t-2xl rounded-b-md overflow-hidden">
                                    <img className="m-auto w-full h-full object-cover" src={dish.dish_image_url} />
                                </div>
                                <h3 className="w-96 h-5 text-black text-xs font-normal font-['Inter']">{dish.dish_name}</h3>
                                <p className="w-96 h-40 text-black text-xs font-normal font-['Inter']">{dish.dish_description}</p>
                            </td>
                        ))}
                    </tr>
                )}


            </tbody>
        </table>
        

    )

}