import s from "./styles.module.scss"
import UserProfile from "@/components/layout/UserProfile/UserProfile";
import { getUserByID } from "@/services/userSerices";
import { DEFAULT_AVATAR } from "@/assets/images/contants";


export default async function Comments( comment : CommentDTO) {
    const user = await getUserByID(comment.userId);

    if (!user) {
        return null; // não renderiza esse comentário se o autor não existe mais
    }

    return (
        <div className={s.commentsContainer}>
            <UserProfile username={user.username} userPP={user.profilePicUrl || DEFAULT_AVATAR} />
            <p>{comment.content}</p>
        </div>
    );
}