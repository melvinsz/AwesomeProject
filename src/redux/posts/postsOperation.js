import { addDoc, collection, getDocs, query, getCountFromServer, where, doc } from "firebase/firestore";
import { db } from "../../firebase/config";

import { postsAction } from "./postsSlice";
import dateBeautify from "../../helpers/dateBeautify";
import { toastError } from "../../helpers/toastMessage";

const getAllPosts = () => async (dispatch, getState) => {
  try {
    const { userId } = getState().auth;

    const posts = await getDocs(collection(db, "posts"));

    const newPosts = posts.docs.map(async (doc) => {
      const snapshotComments = await getCountFromServer(collection(doc.ref, "comments"));
      const countComments = snapshotComments.data().count;

      const snapshotLikes = await getCountFromServer(collection(doc.ref, "likes"));
      const countLikes = snapshotLikes.data().count;

      const q = query(collection(doc.ref, "likes"), where("authorId", "==", userId));
      const likes = await getDocs(q);

      return {
        ...doc.data(),
        id: doc.id,
        countComments,
        countLikes,
        isLiked: !likes.empty,
      };
    });

    const payload = await Promise.all(newPosts);

    dispatch(postsAction.updatePosts(payload));
  } catch (error) {
    toastError(error);
  }
};

const getOwnPosts = () => async (dispatch, getState) => {
  try {
    const { userId } = getState().auth;
    const q = query(collection(db, "posts"), where("userId", "==", userId));
    const posts = await getDocs(q);

    const newPosts = posts.docs.map(async (doc) => {
      const snapshotComments = await getCountFromServer(collection(doc.ref, "comments"));
      const countComments = snapshotComments.data().count;

      const snapshotLikes = await getCountFromServer(collection(doc.ref, "likes"));
      const countLikes = snapshotLikes.data().count;

      const q = query(collection(doc.ref, "likes"), where("authorId", "==", userId));
      const likes = await getDocs(q);

      return {
        ...doc.data(),
        id: doc.id,
        countComments,
        countLikes,
        isLiked: !likes.empty,
      };
    });

    const payload = await Promise.all(newPosts);

    dispatch(postsAction.updateOwnPosts(payload));
  } catch (error) {
    toastError(error);
  }
};

const uploadPostToServer = (post) => async (dispatch, getState) => {
  const { userId } = getState().auth;
  try {
    await addDoc(collection(db, "posts"), {
      ...post,
      userId,
    });
    dispatch(getAllPosts());
    dispatch(getOwnPosts());
  } catch (e) {
    toastError(e);
  }
};

const addCommentByPostID = (postId, commentData) => async (dispatch, getState) => {
  try {
    const { nickName, userId, userAvatar } = getState().auth;

    const comment = {
      comment: commentData,
      authorName: nickName,
      authorId: userId,
      date: Date.now(),
      postId: postId,
      userAvatar: userAvatar,
    };

    console.log("comment::", comment);

    const docRef = doc(db, "posts", postId);

    await addDoc(collection(docRef, "comments"), { ...comment });

    dispatch(getAllCommentsByPostId(postId));
  } catch (e) {
    toastError(e);
  }
};

const getAllCommentsByPostId = (postId) => async (dispatch) => {
  try {
    const docRef = doc(db, "posts", postId);

    const comments = await getDocs(collection(docRef, "comments"));

    const payload = comments.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
      date: dateBeautify(doc.data().date),
      dateForSort: doc.data().date,
    }));
    console.log("payload", payload);

    dispatch(postsAction.updateCommentsToPost(payload));
  } catch (e) {
    toastError(e);
  }
};

const postOperation = {
  getOwnPosts,
  getAllPosts,
  uploadPostToServer,
  addCommentByPostID,
  getAllCommentsByPostId,
};

export default postOperation;
