import {
    
    FormattedTablesTableType,
} from '@/app/lib/definitions';


export default async function TablesTable({
    tables,
}: {
    tables: FormattedTablesTableType[];
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
                {group(tables, 3).map((tableTrio: any[], index: number) =>
                    /*Unique key prop to ROW*/
                    <tr key={index}>
                        {/*Iterates over groups of 3 dishes*/}
                        {tableTrio?.map((table) => (
                            //Unique key prop to row item        
                            <td key={table.id} className="w-96 flex-col justify-start items-start gap-2.5 inline-flex bg-white border border-gray-200 rounded-lg shadow hover:bg-[#abbad1]">
                                <div className="h-48 w-full object-cover rounded-t-2xl rounded-b-md overflow-hidden">
                                    <img className="m-auto w-full h-full object-cover" src={table.table_image_url} />
                                </div>
                                <h3 className="w-96 h-5 text-black text-xs font-normal font-['Inter']">{table.id}</h3>
                                
                            </td>
                        ))}
                    </tr>
                )}


            </tbody>
        </table>

    );
}