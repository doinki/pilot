import type { FC } from 'react';
import { Link } from 'react-router-dom';

export const Component: FC = () => {
  return (
    <div>
      <h1 className="text-center text-4xl">About</h1>
      <nav>
        <ul style={{ listStyle: 'inside' }}>
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
