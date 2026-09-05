import s from "./styles.module.scss"
import Link from "next/link";

export default function UserNotFound() {
    return (
        <>
            <h1>
                user not found
            </h1>
            <Link href="/public">go back</Link>
        </>
    );
}