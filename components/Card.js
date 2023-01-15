import Link from 'next/link';

const Card = ({ title, desc, btn }) => {
	return (
		<div className='flex flex-col items-center text-center sm:items-start sm:text-left '>
			<h3 className='text-white text-2xl md:text-lg  '>{title}</h3>
			<p className='text-gray text-sm w-[60%]'>{desc}</p>
			<Link href={title}>
				<p className='px-2 py-1 border-2 border-white inline text-white text-sm my-5 '>
					{btn}
				</p>
			</Link>
		</div>
	);
};

export default Card;
