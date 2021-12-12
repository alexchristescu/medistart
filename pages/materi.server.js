// import { firestore } from "../firebase";
// import { query, collection, getDocs } from "firebase/firestore";
// import { FirebaseAppProvider, FirestoreProvider, useFirestoreDocData, useFirestore, useFirebaseApp } from 'reactfire';

// const data = query(collection(firestore, "test"));

// export default async function Materi({}) {
//   const querySnapshot = await getDocs(data);

//   const dataArray = [];
//   querySnapshot.forEach((doc) =>
//     dataArray.push({
//       name: doc.data().name,
//       description: doc.data().description,
//     })
//   );
//   return (
//     <main>
//       {dataArray.map((data) => (
//         <>
//           <a href="_blank">
//             <h2 key={data.name}>{data.name}</h2>
//             <p key={data.description}>{data.description}</p>y
//           </a>
//         </>
//       ))}
//     </main>
//   );
// }
