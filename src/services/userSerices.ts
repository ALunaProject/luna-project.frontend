import {api} from "@/api/api";

export async function getUserByUsername(username: string): Promise<UserDTO | null> {
    try {
        const {data} = await api.get<UserDTO[]>("/users.json");
        return data.find((u) => u.username === username) ?? null;
    } catch (error) {
        console.error("Falha ao buscar usuário:", error);
        return null;
    }
}

export async function getUserByID(userId: string): Promise<UserDTO | null> {
    try {
        const {data} = await api.get<UserDTO[]>("/users.json");
        return data.find((u) => u.id === userId) ?? null;
    } catch (error) {
        console.error(error);
        return null;
    }
}
// sinceramente n sei pq to fazendo isso, quando vier o back troca pelas reqs sla