import Image from "next/image";

export default function Logo() {
    return (
        <Image
            className="dark:invert"
            src="/logo.svg"
            alt="logo"
            width={50}
            height={50}
            priority
        />
    );
}