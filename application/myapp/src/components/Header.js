/** @format */

import React from 'react';
import { cartImg, logoDark2 } from '../assets';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {
	const productData = useSelector((state) => state.denovo.productData);
	// console.log(productData);
	return (
		<div className='w-full h-20 bg-white border-b-[1px] border-b-gray-800 font-titleFont sticky top-0 z-50'>
			<div className='max-w-screen-xl h-full mx-auto flex items-center justify-between'>
				<Link to='/'>
					<div>
						<img
							className='w-28'
							src={logoDark2}
							alt='logoDark'
						/>
					</div>
				</Link>
				<div className='flex items-center gap-8'>
					<ul className='flex items-center gap-8'>
						<Link to='/'>
							<li className='text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300'>
								Home
							</li>
						</Link>
						<li className='text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300'>
							Pages
						</li>
						<li className='text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300'>
							Shop
						</li>
					</ul>
					<Link to='/cart'>
						<div className='relative'>
							<img
								className='w-6'
								src={cartImg}
								alt='cartImage'
							/>
							<span className='absolute w-6 top-2 left-0 text-sm flex items-center justify-center font-semibold'>
								0
							</span>
						</div>
					</Link>
					<Link to='/login'>
						<img
							className='w-8 h-8 rounded-full'
							src='https://images.pexels.com/photos/264547/pexels-photo-264547.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
							alt='userLogo'
						/>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Header;
