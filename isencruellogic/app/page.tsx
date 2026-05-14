import Image from "next/image";

export default function Home() {
    return (
        <div className="m-auto bg-cyan-600 flex flex-col items-center justify-center text-center">
            <Image src="/pfp.jpg" alt="Isen's PFP" width={200} height={200} />
            <h1>@isencruellogic</h1>
        </div>
    );
}