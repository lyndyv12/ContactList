import { useState, useEffect } from 'react';

function SelectedContact({ selectedContactId, setSelectedContactId }) {
  const [contact, setContact] = useState(null);

  useEffect(() => {
    async function fetchContact() {
      if (selectedContactId) {
        try {
          const response = await fetch(
            `https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`
          );

          const result = await response.json();
          setContact(result);
        } catch (error) {
          console.error(error);
        }
      }
    }

    fetchContact();
  }, [selectedContactId]);

  return (
    <div>
      {contact ? (
        <div>
          <h2>Contact Details</h2>
          <p>Name: {contact.name}</p>
          <p>Email: {contact.email}</p>
          <p>Phone: {contact.phone}</p>
          <button onClick={() => setSelectedContactId(null)}>Back to all</button>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}

export default SelectedContact;
