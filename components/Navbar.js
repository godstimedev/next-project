// import {AiOutlineMenu} from 'react-icons/ai'
import styles from '../styles/Navbar.module.scss';

function Navbar() {
	return (
		<nav className={styles.navbar}>
			<div className="navbar">
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
		</nav>
	);
}

export default Navbar;
