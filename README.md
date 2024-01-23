# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

useEffect(() => {
const fetchChatrooms = async () => {
try {
const chatsRef = query(
collection(db, "Chatrooms"),
where("userIds", "array-contains", "support@distro.com.ng")
);
const querySnapshot = await getDocs(chatsRef);
const chatroomsData = [];
querySnapshot.forEach((doc) => {
// console.log(doc.data());
chatroomsData.push({ ...doc.data(), id: doc.id });
});
setChatrooms(chatroomsData);
} catch (error) {
console.error("Error fetching chatrooms:", error);
}
};

    fetchChatrooms();

}, []);
