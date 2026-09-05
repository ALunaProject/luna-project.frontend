import {api} from "@/api/api";

export async function getAllComments(): Promise<CommentDTO[]> {
    try {
        const { data } = await api.get<CommentDTO[]>("/comments.json");
        return data;
    } catch (error) {
        console.error("Falha ao buscar todos os comentários:", error);
        return [];
    }
}

export async function getCommentsByUserId(userId: string): Promise<CommentDTO[]> {
    try {
        const allComments = await getAllComments();
        return allComments.filter((comment) => comment.userId === userId);
    } catch (error) {
        console.error(`Falha ao buscar comentários do usuário ${userId}:`, error);
        return [];
    }
}