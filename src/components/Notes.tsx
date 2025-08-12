import { useState } from "react";

const Notes = () => {
  const [note, setNote] = useState("");
  const [list, setList] = useState<string[]>([]);
  return (
    <div>
      <h1>Notes</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setList([...list, note]);
          setNote("");
        }}
        role="form"
      >
        <input
          type="text"
          value={note}
          onChange={(e) => setNote(e.target.value)}
        />
        <button disabled={note === ""} type="submit">
          Add
        </button>
      </form>
      <ul data-testid="notes-list">
        {list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default Notes;
