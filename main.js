const serverUrl = "https://pwj3xtoswhdc.usemoralis.com:2053/server";
const appId = "ETw6gLL6BMVcfCtnf3u4FxEZHAxcTDLJoLOZ1liu";
Moralis.start({ serverUrl, appId });

/** Add from here down */
async function login() {
  let user = Moralis.User.current();
  if (!user) {
    try {
      user = await Moralis.authenticate({ signingMessage: "Hello World!" });
      
      
    } catch (error) {
      console.log(error);
    }
  }
  console.log(user);
  console.log(user.get("ethAddress"));
}

async function logOut() {
  await Moralis.User.logOut();
  console.log("logged out");
}

document.getElementById("btn-login").onclick = login;
document.getElementById("btn-logout").onclick = logOut;