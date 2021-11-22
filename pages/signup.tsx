import type { NextPage } from "next";
import Form from "components/signupPage/Form";
import Header from "components/core/header/Header";
import CustomHead from "components/core/CustomHead";

const Signup: NextPage = () => {
	return (
		<>
			<CustomHead title="| Signup" />

			<main className="page py-8">
				<Header />

				<div className="bg-white-900 dark:bg-black-800 shadow-sm border max-w-sm rounded-lg flex flex-col p-6 dark:border-black-500 border-white-500 mx-auto">
					<h2 className="text-2xl font-semibold select-none">Sign up</h2>
					<hr className="my-4 border-white-800 dark:border-black-500" />
					<Form />
				</div>
			</main>
		</>
	);
};

export default Signup;
