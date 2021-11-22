export const readFileAsync = (file: File) => {
	return new Promise<string | null | ArrayBuffer>((resolve, reject) => {
		const fileReader = new FileReader();

		fileReader.readAsDataURL(file);
		fileReader.onload = () => {
			resolve(fileReader.result);
		};
	});
};
