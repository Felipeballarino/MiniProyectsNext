
const HeaderLanding = () => {
    return (
        <div className='bg-[#17494c] text-white'>
            <div>
                <ul className=" max-w-4xl mx-auto pt-2  flex gap-3 text-[10px]   justify-end ">
                    <li>
                        Sign in
                    </li>
                    <li>
                        Product Support
                    </li>
                    <li>
                        Company
                    </li>
                    <li>
                        Contact us
                    </li>
                    <li>
                        English
                    </li>
                </ul>
            </div>
            <header className='flex justify-between items-center max-w-4xl py-5 mx-auto'>
                <h2 className='text-2xl'>
                    Zendex
                </h2>
                <menu >
                    <ul className='flex items-center gap-16'>
                        <li>
                            Products
                        </li>
                        <li>
                            Pricing
                        </li>
                        <li>
                            Solution
                        </li>
                        <li>
                            Demo
                        </li>
                        <li>
                            Resouses
                        </li>
                        <li className='bg-[#e4f0d3] p-3 text-[#17494c] font-bold' >
                            Free trial
                        </li>
                    </ul>
                </menu>
            </header>
        </div>
    );
};

export default HeaderLanding;