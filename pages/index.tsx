import { Inter } from "next/font/google";
import Image from "next/image";
import Layout from "../components/Layout";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
    return (
        <Layout pageTitle="Page Home">
            <div className="border border-3 shadow-lg mt-10 ">
                <div className="flex justify-center align-middle flex-wrap mt-10 mb-5 gap-9">
                    <Image src="/xayah.PNG" width={200} height={200} alt="Xayah" className="hover:scale-105 hover:transition-all" />
                    <Image src="/xayah.PNG" width={200} height={200} alt="Xayah" className="hover:scale-105 hover:transition-all" />
                    <img src="/xayah.PNG" style={{ width: 200, height: 200, }} alt="Xayah" className="hover:scale-105 hover:transition-all" />
                </div>
                <div className="p-5">
                    <h2 className="text-5xl mb-5 hover:underline font-semibold">Xayah The Rebel</h2>
                    <h1 className="fs-5 text-2xl">
                        Deadly and precise, Xayah is a vastayan revolutionary waging a personal war to save her people. She uses her speed, guile, and razor-sharp feather blades to cut down anyone who stands in her way.
                    </h1>
                </div>
                <div className="flex justify-center align-middle flex-wrap mt-10 mb-5 gap-9">
                    <Image src="/xayah.PNG" width={200} height={200} alt="Xayah" className="hover:scale-105 hover:transition-all" />
                </div>
                <div className="p-5">
                    <h2 className="text-5xl mb-5 hover:underline font-semibold">Xayah The Rebel</h2>
                    <h1 className="fs-5 text-2xl">
                        Deadly and precise, Xayah is a vastayan revolutionary waging a personal war to save her people. She uses her speed, guile, and razor-sharp feather blades to cut down anyone who stands in her way.
                    </h1>
                </div>
                <div className="flex justify-center align-middle flex-wrap mt-10 mb-5 gap-9">
                    <Image src="/xayah2.jpeg" width={500} height={500} alt="Xayah" className="hover:scale-105 hover:transition-all" />
                </div>
            </div>
        </Layout >
    );
}
