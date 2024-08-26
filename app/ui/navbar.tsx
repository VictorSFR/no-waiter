import Link from 'next/link';
import NavLinks from '@/app/ui/dashboard/nav-links';
export default function NavBar() {
  return (
    <div className="w-screen h-20 px-[120px] py-3.5 bg-grey justify-between items-center inline-flex border-b-2 border-indigo-500">
      <div className="justify-start items-center gap-[5px] flex">
        <Link href="#" className="text-black text-[32px] font-medium font-['Inter']">Logo</Link>
      </div>
      <div className="justify-start items-center gap-24 flex">
        <NavLinks />
      </div>
      <div className="p-2.5 bg-[#2b18a0] rounded-lg justify-center items-center gap-2.5 flex">
        <div className="text-black text-base font-semibold font-['Inter'] leading-normal tracking-[2.56px]">Logout</div>
      </div>
    </div>
  );
}