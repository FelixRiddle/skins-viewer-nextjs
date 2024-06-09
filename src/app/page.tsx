import ShowSkin from "@/components/skin/ShowSkin/ShowSkin";
import Link from "next/link";

/**
 * Home component
 * 
 * @returns 
 */
export default function Home() {
    const titleClasses = "m-1 p-1 text-xs font-extrabold leading-none tracking-tight text-gray-900 md:text-2xl lg:text-3xl";
    const linkClasses = "p-1 m-1 font-medium text-blue-600 dark:text-blue-500 hover:underline";
    const paragraphClasses = "p-1 m-1 mb-3 text-gray-900";
    
    return (
        <div>
            <h1 className={titleClasses}>Minecraft skin viewer</h1>
            <p className={paragraphClasses}>
                Minecraft skin viewer app
            </p>
            
            {/* Links */}
            <h2 className={titleClasses}>
                Links
            </h2>
            <nav>
                <ul>
                    <li>
                        <Link href="/skin" className={linkClasses}>Skins</Link>
                    </li>
                </ul>
            </nav>
            
            <ShowSkin
                username={"fr3dericc"}
                skinName={"Shadow"}
            />
        </div>
    );
}
