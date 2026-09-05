import {api} from "@/utils/api";

export async function getAllGames(): Promise<GamesDTO[]> {
    try {
        const { data } = await api.get<GamesDTO[]>("/games.json");
        return data;
    } catch (error) {
        console.error("Falha ao buscar todos os jogos:", error);
        return [];
    }
}
