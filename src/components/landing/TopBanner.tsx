import Link from "next/link";


const TopBanner = () => {
    return (
        <div className="bg-[#03363e] p-5">
            <ul className="text-white flex text-center justify-center gap-5 text-sm">
                <li>
                    CX trend 2024
                </li>
                <li>
                    Unlock growth with Customer services
                </li>
                <li>
                    <Link href={"#"} className="underline">Get the Reports</Link>
                </li>
            </ul>
        </div>
    );
};

export default TopBanner;