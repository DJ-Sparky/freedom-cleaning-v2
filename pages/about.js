import React from 'react';
import Image from 'next/image';
import styles from '../styles/Fade.module.scss';
import Link from 'next/link';

function About() {
	return (
		<div>
			<h1>About us.</h1>
			<br />
			<h2>We are what we do.</h2>
			<br />
			<Link href='/' aria-label='visit our home page'>
				<a>
					<button className={styles.button} aria-label='Home Page'>
						Homepage
					</button>
				</a>
			</Link>
		</div>
	);
}

export default About;
