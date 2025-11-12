import Image from "next/image";

export default function Home() {
    return (
        <div className='flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black'>
            <h1>Hello Next!</h1>
            <p>
                Dette er bare en demo for en side og hvordan denne deplyes lett
                via github og vercel
            </p>
        </div>
    );
}
