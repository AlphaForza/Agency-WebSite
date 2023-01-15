import Head from 'next/head';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const Layout = ({ children }) => {
	return (
		<>
			<Navbar />
			<main>{children}</main>
			<footer className=''>
				<Footer />
				<div className='bg-primary py-5 px-5 mt-10'>
					<div className='container mx-auto'>
						<h3 className='text-white'>Designed By AlphaCode 2022</h3>
					</div>
				</div>
			</footer>
		</>
	);
};

export default Layout;
