import Link from 'next/link';

const Menu = () => {

    return (
        <menu className='w-72 mx-auto text-center pt-10'>
            <ul>
                <li>
                    <Link
                        href="/ssr-landing"
                        className='mb-3 block w-full bg-slate-200 text-black rounded hover:bg-slate-400 py-2'>
                        Landing Page (SSR)
                    </Link>
                </li>
                <li>
                    <Link
                        href="/csr-passwords"
                        className='mb-3 block w-full bg-slate-200 text-black rounded hover:bg-slate-400 py-2'>
                        Generador de contraseñas (CSR)
                    </Link>
                </li>
                <li>
                    <Link
                        href="/dr-dynamic"
                        className='mb-3 block w-full bg-slate-200 text-black rounded hover:bg-slate-400 py-2'>
                        Dragon ball api
                    </Link>
                </li>
            </ul>
        </menu>
    );
};

export default Menu;