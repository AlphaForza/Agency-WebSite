import Link from 'next/link';
import { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

const Navbar = () => {
	const [isToggle, setIsToggle] = useState(true);

	const handleMenu = () => {
		setIsToggle(!isToggle);
	};
	return (
		<div className='container mx-auto w-full flex justify-between items-center h-[80px]'>
			<Link href='/'>
				<h1 className='text-3xl font-bold text-white ml-5 sm:ml-0'>
					DigitUX
				</h1>
			</Link>

			<div className='hidden md:flex items-center'>
				{[
					'Home',
					'Who are We ?',
					'Our Services',
					'Our Projects',
					'Contact Us',
				].map((item) => (
					<Link href={item}>
						<p className='mr-5 text-gray hover:text-white cursor-pointer'>
							{item}
						</p>
					</Link>
				))}
			</div>
			<Link href='/'>
				<h3 className='px-3 py-1 bg-primary text-white rounded-md text-sm hidden md:flex '>
					Get a Qoute
				</h3>
			</Link>

			<div className='sm:hidden'>
				{isToggle ? (
					<AiOutlineMenu
						onClick={handleMenu}
						className='text-white text-3xl mr-5 sm:mr-0'
					/>
				) : (
					<div className='z-10 flex flex-col items-center justify-center absolute top-0 right-0 w-full h-full bg-primary ease-in-out duration-300'>
						<AiOutlineClose
							onClick={handleMenu}
							className='text-white text-4xl absolute top-5 right-5'
						/>
						{[
							'Home',
							'Who are We ?',
							'Our Services',
							'Our Projects',
							'Contact Us',
						].map((item) => (
							<Link href={item} onClick={handleMenu}>
								<p className='my-5 text-lg text-white hover:text-white cursor-pointer'>
									{item}
								</p>
							</Link>
						))}
					</div>
				)}
			</div>
		</div>
	);
};

export default Navbar;
