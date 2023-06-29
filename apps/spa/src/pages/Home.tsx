import type { FC } from 'react';
import { Link } from 'react-router-dom';

export const Component: FC = () => {
  return (
    <div>
      <h1>Home</h1>
      <nav>
        <ul>
          <li>
            <Link to="about">About</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
