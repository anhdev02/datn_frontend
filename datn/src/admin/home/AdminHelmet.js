import React from "react";
import { Helmet } from "react-helmet";

const adminHelmet = () => {
  return (
    <>
      <Helmet>
        <link rel="stylesheet" href="http://localhost:3000/admin/assets/vendor/fonts/boxicons.css" />
        <link
          rel="stylesheet"
          href="http://localhost:3000/admin/assets/vendor/css/core.css"
          class="template-customizer-core-css"
        />
        <link
          rel="stylesheet"
          href="http://localhost:3000/admin/assets/vendor/css/theme-default.css"
          class="template-customizer-theme-css"
        />
        <link rel="stylesheet" href="http://localhost:3000/admin/assets/css/demo.css" />

        <link
          rel="stylesheet"
          href="http://localhost:3000/admin/assets/vendor/libs/perfect-scrollbar/perfect-scrollbar.css"
        />

        <link
          rel="stylesheet"
          href="http://localhost:3000/admin/assets/vendor/libs/apex-charts/apex-charts.css"
        />
        <script src="http://localhost:3000/admin/assets/vendor/js/helpers.js"></script>

        <script src="http://localhost:3000/admin/assets/js/config.js"></script>
      </Helmet>
    </>
  );
};

export default adminHelmet;
