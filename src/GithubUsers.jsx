import React, { useState } from 'react';
import { GithubUser } from './GithubUser';
import { Link, Outlet } from 'react-router-dom';

export function GithubUsers() {
  const [searchTerm, setSearchTerm] = useState('');
  const [users, setUsers] = useState([]);

  async function handleSearch(event) {
    event.preventDefault();
    try {
      const response = await fetch(`https://api.github.com/users/${searchTerm}`);
      const user = await response.json();
      setUsers([...users, user]);
      setSearchTerm('');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input type="text" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
        <button type="submit">Search</button>
      </form>
      <div>
        <ul>
          {users.map((user) => (
            <li key={user.login}>
              <Link to={`/users/${user.login}`}>{user.login}</Link>
            </li>
          ))}
        </ul>
      </div>
      <Outlet />
    </div>
  );
}
