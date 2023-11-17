import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postAdded } from "./postSlice";
import { allUsers } from "../users/usersSlice";

const AddPostForm = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [userId, setUserId] = useState("");
  const dispatch = useDispatch();
  const users = useSelector(allUsers);


  const onTitleChange = (e) => {
    setTitle(e.target.value);
  };
  const onContentChange = (e) => {
    setContent(e.target.value);
  };
  const onUsersChange = (e) => {
    setUserId(e.target.value);
  };
  const onSavePostClick = (e) => {
    e.preventDefault();
    if (title && content) {
      dispatch(postAdded(title, content, userId));
      setTitle("");
      setContent("");
    }
  };
  const usersOptions = users.map((user) => {
    return (
      <option key={user.id} value={user.id}>
        {user.name}
      </option>
    );
  });
  const canSave = Boolean(title) && Boolean(content) && Boolean(userId);
  return (
    <div>
      <h2>Add New Post</h2>
      <form>
        <div>
          <select class="form-select mb-3" value={userId} onChange={onUsersChange}>
            {usersOptions}
          </select>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              name="postTitle"
              placeholder="Title"
              value={title}
              onChange={onTitleChange}
            />
          </div>
          <div className="mb-3">
            <textarea
              className="form-control"
              name="postContent"
              rows={3}
              defaultValue={""}
              placeholder="content"
              value={content}
              onChange={onContentChange}
            />
          </div>
          <div>
            <button
              className="btn btn-primary"
              onClick={onSavePostClick}
              type="submit"
              disabled={!canSave}
            >
              Save Post
            </button>
          </div>
        </div>
      </form>
      <hr />
    </div>
  );
};

export default AddPostForm;
