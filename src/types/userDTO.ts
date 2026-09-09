interface UserDTO {
	id: string
	username: string
	email: string
	bio: string | null
	profilePicUrl: string | null
	bannerUrl: string | null
	role: "ADMIN" | "USER"
}

interface UserPageProps {
	//    isLogged?: boolean;
	params: Promise<{ username: string }>
}
