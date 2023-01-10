import Header from './Components/Header'
import Body from './Components/Body';
import Footer from './Components/Footer'
import Login from './Components/login';
import MultipleProps from './Components/MultipleProps';
import Blog from './Components/Blog/Blog'
import Plan from './Components/Plan/Plan'

function App() {
  const blogImg = 'https://cdn2.hubspot.net/hubfs/322787/Mychefcom/images/BLOG/Header-Blog/photo-culinaire-pexels.jpg'

  return (
    <>
      {/* <Header />
      <Body />
      <Login name='Ayan' />
      <MultipleProps x='Debasish' y='Sahoo' z="35" />
      <Footer /> */}

      {/* <Blog
        headline='Why you Need More Iron in Your Daily Diet'
        author='Igor MARTY'
        authorImg='https://randomuser.me/api/portraits/men/95.jpg'
        blogimg={blogImg}

      /> */}

      <Plan />


    </>



  );
}

export default App;