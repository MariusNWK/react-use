import type { Todo } from "@/types";
import { faker } from "@faker-js/faker";

export async function fetchTodos(): Promise<Todo[]> {
	const now = new Date();
	const nowString = now.toLocaleString("fr-FR", {
		dateStyle: "full",
		timeStyle: "medium",
		timeZone: "Europe/Paris",
	});
	const uniqueId = faker.string.uuid().slice(0, 8);
	const fakeTodos: Todo[] = Array.from({ length: 5 }).map((_, i) => ({
		id: i + 1,
		title: `${faker.lorem.sentence(3)} (id: ${uniqueId}, généré ${nowString})`,
		completed: faker.datatype.boolean(),
		userId: faker.number.int({ min: 1, max: 3 }),
		date: nowString,
	}));

	await new Promise((resolve) => setTimeout(resolve, 2000));

	return fakeTodos;
}

export const getTodosWithoutCache = () => fetchTodos();
