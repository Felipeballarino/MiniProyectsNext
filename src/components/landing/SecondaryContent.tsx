import Image from "next/image";
import nextImage from "../../../public/next.svg"

const SecondaryContent = () => {
    return (
        <section className="bg-[#e4f0d3]">
            <div className="max-w-4xl mx-auto text-center py-10">
                <h3 className="text-4xl text-[#03363e] font-bold mb-5">Take a quik tour</h3>
                <p className="text-[#03363e] text-sm max-w-2xl mx-auto">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo, fuga
                    voluptatem esse nihil, voluptas voluptates cupiditate dolores ducimus,
                    facilis earum ad aspernatur vel non.
                </p>
            <Image
                className="mx-auto my-16"
                src={nextImage}
                alt="imagen"
                width={500}
                height={500}
                
            />
            </div>

        </section>
    );
};

export default SecondaryContent;