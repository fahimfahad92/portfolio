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
  try {
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
  } catch (err) {
    console.log(`Error for project data ${err}`);
    return false;
  }
}

export async function getProjectDetailsData(projectName) {
  console.log(
    "Calling firestore to get project details data for " + projectName
  );
  try {
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
  } catch (err) {
    console.log(`Error for project detail data ${projectName} ${err}`);
    return false;
  }
}

export async function getExperienceData() {
  console.log("Calling firestore to get experience data");
  try {
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
  } catch (err) {
    console.log(`Error for experience data ${err}`);
    return false;
  }
}

export async function getExperienceDetailsData(companyName) {
  console.log(
    "Calling firestore to get experience details data for " + companyName
  );
  try {
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
  } catch (err) {
    console.log(`Error for experience details data  for ${companyName} ${err}`);
    return false;
  }
}

export async function getBlogData() {
  console.log("Calling firestore to get blog data");
  try {
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
  } catch (err) {
    console.log(`Error for blog data ${err}`);
    return false;
  }
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
  try {
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
  } catch (err) {
    console.log(`Error for skill data ${err}`);
    return false;
  }
}

export async function getEducationData() {
  console.log("Calling firestore to get education data");
  try {
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
  } catch (err) {
    console.log(`Error for education data ${err}`);
    return false;
  }
}
