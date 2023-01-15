import Head from 'next/head';
import Image from 'next/image';
import Client from '../components/Client';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Testimonial from '../components/Testimonial';
import Work from '../components/Work';

export default function Home() {
	return (
		<div className='container mx-auto'>
			<Hero />
			<Client />
			<Services />
			<Work />
			<Testimonial />
		</div>
	);
}
