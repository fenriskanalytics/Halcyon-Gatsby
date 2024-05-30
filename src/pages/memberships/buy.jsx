// src/pages/Buy.js
import React, { useEffect } from 'react';
import {
  PageParamsProvider as PageParamsProvider__,
  GlobalContextsProvider,
  UnnamedGlobalGroupOfVariantsContext
} from "@plasmicapp/react-web/lib/host";
import { PlasmicBuy, Head } from "../../components/plasmic/copy_of_halcyon_studios/PlasmicBuy";

const Buy = ({ location, path, params }) => {
  useEffect(() => {
    // Inject the script here
    (function () {
      // Set tenant name here
      var TENANT_NAME = 'halcyonstudio'; // Replace 'your-tenant-name' with your actual tenant name

      var d = document;
      var sA = ['polyfills', 'js'];

      for (var i = 0; i < sA.length; i++) {
        var s = d.createElement('script');
        s.src = 'https://' + TENANT_NAME + '.marianaiframes.com/' + sA[i];
        s.setAttribute('data-timestamp', +new Date());
        (d.head || d.body).appendChild(s);
      }
    })();
  }, []);

  return (
    <>
      <UnnamedGlobalGroupOfVariantsContext.Provider value={undefined}>
        <GlobalContextsProvider>
          <PageParamsProvider__
            route={path}
            params={params}
            query={Object.fromEntries(new URLSearchParams(location.search))}
          >
            <PlasmicBuy />
          </PageParamsProvider__>
        </GlobalContextsProvider>
      </UnnamedGlobalGroupOfVariantsContext.Provider>
      <noscript>
        Please enable JavaScript to view the
        <a href="https://marianatek.com/?ref_noscript" rel="nofollow">
          Web Integrations by Mariana Tek.
        </a>
      </noscript>
    </>
  );
}

export default Buy;
