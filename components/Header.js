import styles from '../styles/Header.module.scss';
import { IoIosArrowDown } from 'react-icons/io';
import { AiOutlineMenu } from 'react-icons/ai';
import { AiOutlineClose } from 'react-icons/ai';
import { useState } from 'react';
import Image from 'next/image';

function Header() {
	const [nav, setNav] = useState(false);

	const handleNav = () => {
		setNav(!nav);
	};

	return (
		<header className={styles.header}>
			<div className={styles.mobile_navbar}>
				<AiOutlineMenu onClick={handleNav} size={20} className={styles.menu_icon} />

				<div className={nav ? styles.show : styles.close}>
					<div className={styles.navbar}>
						<AiOutlineClose onClick={handleNav} className={styles.close_icon} size={20} />
						<ul>
							<a href="#">
								<li>Home</li>
							</a>
							<a href="#">
								<li>Recieve</li>
							</a>
							<a href="#">
								<li>Send</li>
							</a>
							<a href="#">
								<li>Buy License</li>
							</a>
							<a href="#">
								<li>Trade</li>
							</a>
							<a href="#">
								<li>Transactions</li>
							</a>
							<a href="#">
								<li>Access History</li>
							</a>
							<a href="#">
								<li>Contacts</li>
							</a>
							<a href="#" className={styles.active}>
								<li>User Manage</li>
							</a>
						</ul>

						<ul>
							<a href="#">
								<li>Logout</li>
							</a>
						</ul>
					</div>
				</div>
			</div>
			<div className={styles.header_content}>
				<div>
					<div className={styles.toggle_container}>
						<span className={styles.toggle}></span>
					</div>
					<div className={styles.mode}></div>
				</div>
				<div>
					<Image
						src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cmFuZG9tJTIwYXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
						width={35}
						height={30}
						alt="/"
						className={styles.avatar}
					/>
					<p>Khalid Saied</p>
					<IoIosArrowDown className={styles.drop_icon} />
				</div>
			</div>
		</header>
	);
}

export default Header;
