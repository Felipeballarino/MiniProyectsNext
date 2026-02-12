/* eslint-disable @next/next/no-img-element */
import InfoCard from "@/components/dragonBall/InfoCard";
import { Character } from "@/models/Characters.model";

interface IPropsSingleCharacter {
    params: Promise<{ id: string }>;
}

const getCharactersById = async (id: string) => {
    const getData = await fetch(
        `https://dragonball-api.com/api/characters/${id}`,
        { cache: "no-store" }
    );

    if (!getData.ok) throw new Error("Character not found");

    const data: Character = await getData.json();
    return data;
};

export default async function SigleCharacterById({
    params,
}: IPropsSingleCharacter) {
    
    const { id } = await params;

    const character = await getCharactersById(id);

    return (
        <div className="min-h-screen bg-slate-600 ">
            {/* Header */}
            <header className='bg-slate-900  text-white p-5 text-center'>
                <h1>Dragon Ball Characters</h1>
            </header>
            <main className="max-w-6xl mx-auto px-6 py-10 space-y-12 ">
                {/* Top Section */}
                <section className="grid md:grid-cols-2 gap-10 items-center">
                    {/* Image */}
                    <div className="flex justify-center">
                        <img
                            src={character.image}
                            alt={character.name}
                            className="max-h-112.5 object-contain drop-shadow-2xl"
                        />
                    </div>

                    {/* Info */}
                    <div className="space-y-6">
                        <h2 className="text-5xl font-extrabold text-orange-400">
                            {character.name}
                        </h2>

                        <p className="leading-relaxed">
                            {character.description}
                        </p>

                        <div className="grid grid-cols-2 gap-4 text-sm">
                            <InfoCard label="Race" value={character.race} />
                            <InfoCard label="Gender" value={character.gender} />
                            <InfoCard label="Base KI" value={character.ki} />
                            <InfoCard label="Max KI" value={character.maxKi} />
                            <InfoCard label="Affiliation" value={character.affiliation} />
                        </div>
                    </div>
                </section>

                {/* Origin Planet */}
                {character.originPlanet && (
                    <section className="bg-slate-900 rounded-xl p-6 shadow-lg">
                        <h3 className="text-2xl font-bold mb-4 text-orange-400">
                            Origin Planet
                        </h3>

                        <div className="grid md:grid-cols-2 gap-6 ">
                            <img
                                src={character.originPlanet.image}
                                alt={character.originPlanet.name}
                                className="rounded-lg"
                            />

                            <div className="">
                                <h4 className="text-xl text-white font-semibold mb-2">
                                    {character.originPlanet.name}
                                </h4>
                                <p className="text-slate-400">
                                    {character.originPlanet.description}
                                </p>
                            </div>
                        </div>
                    </section>
                )}

                {/* Transformations */}
                {character.transformations?.length > 0 && (
                    <section>
                        <h3 className="text-2xl font-bold mb-6 text-orange-400">
                            Transformations
                        </h3>

                        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                            {character.transformations.map((t) => (
                                <div
                                    key={t.id}
                                    className="bg-slate-900 rounded-xl p-4 hover:scale-105 transition-transform duration-300 shadow-lg"
                                >
                                    <img
                                        src={t.image}
                                        alt={t.name}
                                        className="h-40 mx-auto object-contain mb-4"
                                    />
                                    <h4 className="text-center text-white font-semibold">{t.name}</h4>
                                    <p className="text-center text-orange-400 text-sm">
                                        KI: {t.ki}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </section>
                )}
            </main>
        </div>
    );
}