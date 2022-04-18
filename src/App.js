import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./app.css"
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";
import Sales from "./pages/sales/Sales";
import Analytics from "./pages/analytics/Analytics";
import Media from "./pages/media/Media";
import Posts from "./pages/posts/Posts";
import Messages from "./pages/messages/Messages";
import Shipping from "./pages/shipping/Shipping";
import Settings from "./pages/settings/Settings";

function App() {
    return (
        <Router>
            <Topbar />
            <div className="container">
                <Sidebar />
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/users">
                        <UserList />
                    </Route>
                    <Route path="/user/:userId">
                        <User />
                    </Route>
                    <Route path="/newUser">
                        <NewUser />
                    </Route>
                    <Route path="/products">
                        <ProductList />
                    </Route>
                    <Route path="/product/:productId">
                        <Product />
                    </Route>
                    <Route path="/newProduct">
                        <NewProduct />
                    </Route>
                    <Route path="/sales">
                        <Sales />
                    </Route>
                    <Route path="/analytics">
                        <Analytics />
                    </Route>
                    <Route path="/posts">
                        <Posts />
                    </Route>
                    <Route path="/media">
                        <Media />
                    </Route>
                    <Route path="/messages">
                        <Messages />
                    </Route>
                    <Route path="/shipping">
                        <Shipping />
                    </Route>
                    <Route path="/settings">
                        <Settings />
                    </Route>
                </Switch>
            </div>
        </Router>
    )
}

export default App;