import React from 'react';
import { Link } from 'react-router-dom';

import { capitalizeFirstLetter } from '../../utils';

interface INavLink {
  path: string
  title: string
}

interface IHeaderProps {
  title: string
  links: INavLink[]
}

const FC: React.FC<IHeaderProps> = props => {
  return (
    <header className="header">
      <h1>{props.title}</h1>
      <nav>
        <ul>
          {props.links.map((link, index) => (
            <li key={link.path + index}>
              <Link to={`/${link.path}`}>{capitalizeFirstLetter(link.title)}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export { FC as Header }
