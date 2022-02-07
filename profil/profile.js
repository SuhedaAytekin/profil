class Profile {
  constructor() {
    (this.clientid = ""), (this.clientSecret = "");
  }

  async getProfile(username) {
    const profileResponse = await fetch(
      `https://jsonplaceholder.typicode.com/users?username=${username}`
    );

    const profile = await profileResponse.json();

    //////////
    const postResponse = await fetch(
      `https://jsonplaceholder.typicode.com/posts?userId=${profile[0].id}`
    );

    const post = await postResponse.json();
    ///////
    return {
      profile,
      post,
    };
  }
}
