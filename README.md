### Accesses

Admin:

User:
```
areader@example.com
awesome
```

### Create project

```bash
mkdir angola; cd angola
rails new . -a propshaft -j esbuild --database postgresql --skip-test --css tailwind
```

### Configurations

Add new path in `tailwind.config.js`
```
'./config/initializers/simple_form_tailwind.rb'
```
\
\
Configure foreman
```
postgres: postgres -D $HOME/.asdf/installs/postgres/16.2/data
web: env RUBY_DEBUG_OPEN=true bin/rails server -p 3000
js: yarn build --watch
css: yarn build:css --watch
```
\
\
Add TypeScript in our watched build process
\
More about tsc-watch: https://github.com/gilamran/tsc-watch
```bash
yarn add --dev typescript tsc-watch
yarn add --dev @typescript-eslint/parser
yarn add --dev @typescript-eslint/eslint-plugin
```
Update scripts in `package.json` and replace `build.js` in Procfile.
\
Change `hello_controller.js` to `hello_controller.ts`
\
\
\
### Hotwire
- Works particularly well if oyu use Rails conventions for partial-view files.
- And especially if you use the ActiveRecord naming convention for partial files.

**Turbo**: Manages HTML request to the server.
**Stimulus**: Is a minimal JS library well suited to small interactions that Turbo can't handle.

