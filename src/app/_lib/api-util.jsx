import { db } from "@/app/firebase/firestore";
import { collection, getDocs, orderBy, query } from "firebase/firestore";

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
  return data;
}
