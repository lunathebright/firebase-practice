import { deleteDoc, doc, updateDoc } from "firebase/firestore";
import { useState } from "react";
import { dbService } from "../firebase";

const Tweet = ({ tweetObj, isOwner }) => {
  const [editing, setEditing] = useState(false);
  const [newTweet, setNewTweet] = useState(tweetObj.text);

  const onDeleteClick = () => {
    const ok = window.confirm("are you sure you want to delete?");
    if (ok) {
      deleteDoc(doc(dbService, `tweets/${tweetObj.id}`));
    }
  };

  const toggleEditing = () => setEditing((prev) => !prev);
  const onChange = (e) => {
    setNewTweet(e.target.value);
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    await updateDoc(doc(dbService, `tweets/${tweetObj.id}`), {
      text: newTweet,
    });
    setEditing(false);
  };

  return (
    <div>
      {editing ? (
        <>
          <form onSubmit={onSubmit}>
            <input
              type="text"
              placeholder="edit tweet"
              value={newTweet}
              required
              onChange={onChange}
            />
            <input type="submit" value="update" />
          </form>
          <button onClick={toggleEditing}>cancel</button>
        </>
      ) : (
        <>
          <h4>{tweetObj.text}</h4>
          {isOwner && (
            <>
              <button onClick={onDeleteClick}>delete</button>
              <button onClick={toggleEditing}>edit</button>
            </>
          )}
        </>
      )}
    </div>
  );
};

export default Tweet;
