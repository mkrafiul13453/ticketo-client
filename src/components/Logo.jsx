import Link from "next/link";
import { FaBookOpen, FaTicketAlt } from "react-icons/fa";

const Logo = () => {
    return (
        <Link href="/" className="flex items-center gap-2">
            <div className="bg-gradient-to-tr from-amber-500 to-rose-500 p-2 rounded-lg text-white shadow-md shadow-rose-500/20">
                <FaBookOpen className="text-xl" />
            </div>
            <span className="font-extrabold text-xl tracking-tight bg-gradient-to-r from-white via-amber-200 to-rose-500 bg-clip-text text-transparent">
                Ticketo
            </span>
        </Link>
    );
};

export default Logo;