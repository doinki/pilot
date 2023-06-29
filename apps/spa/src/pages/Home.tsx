import type { FC } from 'react';
import { Link } from 'react-router-dom';

export const Component: FC = () => {
  return (
    <div>
      <h1 className="text-center text-4xl">Home</h1>
      <nav>
        <ul style={{ listStyle: 'inside' }}>
          <li>
            <Link to="about">About</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
