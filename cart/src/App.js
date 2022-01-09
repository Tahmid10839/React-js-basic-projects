import CartContainer from "./CartContainer";
import Navbar from "./Navbar";
import { useGlobalContext } from './context';

function App() {
  const { loading } = useGlobalContext();
  if (loading) {
    return (
      <div className="loading">
        <h2>Loading...</h2>
      </div>
    )
  }
  return (
    <main>
      <Navbar />
      <CartContainer />
    </main>
  );
}

export default App;
