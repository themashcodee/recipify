import React, { ChangeEvent, FormEvent, useState } from "react";
import Input from "./Input";
import InputLabel from "./InputLabel";
import { readFileAsync } from "helpers";
import Image from "next/image";
import User from "components/icons/User";
import Cancel from "components/icons/Cancel";
import { useDispatch } from "react-redux";
import { login } from "store/user";
import { useRouter } from "next/router";

const Form = () => {
	const dispatch = useDispatch();
	const router = useRouter();

	const [name, setName] = useState<string>("");
	const [username, setUsername] = useState<string>("");
	const [password, setPassword] = useState<string>("");
	const [image, setImage] = useState<string>("");

	async function uploadImage(e: ChangeEvent<HTMLInputElement>) {
		const files = e.currentTarget.files;
		if (files && files[0]) {
			const result: string | null | ArrayBuffer = await readFileAsync(files[0]);
			if (typeof result === "string" && !(result.slice(0, 10) === "data:image"))
				return alert("Only Images allowed");
			if (typeof result === "string") return setImage(result);
			alert("Sorry something went wrong");
		}
	}

	function submitForm(e: FormEvent<HTMLFormElement>) {
		e.preventDefault();
		dispatch(login({ name, password, username, picture: image }));
		router.push("/");
	}

	return (
		<form onSubmit={(e) => submitForm(e)} className="flex flex-col gap-4">
			<div className="flex flex-col gap-1 w-20 h-20 rounded-full bg-white-800 self-center relative">
				{image && (
					<button
						onClick={() => setImage("")}
						className="absolute top-0 right-0 rounded-full p-1 h-6 w-6 bg-red-400 text-white-900 z-10"
					>
						<Cancel />
					</button>
				)}

				<input
					className="w-full h-full absolute left-0 top-0 rounded-full z-0"
					type="file"
					id="profileimage"
					accept="image/*"
					onClick={(e) => (e.currentTarget.value = "")}
					onChange={async (e) => await uploadImage(e)}
				/>

				<label
					htmlFor="profileimage"
					className="bg-yellow-100 text-black-500 h-full w-full flex justify-center items-center rounded-full absolute left-0 top-0 overflow-hidden"
				>
					{image ? (
						<Image src={image} layout="fill" alt="profile photo" />
					) : (
						<span className="w-8 h-8">
							<User />
						</span>
					)}
				</label>
			</div>

			<label htmlFor="name" className="flex flex-col gap-1">
				<InputLabel value="Name" required />
				<Input
					value={name}
					onChange={setName}
					type="text"
					id="name"
					minLength={3}
					maxLength={50}
				/>
			</label>
			<label htmlFor="username" className="flex flex-col gap-1">
				<InputLabel value="Username" required />
				<Input
					value={username}
					onChange={setUsername}
					type="text"
					id="username"
					minLength={3}
					maxLength={10}
				/>
			</label>
			<label htmlFor="password" className="flex flex-col gap-1">
				<InputLabel value="Password" required />
				<Input
					value={password}
					onChange={setPassword}
					type="password"
					id="password"
					minLength={6}
					maxLength={50}
				/>
			</label>

			<button
				className="bg-blue-500 text-white text-lg font-semibold h-12 rounded px-4"
				type="submit"
			>
				Submit
			</button>
		</form>
	);
};

export default Form;
