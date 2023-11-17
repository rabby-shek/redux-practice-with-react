import React from 'react';
import { useSelector } from 'react-redux';
import { allUsers } from '../users/usersSlice';

const PostAuthor = ({ userId }) => {
  const users = useSelector(allUsers);
  console.log('Users:', users); // Log the entire users array to the console
  console.log('userId:', userId);

  users.forEach(user => {
    console.log('User ID:', user.id);
  });

  const author = users.find(user => user.id === parseInt(userId));
  console.log('Author:', author);

  return (
    <div>
      by <span>{author ? author.name : 'unknown user'}</span>
    </div>
  );
};

export default PostAuthor;
