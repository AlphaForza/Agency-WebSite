import Image from 'next/image';
import {
	microsoft,
	google,
	spotify,
	tesla,
	yassir,
	tiktok,
} from '../assets/img/index';

const Client = () => {
	return (
		<div className='my-20 hidden sm:flex flex-col'>
			<h2 className='text-white font-bold'>Client We helped</h2>
			<div className='flex  items-center justify-between  gap-5 '>
				{[microsoft, google, spotify, tesla, yassir, tiktok].map(
					(img) => (
						<Image src={img} />
					)
				)}
			</div>
		</div>
	);
};

export default Client;
