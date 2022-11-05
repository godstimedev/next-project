import React from 'react';
import styles from '../styles/User.module.scss';

function User() {
	return (
		<div className={styles.user}>
			<div className={styles.user_content}>
				<h2 className={styles.user_header}>User Manage</h2>
				<div className={styles.user_nav}>
					<a href="#">
						<p>Wallet</p>
					</a>
					<a href="#" className={styles.active}>
						<p>Profile</p>
					</a>
					<a href="#">
						<p>Notifications</p>
					</a>
				</div>
				<form autoComplete="off" className={styles.form}>
					<label>
						<p>First Name</p>
						<input type="text" name="firstname" />
					</label>
					<label>
						<p>Last Name</p>
						<input type="text" name="lastname" />
					</label>
					<label>
						<p>Account Email</p>
						<input type="email" name="email" />
					</label>
					<label>
						<p>Password</p>
						<input type="password" name="password" />
						<a className={styles.input_link} href="#">
							Change Password
						</a>
					</label>
					<label>
						<p>Phone Number</p>
						<input type="tel" name="phone" />
						<a className={styles.input_link} href="#">
							Change Number
						</a>
					</label>
				</form>
			</div>
			<div className={styles.buttons}>
				<button className={styles.button__state_warning}>Remove Stellar Account</button>
				<button className={styles.button__state_purple}>Save Current Changes</button>
			</div>
		</div>
	);
}

export default User;
