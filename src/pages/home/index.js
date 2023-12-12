import "./styles.css";
import candlestick from "../../assets/candlestick.png";

const Home = () => {
  /*const [products, setProducts] = useState([]);
  const dispatch = useDispatch();
  const productsInCart = useSelector((state) => state.cart);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((data) => data.json())
      .then((result) => {
        setProducts(result);
      })
      .catch((error) => console.log(error));
  }, []);

  const checkProduct = (product) => {
    return productsInCart.find((item) => item.id === product.id);
  };

  const renderItem = ({ item }) => (
    <div className="card">
      <img src={item.image} alt={item.title} className="product-image" />
      <div className="product-details">
        <h2 className="product-title">{item.title}</h2>
        <p className="product-description">{item.description}</p>
      </div>
      <div>{`Price: RS ${item.price}/-`}</div>
      <button
        className="add-to-cart"
        onClick={() => {
          checkProduct(item)
            ? alert("Product already present in cart")
            : dispatch(add(item));
        }}
      >
        Add to Cart
      </button>
    </div>
  );

  return (
    <div className="home-container">
      {!products.length ? (
        <div>Loading...</div>
      ) : (
        products.map((item) => (
          <Fragment key={item.id}>{renderItem({ item })}</Fragment>
        ))
      )}
    </div>
  );*/

  return (
    <div className="home-container">
      <div className="trainings-and-services">Training and services</div>
      <div className="training-services-heading">
        Our time-tested and precision-driven training programs
      </div>
      <div className="table-container">
        <div className="column1">
          <div className="row">
            <div className="left-part">1.</div>
            <div className="right-part">
              <div className="title">
                Trading Essentials: From Novice to Pro (Training)
              </div>
              <div className="description">
                A roadmap for mastering the intricacies of financial markets,
                cultivating a strategic mindset, and achieving consistent
                success in your trading endeavors.
              </div>
            </div>
          </div>
          <div className="row">
            <div className="left-part">2.</div>
            <div className="right-part">
              <div className="title">
                Trading with Algorithms: A Practical Guide to Profitability
                (Training)
              </div>
              <div className="description">
                This training focuses on traders seeking a hands-on approach to
                automate their own strategy with the help of algorithms. We will
                provide you practical training which will help you to automate
                your trading strategy.
              </div>
            </div>
          </div>
          <div className="row">
            <div className="left-part">3.</div>
            <div className="right-part">
              <div className="title">AutoTrade (An AlgoTradeTech Product)</div>
              <div className="description">
                Our custom built and tested algorithm, to increase your
                profitability with machine trading. This is an automated product
                which focuses on minimizing your losses and maximizing your.
                profits
              </div>
            </div>
          </div>
        </div>
        <div className="column2 gradient-container">
          <img className="candlestick" src={candlestick} alt="candlestick" />
        </div>
      </div>
    </div>
  );
};

export default Home;
