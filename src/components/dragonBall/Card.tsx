/* eslint-disable @next/next/no-img-element */
import { Item } from '@/models/Characters.model';
import Link from 'next/link';

interface IPropsCard {
    character: Item
}


const Card = ({ character }: IPropsCard) => {
    return (
        <Link href={`/dr-dynamic/${character.id}`} className='text-center p-5'>
            <img
                src={character.image}
                alt={character.name}
                className='h-60 mx-auto transition-transform duration-200 hover:scale-125 '
            />
            <h3 className='font-bold'>
                {character.name}
            </h3>
        </Link>
    );
};

export default Card;

