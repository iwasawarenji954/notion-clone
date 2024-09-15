import Image from "next/image";

export const Heroes = () => {
    return(
        <div className="flex flex-col items-center justify-center max-w-5xl">
            <div className="flex items-center">
                <div className="relative w-[300px] h-[300px] sm:w-[350px] sm:h-[400px] md:w-[400px]">
                    <Image
                        src="/logo.png"
                        fill
                        className="object-contain"
                        alt="BFSL-logo"
                    />
                </div>
            </div>
        </div>
    )
}