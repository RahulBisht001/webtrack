import Link from "next/link";
import Logo from "./_components/Logo";

export default function Home() {
    return (
        <>
            <main className="bg-black min-h-svh flex flex-col items-center justify-center font-Outfit">
                <div className="absolute left-4 sm:left-10 top-4">
                    <Logo />
                </div>
                {/* <div className="cursor hidden lg:block absolute top-4"></div> */}
                <div className="max-w-5xl text-center flex flex-col">
                    <h1 className="text-5xl sm:text-8xl font-semibold lg:font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-300 to-neutral-500 inline-block leading-[50px]">
                        Your Website's Analytics Simplified
                    </h1>

                    <p className="mt-10 px-5 text-base sm:text-lg text-violet-500 tracking-wider font-normal">
                        Measure performance, master growth
                    </p>

                    <div className="mt-5 flex justify-center gap-5">
                        <Link href="/auth" prefetch>
                            <p className="button !bg-violet-500 !text-black !font-normal">Get Started</p>
                        </Link>
                        <Link href="/dashboard" prefetch>
                            <p className="button !bg-transparent">Go To Dashboard</p>
                        </Link>
                    </div>
                </div>
            </main>
        </>
    );
}
