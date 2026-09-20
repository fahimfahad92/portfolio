import { db } from "@/app/firebase/firebase";
import {
    collection,
    getDocs,
    onSnapshot,
    orderBy,
    query,
} from "firebase/firestore";

// ─── Collection name constants ───────────────────────────────────────────────

const COLLECTIONS = {
    BLOGS:     "blogs",
    SKILLS:    "skills",
    EDUCATION: "education",
};

// ─── Shared fetch helper ─────────────────────────────────────────────────────

/**
 * Runs a Firestore query and maps results to plain objects.
 * @param {import("firebase/firestore").Query} q
 * @returns {Promise<Array<{id: string} & Record<string, unknown>>>}
 */
async function fetchDocs(q) {
    const snapshot = await getDocs(q);
    return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
}

// ─── Public fetch functions ───────────────────────────────────────────────────

/**
 * @typedef {{ id: string, title: string, tags: string[], publishDate: Date, readTime?: number, link?: string }} Blog
 * @returns {Promise<Blog[] | false>}
 */
export async function getBlogData() {
    try {
        const snapshot = await getDocs(query(collection(db, COLLECTIONS.BLOGS), orderBy("publishDate", "desc")));
        return snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
            publishDate: doc.data().publishDate.toDate(),
        }));
    } catch (err) {
        console.error("[getBlogData]", err);
        return false;
    }
}

/**
 * Subscribes to real-time blog updates.
 * @param {(blogs: Blog[]) => void} callback
 * @returns {() => void} Unsubscribe function
 */
export function getBlogDataSnapshot(callback) {
    const q = query(collection(db, COLLECTIONS.BLOGS), orderBy("publishDate", "desc"));

    return onSnapshot(
        q,
        (snapshot) => {
            const results = snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
                publishDate: doc.data().publishDate.toDate(),
            }));
            callback(results);
        },
        (error) => {
            console.error("[getBlogDataSnapshot]", error);
            callback([]);
        }
    );
}

/**
 * @typedef {{ id: string, group: string, skillMap: Record<string, number>, order: number }} SkillGroup
 * @returns {Promise<SkillGroup[] | false>}
 */
export async function getSkillsData() {
    try {
        return await fetchDocs(query(collection(db, COLLECTIONS.SKILLS), orderBy("order", "asc")));
    } catch (err) {
        console.error("[getSkillsData]", err);
        return false;
    }
}

/**
 * @typedef {{ id: string, universityName: string, degree: string, session?: string, cgpa?: string, position?: string, publicationTitle?: string, publicationLink?: string, publisherName?: string, publicationDate?: string, publicationDetail?: string, order: number }} Education
 * @returns {Promise<Education[] | false>}
 */
export async function getEducationData() {
    try {
        return await fetchDocs(query(collection(db, COLLECTIONS.EDUCATION), orderBy("order", "asc")));
    } catch (err) {
        console.error("[getEducationData]", err);
        return false;
    }
}
