import React from 'react';

const PrincipalContent = () => {
    return (
        <div className='bg-[#17494c] text-white'>
            <main className='max-w-4xl mx-auto flex justify-between items-center py-20 gap-20'>
                <div className='w-1/2'>
                    <h2 className='text-7xl font-bold leading-22'>
                        <span className='text-[#cc9fb6]'>Champions</span> <br />
                        <span className='text-[#fed6aa]'>of</span>
                        <span className='text-[#00a655] border-b-4 border-white'> customer</span>  <br />
                        <span className='text-[#31aadb] border-b-4 border-white'>services</span></h2>
                </div>
                <div className='w-1/2'>
                    <div>
                        <p>Lorem ipsum dolor sit amet consectetur,
                            adipisicing elit. Officiis maiores facere, veniam velit neque error minima possimus distinctio
                            libero impedit quis beatae dolorem quae saepe veritatis quibusdam vero fuga voluptate.</p>

                    </div>
                    <div className='flex mt-5 gap-5'>
                        <button className='bg-[#e4f0d3] p-3 text-[#17494c] font-medium '>
                            Free Trial
                        </button>
                        <button className='bg-transparent text-white p-3 font-medium border-2 border-white'>
                            View Demo
                        </button>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default PrincipalContent;