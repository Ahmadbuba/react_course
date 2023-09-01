import { Route } from "react-router-dom";
import MainHeader from "./components/MainHeader";
import ProductDetail from "./pages/ProductDetail";
import Products from "./pages/Products";
import Welcomce from "./pages/Welcome";

function App() {
  return (
    <div>
      <MainHeader />
      <main>
        <Route path="/welcome">
          <Welcomce />
        </Route>
        <Route path="/products">
          <Products />
        </Route>
        <Route path="/product-detail">
          <ProductDetail />
        </Route>
      </main>
    </div>
  );
}

export default App;
