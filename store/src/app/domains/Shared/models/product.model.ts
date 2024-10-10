import { category } from "./category.model";

export interface product
{
    id: number,
    title: string,
    price: number,
    description: string,
    images: string[],
    creationAt: string,
    category: category
}