import firebase from "firebase/compat";
export const fetchAllImages = () => {
  let imgData = [];
  firebase
    .firestore()
    .collection("UserImages")
    .get()
    .then((querySnapshot) => {
      console.log("Total users: ", querySnapshot.size);
      querySnapshot.forEach((documentSnapshot) => {
        console.log("User ID: ", documentSnapshot.id, documentSnapshot.data());
        imgData.push(documentSnapshot.data());
      });
    });
  return imgData;
};
