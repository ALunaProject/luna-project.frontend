import s from "./styles.module.scss"
import Image from "next/image";
import Link from "next/link";
import Tags from "@/components/ui/Tags/Tags";

export default function GamesCard(Game: GamesDTO) {
    return (
        <Link href={Game.name} className={s.gamesCard}>
            <Image src={Game.previewImg} alt={`${Game.name} preview`} width={293.25} height={150}/>
            <div className={s.gameProps}>
                <p>{Game.name}</p>
                <div className={s.tagsWrapper}>
                    {Game.tags.map(tag => (
                        <Tags key={tag} label={tag} />
                    ))}
                </div>
            </div>
        </Link>
    )
}