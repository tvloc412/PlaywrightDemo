## Run test

> env=dev npx playwright test tests/Apply_Page_Factory.spec.ts --headed --project=chromium

The environment data is defined in env.config.json. The data is called in config/ConfigReader.ts.
If just "env=", it will get the default value "qa".