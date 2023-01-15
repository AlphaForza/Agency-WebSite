import {
	itemOne,
	itemTwo,
	itemThree,
	itemFoure,
	itemFive,
} from '../assets/img/index';
import Items from './Items';
const Work = () => {
	return (
		<div className='mt-20'>
			<div>
				<h3 className='text-white text-lg text-center sm:text-left '>
					The work we realised
				</h3>
				<h2 className='text-white text-md text-center sm:text-left'>
					The work we did that made our Client happy and satisfied
				</h2>
			</div>
			<div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
				<div className='grid grid-cols-1 md:grid-cols-2 gap-5 items-center text-center sm:text-left'>
					{[
						{
							img: itemOne,
							title: 'UI/UX',
							desc: 'Delex Realy',
						},
						{
							img: itemTwo,
							title: 'UI/UX',
							desc: 'Delex Realy',
						},
						{
							img: itemFive,
							title: 'UI/UX',
							desc: 'Delex Realy',
						},
						{
							img: itemFoure,
							title: 'UI/UX',
							desc: 'Delex Realy',
						},
					].map((item) => (
						<>
							<Items
								img={item.img}
								title={item.title}
								desc={item.desc}
							/>
						</>
					))}
				</div>
				<div className='flex items-center justify-center'>
					<Items img={itemThree} title='UX/UI Design' desc='ADOC' />
				</div>
			</div>
		</div>
	);
};

export default Work;
