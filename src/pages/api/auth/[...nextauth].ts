import environment from "@/config/environtment";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { JWTExtended, UserExtended, SessionExtended } from "@/types/Auth";
import authServices from "@/services/auth.service";

export default NextAuth({
  session: {
    strategy: "jwt",
    maxAge: 60 * 60 * 24, // 30 days
  },

  // Configure the secret for signing the JWT
  secret: environment.AUTH_SECRET,
  
  // Configure the authentication providers
  providers: [
    CredentialsProvider({ // providers should be an array
      id: "credentials",
      name: "credentials",
      credentials: {
        identifier: { label: "identifier", type: "text" },
        password: { label: "password", type: "password" },
      },
    
    // The credentials provider will be used to handle the login form
      async authorize(
        credentials: Record<"identifier" | "password", string> | undefined,
      ): Promise<UserExtended | null> {
        const { identifier, password } = credentials as {
          identifier: string;
          password: string;
        };

        console.log("CREDENTIALS:", credentials);

        const result = await authServices.login({
          identifier,
          password,
        });

          console.log("LOGIN RESPONSE:", result.status, result.data);
        //get user data from the result
        const accessToken = result.data.data;

        //get user data such token 
        const me = await authServices.getProfileWithToken(accessToken);
        
        const user = me.data.data;
        
        if (
          accessToken &&
          result.status === 200 &&
          user._id &&
          me.status === 200
        ) {
          user.accessToken = accessToken;
          return user;
        } else {
          return null;
        }
      },
    }), // Corrected to use an array and wrap the provider in parentheses
  ],
  
  // The callbacks object should be at the same level as providers and session
  callbacks: {
    async jwt({token, user}: { token: JWTExtended; user: UserExtended }) {
      if (user) {
        token.user = user;
      }
      return token;
    },

    async session({ session, token }: { session: SessionExtended; token: JWTExtended }) {
      session.user = token.user;
      session.accessToken = token.user?.accessToken;
      return session;
    },
  },
  
});


// import environment from "@/config/environtment";
// import NextAuth from "next-auth";
// import CredentialsProvider from "next-auth/providers/credentials";
// import { JWTExtended, UserExtended, SessionExtended } from "@/types/Auth";
// import authServices from "@/services/auth.service";

// export default NextAuth({
//   session: {
//     strategy: "jwt",
//     maxAge: 60 * 60 * 24, // 30 days
//   },

//   // Configure the secret for signing the JWT
//   secret: environment.AUTH_SECRET,

//   // Configure the authentication providers
//   providers: [
//     CredentialsProvider({
//       id: "credentials",
//       name: "credentials",
//       credentials: {
//         identifier: { label: "identifier", type: "text" },
//         password: { label: "password", type: "password" },
//       },

//       // The credentials provider will be used to handle the login form
//       async authorize(
//         credentials: Record<"identifier" | "password", string> | undefined
//       ): Promise<UserExtended | null> {
//         const { identifier, password } = credentials as {
//           identifier: string;
//           password: string;
//         };

//         console.log("CREDENTIALS:", credentials);

//         // Step 1: Login request
//         const result = await authServices.login({ identifier, password });
//         console.log("LOGIN RESPONSE:", result.status, result.data);

//         const accessToken = result?.data?.data;
//         if (!accessToken) {
//           console.log("❌ Tidak ada accessToken, gagal login");
//           return null;
//         }

//         // Step 2: Get user profile
//         const me = await authServices.getProfileWithToken(accessToken);
//         console.log("PROFILE RESPONSE:", me.status, me.data);

//         const user = me?.data?.data;
//         if (!user) {
//           console.log("❌ Tidak ada data user, gagal login");
//           return null;
//         }

//         // Simpan token ke user object
//         user.accessToken = accessToken;
//         return user; // langsung return user tanpa syarat status kaku
//       },
//     }),
//   ],

//   callbacks: {
//     async jwt({
//       token,
//       user,
//     }: {
//       token: JWTExtended;
//       user: UserExtended;
//     }) {
//       if (user) {
//         token.user = user;
//       }
//       return token;
//     },

//     async session({
//       session,
//       token,
//     }: {
//       session: SessionExtended;
//       token: JWTExtended;
//     }) {
//       session.user = token.user;
//       session.accessToken = token.user?.accessToken;
//       return session;
//     },
//   },
// });
