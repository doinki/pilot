import { PokemonCard } from '@/components/PokemonCard';
import { PokemonList } from '@/components/PokemonList';

const PokemonCardSkeleton = <PokemonCard id={0} name="" loading />;

const Loading = () => {
  return (
    <PokemonList>
      {Array.from({ length: 5 }).map((_, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <li key={index}>{PokemonCardSkeleton}</li>
      ))}
    </PokemonList>
  );
};

export default Loading;
