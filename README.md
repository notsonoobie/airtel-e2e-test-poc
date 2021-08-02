## To Start E-2-E Testing for Airtel MWEB

  ```bash
    git clone https://github.com/notsonoobie/airtel-e2e-test-poc.git
  ```

  ```bash
    cd airtel-e2e-test-poc && npm i && npm test
  ```

```

  To test MWEB locally, run the MWEB locally first or else use hosted MWEB Endpoints.

  Change Base URL from `wdio.conf.js`

      baseUrl: 'http://localhost:3000'
```