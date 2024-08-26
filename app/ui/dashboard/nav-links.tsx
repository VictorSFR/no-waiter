'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
    { name: 'Pratos', href: '/dashboard/dishes' },
    { name: 'Mesas', href: '/dashboard/tables' },
    { name: 'Pedidos', href: '/dashboard/orders' },
    { name: 'Usuarios', href: '/dashboard/users' },
    { name: 'Suporte', href: '/dashboard/support' }
];

export default function NavLinks() {
    const pathname = usePathname();

    return (
        <>
            {links.map((link) => {

                return (
                    <div key={link.name} className="justify-start items-center gap-[5px] flex">
                        <Link

                            href={link.href}
                            className={clsx(
                                'text-black text-base font-bold leading-normal',
                                {
                                    'text-blue-600': pathname === link.href,
                                },
                            )}
                        >

                            <p className="hidden md:block">{link.name}</p>
                        </Link>
                    </div>
                );
            })}
        </>
    );
}