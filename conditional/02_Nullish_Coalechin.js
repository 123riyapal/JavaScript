// User object with potentially missing properties
const user = {
    name: 'John Doe',
    age: null, // Age is missing or null
    location: undefined, // Location is missing or undefined
    bio: '', // Empty bio
  };
  
  // Display the user profile with default values
  const userProfile = {
    name: user.name ?? 'Unknown',
    age: user.age ?? 'Age not specified',
    location: user.location ?? 'Location not specified',
    bio: user.bio || 'No bio available',
  };
  
  console.log(userProfile);
  