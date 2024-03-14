import Header from './Header.jsx'
import Footer from './Footer.jsx'
import List from './List.jsx'
import Card from './Card.jsx'

//STUDENTS LIST
const students = [
    { id: 1, name: "Baek Yijin", email: "skawngur@gmail.com", img: "yijin"},
    { id: 2, name: "Ji Seungwan", email: "jmyoungl@gmail.com", img: "seungwan" },
    { id: 3, name: "Na Hee-Do", email: "kimtaeri_offic@gmail.com", img: "heedo"},
    { id: 4, name: "Moon Jiwoong", email: "_choiiii_@gmail.com", img: "jiwoong" },
    { id: 5, name: "Ko Yu-rim", email: "bn_95819@gmail.com", img: "yurim" }
  ];

function App() {

      return(
      <>
        <Header/>

        <div className="App">
        <List students={students} />
        </div>

        <Footer/>
      </>
      );
}

export default App
