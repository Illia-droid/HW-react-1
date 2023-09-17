import React, { Component } from "react";
import { UserContext } from "./contexts";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavMenu from "./components/NavMenu";
import Home from "./pages/Home";
import UsersPage from "./pages/UsersPage";
import Page404 from "./pages/Page404";
import LoaderPage from "./pages/LoaderPage";
import UsersBlock from "./pages/LoaderPage/UsersBlock";
import EventsBlock from "./pages/LoaderPage/EventsBlock";
import ProductsBlock from "./pages/LoaderPage/ProductsBlock";
// function App() {
//   return (
//     <BrowserRouter>
//       <NavMenu />
//
//     </BrowserRouter>
//   );
// }

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        id: 1,
        firstName: "Brad",
        lastName: "Pitt",
        isSelect: false,
      },
    };
  }
  selectUser = (id) => {
    this.setState({
      user: { ...this.state.user, isSelect: !this.state.user.isSelect },
    });
  };
  render() {
    const { user } = this.state;
    return (
      <UserContext.Provider value={{ user, selectUser: this.selectUser }}>
        <BrowserRouter>
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/users" element={<UsersPage />} />
              <Route path="/loader/" element={<LoaderPage />}>
                <Route path="users" element={<UsersBlock />} />
                <Route path="events" element={<EventsBlock />} />
                <Route path="prosucts" element={<ProductsBlock />} />
                <Route path="*" element={<Page404 />} />
              </Route>
            </Routes>
          </main>
          <Footer />
        </BrowserRouter>
      </UserContext.Provider>
    );
  }
}
export default App;
