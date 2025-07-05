import { useState, useEffect } from "react";
import axios from "axios";
import styles from "./App.module.css";  
function App() {
  const [userData, setUserData] = useState(null);
  const [userName, setUserName] = useState("mustafa627");

  // const apiData = {
  //   "login": "JaffarAman",
  //   "id": 65033254,
  //   "node_id": "MDQ6VXNlcjY1MDMzMjU0",
  //   "avatar_url": "https://avatars.githubusercontent.com/u/65033254?v=4",
  //   "gravatar_id": "",
  //   "url": "https://api.github.com/users/JaffarAman",
  //   "html_url": "https://github.com/JaffarAman",
  //   "followers_url": "https://api.github.com/users/JaffarAman/followers",
  //   "following_url": "https://api.github.com/users/JaffarAman/following{/other_user}",
  //   "gists_url": "https://api.github.com/users/JaffarAman/gists{/gist_id}",
  //   "starred_url": "https://api.github.com/users/JaffarAman/starred{/owner}{/repo}",
  //   "subscriptions_url": "https://api.github.com/users/JaffarAman/subscriptions",
  //   "organizations_url": "https://api.github.com/users/JaffarAman/orgs",
  //   "repos_url": "https://api.github.com/users/JaffarAman/repos",
  //   "events_url": "https://api.github.com/users/JaffarAman/events{/privacy}",
  //   "received_events_url": "https://api.github.com/users/JaffarAman/received_events",
  //   "type": "User",
  //   "user_view_type": "public",
  //   "site_admin": false,
  //   "name": "Jaffar Aman",
  //   "company": "Maleyat Group ",
  //   "blog": "https://jaffar-portfolio.web.app",
  //   "location": "Karachi",
  //   "email": null,
  //   "hireable": true,
  //   "bio": "Senior MERN Stack Developer | React.js, Next.js & Node.js Specialist | TypeScript, JavaScript, MongoDB, NestJS & Express Expert | Lead Trainer at SMIT | Empower",
  //   "twitter_username": null,
  //   "public_repos": 123,
  //   "public_gists": 0,
  //   "followers": 389,
  //   "following": 19,
  //   "created_at": "2020-05-08T16:08:28Z",
  //   "updated_at": "2025-05-25T18:22:44Z"
  // }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userName) {
      fetchUser(userName);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []); 

  const fetchUser = async () => {
    try {
      const postData = await axios.get(
        `https://api.github.com/users/${userName}`  
      );
      setUserData(postData.data);
      // console.log(postData.data, "post data");
    } catch (err) {
      console.log(err.message, "error");
    }
  };

  return (
    <>
    <div className={styles.mainContainer}>
      <div className={styles.formContainer}>
        <h1>SEARH GITHUB ID !</h1> <br />
        <form action="" onSubmit={handleSubmit}>
          <input
            type="text" id="userName"
         placeholder="Enter User Name"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          /> 
          <button type="Submit">SEARCH</button>
        </form>
      </div>
      {userData && (
  <div className={styles.container}>
    <div>
    <img src={userData.avatar_url} />
    <h2>User Name : {userData.login}</h2> 
    <h3>Id : {userData.id}</h3>
      </div>
      <div className={styles.userDetails}>
        <h1 className={styles.h1}>USER DETAILS !!</h1>
        <h4>BIO : {userData.bio}</h4>
        <h4 className={styles.h1}>Location: {userData.location}</h4>
        <h4 className={styles.h1}>Company: {userData.company}</h4>
      <h3>Followers: {userData?.followers}</h3>
        <h4>Public Repos: {userData.public_repos}</h4>
        <h4>Created At: {new Date(userData.created_at).toLocaleDateString()}</h4>
        <h4>Updated At: {new Date(userData.updated_at).toLocaleDateString()}</h4>
      </div>
  </div>
)}
</div>
    </>
  );
}

export default App;
