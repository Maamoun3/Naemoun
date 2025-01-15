import React, { useEffect, useState } from 'react';

const ProfilePage = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {

    fetch('http://localhost:3000/api/user')
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Failed to fetch user data');
        }
      })
      .then(data => setUserData(data))
      .catch(error => console.error(error));
  }, []);

  if (!userData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Welcome, {userData.displayName}</h1>
      <p>Email: {userData.emails[0].value}</p>
    </div>
  );
};

export default ProfilePage;
