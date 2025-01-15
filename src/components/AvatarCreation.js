// import React, { useState } from 'react';

// const AvatarPage = () => {
//   const [avatarData, setAvatarData] = useState({
//     height: '',
//     weight: '',
//     chest: '',
//     waist: '',
//     hips: '',
//     inseam: '',
//     exercise: ''
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setAvatarData({ ...avatarData, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log('Avatar Data:', avatarData);
//     alert('Avatar created successfully!');
//   };

//   return (
//     <div className="container">
//       <h1>Avatar Creation Page</h1>
//       <form onSubmit={handleSubmit}>
//         {Object.keys(avatarData).map((key) => (
//           <div className="mb-3" key={key}>
//             <label htmlFor={key} className="form-label">
//               {key.charAt(0).toUpperCase() + key.slice(1)}:
//             </label>
//             <input
//               type="text"
//               className="form-control"
//               id={key}
//               name={key}
//               value={avatarData[key]}
//               onChange={handleChange}
//               placeholder={`Enter ${key}`}
//             />
//           </div>
//         ))}
//         <button type="submit" className="btn btn-success">Create Avatar</button>
//       </form>
//     </div>
//   );
// };

// export default AvatarPage;
