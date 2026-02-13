
// import Loader from '@/components/dragonBall/Loader';
import Card from '@/components/dragonBall/Card';
import { Characters, Item } from '@/models/Characters.model';

const getCharacters = async () =>{
    const getData = await fetch("https://dragonball-api.com/api/characters")
    const data: Characters = await getData.json()
    return data.items    
}


const DragonBallApi = async () => {

    const characters:Item[] = await getCharacters()
    
    return (
        <div className='bg-slate-100 min-h-screen'>
            <header className='bg-slate-900 text-white p-5 text-center'>
                <h1>Dragon Ball Characters</h1>
            </header>
            <main className='max-w-4xl mx-auto py-5'>
                {
                    characters.length == 0 && (
                        <p>No se encontraron personajes.</p>
                    )
                }

                <div className='grid grid-cols-4 gap-5'>
                    {
                        characters.map(character => (
                          <Card key={character.id} character={character} />
                        ))
                    }
                </div>

            </main>
        </div>
    );
};

export default DragonBallApi;