import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";

import { Layout } from "../widgets";
import { LoadingSpinner } from "../shared/UI";

const Main = React.lazy(() => import("../pages/Main/Main"));
const Show = React.lazy(() => import("../pages/Show/Show"));
const Upload = React.lazy(() => import("../pages/Upload/Upload"));

function App() {
  return (
    <Layout>
      <br />
      <Suspense
        fallback={
          <div className="centered">
            <LoadingSpinner />
          </div>
        }
      >
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/show/:id" element={<Show link={""} />} />
          <Route path="/upload" element={<Upload />} />
        </Routes>
      </Suspense>
    </Layout>
  );
}

export default App;
