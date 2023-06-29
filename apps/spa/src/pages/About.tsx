import type { FC } from 'react';
import { Link } from 'react-router-dom';

export const Component: FC = () => {
  return (
    <div>
      <h1>About</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
