// import { initializeApp } from "firebase/app";
// import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
// import { useAuthState } from "react-firebase-hooks/auth";

// // 🔹 הגדרות Firebase – יש להחליף בפרטי הפרויקט שלך
// const firebaseConfig = {
//   apiKey: "YOUR_API_KEY",
//   authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
//   projectId: "YOUR_PROJECT_ID",
//   storageBucket: "YOUR_PROJECT_ID.appspot.com",
//   messagingSenderId: "YOUR_SENDER_ID",
//   appId: "YOUR_APP_ID",
// };

// // 🔹 אתחול Firebase
// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);
// const provider = new GoogleAuthProvider();

// export default function GoogleLogin() {
//   const [user] = useAuthState(auth);

//   // ✅ פונקציה להתחברות דרך Google
//   const signInWithGoogle = async () => {
//     try {
//       await signInWithPopup(auth, provider);
//     } catch (error) {
//       console.error("שגיאה בהתחברות:", error);
//     }
//   };

//   // ✅ פונקציה ליציאה מהחשבון
//   const logout = () => {
//     signOut(auth);
//   };

//   return (
//     <div className="p-4">
//       {user ? (
//         <div>
//           <p>שלום, {user.displayName}</p>
//           <img src={user.photoURL || ""} alt="User Profile" className="w-12 h-12 rounded-full" />
//           <button onClick={logout} className="bg-red-500 text-white px-4 py-2 mt-2 rounded">
//             התנתקות
//           </button>
//         </div>
//       ) : (
//         <button onClick={signInWithGoogle} className="bg-blue-500 text-white px-4 py-2 rounded">
//           התחבר עם Google
//         </button>
//       )}
//     </div>
//   );
// }
