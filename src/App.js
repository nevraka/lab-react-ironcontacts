import contacts from './contacts.json';
import './App.css';
import { useState } from 'react';

function App() {
  const [allContacts, setAllContacts] = useState(contacts);

  const handleAddContact = () => {
    let random = contacts[Math.floor(Math.random() * contacts.length)];

    setAllContacts([random, ...allContacts]);
  };

  let clone = [...allContacts];

  const handleNameSort = () => {
    clone.sort((a, b) => {
      if (a.name > b.name) {
        return 1;
      } else if (a.name < b.name) {
        return -1;
      } else {
        return 0;
      }
    });

    setAllContacts(clone);
  };

  const handlePopSort = () => {
    clone.sort((a, b) => {
      if (a.popularity > b.popularity) {
        return 1;
      } else if (a.popularity < b.popularity) {
        return -1;
      } else {
        return 0;
      }
    });

    setAllContacts(clone);
  };

  const handleDelete = (id) => {
    let filteredContacts = allContacts.filter((e) => {
      return e.id !== id;
    });
    setAllContacts(filteredContacts);
  };

  return (
    <div className="App">
      <h1>IronContacts</h1>
      <button className="button" onClick={handleAddContact}>
        Add Random Contact
      </button>
      <button className="button" onClick={handlePopSort}>
        Sort by popularity
      </button>
      <button className="button" onClick={handleNameSort}>
        Sort by name
      </button>
      <table>
        {allContacts.map((e) => {
          return (
            <>
              <tr>
                <th>Picture</th>
                <th>Name</th>
                <th>Popularity</th>
                <th>Won Oscar</th>
                <th>Won Emmy</th>
                <th>Actions</th>
              </tr>
              <tr>
                <td>
                  <img
                    style={{ height: '80px' }}
                    src={e.pictureUrl}
                    alt="pic"
                  />
                </td>
                <td> {e.name}</td>
                <td>{e.popularity.toFixed(2)}</td>
                <td>{e.wonOscar && '🏆'}</td>
                <td>{e.wonEmmy && '🌟'}</td>
                <td>
                  <button
                    onClick={() => {
                      handleDelete(e.id);
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            </>
          );
        })}
      </table>
    </div>
  );
}

export default App;
