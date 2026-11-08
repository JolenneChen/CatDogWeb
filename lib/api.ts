const url = "https://api.thecatapi.com/v1/images/search";
const url2 = "https://api.thedogapi.com/v1/images/search"

export interface Animal {
    url: string;
    width: number;
    height: number;
}

async function jsonFetch<T>(url: string): Promise<T> {
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json() as Promise<T>;
}

export async function getCat(): Promise<Animal> {
    const data = await jsonFetch<Animal[]>(url);
    return data[0];
}

export async function getDog(): Promise<Animal> {
    const data = await jsonFetch<Animal[]>(url2);
    return data[0];
}
