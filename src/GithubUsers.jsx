import React, { useState } from 'react';
import { GithubUser } from './GithubUser';

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
        <input type="text"value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}/>
        <button type="submit">Search</button>
      </form>
      <div>
        {users.map((user, index) => <GithubUser key={index} username={user.login} />)}
      </div>
    </div>
  );
}
