"use client"
import { initializeApp, getApps } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile
} from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};
const firebaseApp =
  getApps().length === 0
    ? initializeApp(firebaseConfig, "dashboard-creator")
    : getApps()[0];
const auth = getAuth(firebaseApp);

const provider = new GoogleAuthProvider();

const signUpWithEmailAndPassword = async (name:string , email: string, password: string) => {
  const userCredential = await createUserWithEmailAndPassword(auth, email, password)
  await updateProfile(userCredential.user, {
    displayName: name,
  })
};

const loginWithEmailAndPassword = (email: string, password:string) => signInWithEmailAndPassword(auth, email, password)
.then((userCredential) => {
  // Signed in 
  const user = userCredential.user;
  // ...
})
.catch((error) => {
  const errorCode = error.code;
  const errorMessage = error.message;
});

const signInWithGoogle = () =>
  signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential?.accessToken;
      // The signed-in user info.
      const user = result.user;
      // IdP data available using getAdditionalUserInfo(result)
      // ...
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });

const getAppRouterSession = async () => {
  const { cookies } = await import("next/headers");

  try {
    return cookies().get("__session")?.value;
  } catch (error) {
    // cookies() throws when called from pages router
    return undefined;
  }
};

const initializeAuthenticatedApp = (uid: string) => {
  const random = Math.random().toString(36).split(".")[1];
  const appName = `authenticated-context:${uid}:${random}`;

  const app = initializeApp(firebaseConfig, appName);

  return app;
};
const getAuthenticatedAppForUser = async (session: any = null) => {
  const noSessionReturn = { app: null, currentUser: null };

  if (typeof window !== "undefined") {
    // client
    console.log("client: ", firebaseApp);

    return { app: firebaseApp, user: auth.currentUser?.toJSON() };
  }

  if (!session) {
    // if no session cookie was passed, try to get from next/headers for app router
    session = await getAppRouterSession();

    if (!session) return noSessionReturn;
  }
  // const { initializeApp: initializeAdminApp, getApps: getAdminApps } = await import("firebase-admin/app");
  // const { getAuth: getAdminAuth } = await import("firebase-admin/auth");
  // const { credential } = await import("firebase-admin");
  // const ADMIN_APP_NAME = "firebase-frameworks";
  // const adminApp =
  //     getAdminApps().find((it) => it.name === ADMIN_APP_NAME) ||
  //     initializeAdminApp({
  //         credential: credential.applicationDefault(),
  //     }, ADMIN_APP_NAME);
  // const adminAuth = getAdminAuth(adminApp);

  const response = await fetch("/api/verifyFbSession", {
    headers: {
      cookie: `session=${session}`,
    },
  });
  const { decodedClaims, isRevoked } = await response.json();
  // const decodedIdToken = await adminAuth.verifySessionCookie(session);

  const app = initializeAuthenticatedApp(decodedClaims.uid);
  const authenticatedApp = getAuth(app);
  // const isRevoked = !(await adminAuth
  //     .verifySessionCookie(session, true)
  //     .catch((e) => console.error(e.message)));
  if (isRevoked) return noSessionReturn;

  // // authenticate with custom token
  // if (authenticatedApp.currentUser?.uid !== decodedIdToken.uid) {
  //     // TODO(jamesdaniels) get custom claims
  //     const customToken = await adminAuth
  //         .createCustomToken(decodedIdToken.uid)
  //         .catch((e) => console.error(e.message));

  //     if (!customToken) return noSessionReturn;

  //     await signInWithCustomToken(authenticatedApp, customToken);
  // }
  console.log("server: ", app);
  return { app, currentUser: auth.currentUser };
};

const signOut = () => {
  return auth.signOut();
};

export {
  getAuthenticatedAppForUser,
  signInWithGoogle,
  loginWithEmailAndPassword,
  signUpWithEmailAndPassword,
  firebaseApp,
  auth,
  firebaseConfig,
  signOut,
};
