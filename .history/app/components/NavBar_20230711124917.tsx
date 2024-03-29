import Link from 'next/link';
import Image from 'next/image';
import {NavLinks} from '@/constants';

const Navbar = () => {
	return (
		<nav className='flexBetween navbar'>
			<div className='flex-1 flexStart gap-10'>
				<Link href={'/'}>
					<Image src='/logo.svg' alt='Logo' width={115} height={43} />
				</Link>
				<ul className='xl:flex hidden text-small gap-7'>
					{NavLinks.map((link) => (
						<Link href={link.href} key={link.key}>
							{link.text}
						</Link>
					))}
					<li></li>
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;
