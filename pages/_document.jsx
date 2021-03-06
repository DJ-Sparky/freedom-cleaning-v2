import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
	static async getInitialProps(ctx) {
		const initialProps = await Document.getInitialProps(ctx);
		return { ...initialProps };
	}

	render() {
		return (
			<Html lang='en'>
				<Head>
					<meta httpEquiv='Content-Type' content='text/html; charset=utf-8' />
					<meta
						name='description'
						content='Domestic Cleaning services for Bradford and Leeds'
					/>
					<link
						href='https://fonts.googleapis.com/css2?family=Josefin+Sans&display=swap'
						rel='stylesheet'
					/>
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
