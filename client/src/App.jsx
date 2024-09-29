import "bootstrap/dist/css/bootstrap.min.css";
import "aos/dist/aos.css";
import "glightbox/dist/css/glightbox.css";

import Header from "./component/Header";
import Home from "./pages/Home";
import ScrollToTop from "./component/ScrollToTop";
function App() {
  return (
    <>
      <Header />
      <Home />
      <ScrollToTop />
    </>
  );
}

export default App;
