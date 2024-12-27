import { db } from "@/app/firebase/firebase";
import {
  collection,
  getDocs,
  onSnapshot,
  orderBy,
  query,
} from "firebase/firestore";

export async function getBlogData() {
  const q = query(collection(db, "blogs"), orderBy("publishDate", "desc"));
  const querySnapshot = await getDocs(q);
  let data = [];
  querySnapshot.forEach((doc) => {
    data.push({
      id: doc.id,
      ...doc.data(),
      publishDate: doc.data().publishDate.toDate(),
    });
  });
  console.log("Blog data from firestore");

  return data;
}

export function getBlogDataSnapshot(callback) {
  const q = query(collection(db, "blogs"), orderBy("publishDate", "desc"));

  const unsubscribe = onSnapshot(q, (querySnapshot) => {
    const results = querySnapshot.docs.map(
      (doc) => {
        console.log("Blog data updated " + doc?.data()?.title);
        return {
          id: doc.id,
          ...doc.data(),
          publishDate: doc.data().publishDate.toDate(),
        };
      },
      (error) => {
        console.log(error);
        return [];
      }
    );
    callback(results);
  });

  return unsubscribe;
}
