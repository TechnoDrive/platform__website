import React from "react";

import Header from "../components/common/Header";
import Earn from "../components/modules/Earn";
import Footer from "../components/common/Footer";

export default function EarnRoute() {
  React.useEffect(() => {
    document.title = "Earn";
  }, []);

  return (
    <div>
      <Header />
      <Earn />
      <Footer />
    </div>
  );
}
