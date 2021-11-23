import React, { ChangeEvent, Dispatch, SetStateAction, useState } from "react";
import Image from "next/image";
import { readFileAsync } from "helpers";
import Cancel from "components/icons/Cancel";

interface Props {
	image: string;
	setImage: Dispatch<SetStateAction<string>>;
}

const FormImage = ({ image, setImage }: Props) => {
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

	return (
		<>
			<h2 className="text-2xl font-medium">
				Image <span className="text-red-500">*</span>
			</h2>
			<div className="flex w-full h-80 self-center relative">
				<input
					className="bg-transparent w-full h-full absolute left-0 top-0 rounded-lg z-0 opacity-0 focus:opacity-100"
					type="file"
					id="recipeimage"
					accept="image/*"
					required
					onClick={(e) => (e.currentTarget.value = "")}
					onChange={async (e) => await uploadImage(e)}
				/>

				<label
					htmlFor="recipeimage"
					className="text-black-500 h-full w-full flex justify-center items-center relative rounded-lg overflow-hidden bg-white-800 dark:bg-black-700"
				>
					{image ? (
						<Image
							src={image}
							layout="fill"
							objectFit="cover"
							alt="profile photo"
						/>
					) : (
						<span className="text-xl">Choose Image</span>
					)}
				</label>

				{image && (
					<button
						type="button"
						onClick={() => setImage("")}
						className="absolute -top-3 -right-3 rounded-full p-1 h-6 w-6 bg-red-500 text-white-900 z-10"
					>
						<Cancel />
					</button>
				)}
			</div>
		</>
	);
};

export default FormImage;
