import Link from 'next/link';


const NavLink = ({ link, text }) => {
    return(
        <Link href={link}>
            <a className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                { text }
            </a>
        </Link>
    );
}


export default NavLink;