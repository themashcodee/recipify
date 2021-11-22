export interface Ingredient {
	quantity: string;
	name: string;
	type: string;
}

export interface Recipe {
	id: number;
	name: string;
	ingredients: Ingredient[];
	steps: string[];
	image: string;
	likes: number;
	comments: string[];
}
