import NextAuth from "next-auth";
import GithubPrivider from "next-auth/providers/github";

export const authOptions = {
  providers: [
    GithubPrivider({
      //go to the github.com => setting => Developer Settings => oAuth Apps => Register a new Application => application name(Youtube App) => Homepage URl ("http://localhost:3000/")  => Authorization callback URL ("http://localhost:3000/") => then u will see this (Client ID 5382b08e60cccd428018) => click on generate secret to generate secret id
      clientId: "5382b08e60cccd428018",
      clientSecret: "f799dcc58540278d293249d86dc2f9805fc78a91",
    }),
  ],
};

export default NextAuth(authOptions);
