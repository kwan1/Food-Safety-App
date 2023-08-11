import { useState } from 'react';
import { letters } from './data.js';
import Letter from './Letter.js';

export default function MailClient() {
  const [selectedId, setSelectedId] = useState([]); //Use empty array for multiple selection

  // TODO: allow multiple selection
  const selectedCount = selectedId.length;

  function handleToggle(toggledId) {
    if (selectedId.includes(toggledId)) {
      setSelectedId(selectedId.filter(id => id !== toggledId));
    } else {
        setSelectedId([...selectedId, toggledId]);
        }
  }

  return (
    <>
      <h2>Inbox</h2>
      <ul>
        {letters.map(letter => (
          <Letter
            key={letter.id}
            letter={letter}
            isSelected={
                selectedId.includes(letter.id)
            }
            onToggle={handleToggle}
          />
        ))}
        <hr />
        <p>
          <b>
            You selected {selectedCount} letters
          </b>
        </p>
      </ul>
    </>
  );
}
