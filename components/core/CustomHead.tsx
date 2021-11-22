import React from "react";
import Head from "next/head";

interface Props {
	title: string;
}

const CustomHead = ({ title }: Props) => {
	return (
		<Head>
			<title>{title}</title>
			<meta name="description" content="Recepify - A Recipe application" />
			<link rel="icon" href="/favicon.png" />
		</Head>
	);
};

export default CustomHead;
