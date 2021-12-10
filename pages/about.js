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
			<Link href='/'>
				<a>
					<button className={styles.button}>Homepage</button>
				</a>
			</Link>
		</div>
	);
}

export default About;
