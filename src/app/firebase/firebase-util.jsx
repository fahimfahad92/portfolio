import { db } from "@/app/firebase/firebase";
import {
  collection,
  getDocs,
  onSnapshot,
  orderBy,
  query,
  where,
} from "firebase/firestore";

export async function getProjectsData() {
  console.log("Calling firestore to get projects data");
  const q = query(collection(db, "projects"), orderBy("order", "desc"));
  const querySnapshot = await getDocs(q);
  let data = [];
  querySnapshot.forEach((doc) => {
    data.push({
      id: doc.id,
      ...doc.data(),
    });
  });

  return data;
}

export async function getProjectDetailsData(projectName) {
  console.log(
    "Calling firestore to get project details data for " + projectName
  );
  const q = query(
    collection(db, "projectDetails"),
    where("name", "==", projectName)
  );
  const querySnapshot = await getDocs(q);
  let data = [];
  querySnapshot.forEach((doc) => {
    data.push({
      id: doc.id,
      ...doc.data(),
    });
  });

  return data[0];
}

export async function getExperienceData() {
  console.log("Calling firestore to get experience data");
  const q = query(collection(db, "experience"), orderBy("order", "desc"));
  const querySnapshot = await getDocs(q);
  let data = [];
  querySnapshot.forEach((doc) => {
    data.push({
      id: doc.id,
      ...doc.data(),
    });
  });

  return data;
}

export async function getExperienceDetailsData(companyName) {
  console.log(
    "Calling firestore to get experience details data for " + companyName
  );
  const q = query(
    collection(db, "experienceDetails"),
    where("companyName", "==", companyName)
  );
  const querySnapshot = await getDocs(q);
  let data = [];
  querySnapshot.forEach((doc) => {
    data.push({
      id: doc.id,
      ...doc.data(),
    });
  });

  return data[0];
}

export async function getBlogData() {
  console.log("Calling firestore to get blog data");
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

export async function getSkillsData() {
  console.log("Calling firestore to get skills data");
  const q = query(collection(db, "skills"), orderBy("order", "asc"));
  const querySnapshot = await getDocs(q);
  let data = [];
  querySnapshot.forEach((doc) => {
    data.push({
      id: doc.id,
      ...doc.data(),
    });
  });

  return data;
}

export async function getEducationData() {
  console.log("Calling firestore to get education data");
  const q = query(collection(db, "education"), orderBy("order", "asc"));
  const querySnapshot = await getDocs(q);
  let data = [];
  querySnapshot.forEach((doc) => {
    data.push({
      id: doc.id,
      ...doc.data(),
    });
  });

  return data;
}
