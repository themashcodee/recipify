export interface Ingredient {
	quantity: string;
	name: string;
	type: string;
}

export interface Recipe {
	id: number;
	isFavourite: boolean;
	isLiked: boolean;
	name: string;
	ingredients: Ingredient[];
	steps: string[];
	image: string;
	likes: number;
	comments: string[];
}
