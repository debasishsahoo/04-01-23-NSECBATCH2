import Header from './Components/Header'
import Body from './Components/Body';
import Footer from './Components/Footer'
import Login from './Components/login';
import MultipleProps from './Components/MultipleProps';

function App() {
  return (
    <>
      <Header />
      <Body />
      <Login name='Ayan' />
      <MultipleProps x='Debasish' y='Sahoo' z="35" />
      <Footer />
    </>



  );
}

export default App;
