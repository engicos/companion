import { Fragment } from "react";

// Custom Components
import Header from "./Header";
import Footer from "./Footer";

const Layout = (props) => {
  return (
    <Fragment>
      <Header />
      {props.children}
      <Footer />
    </Fragment>
  );
};

export default Layout;
