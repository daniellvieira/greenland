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

### Turbo Stream

```html
<turbo-stream action="<ACTION>" target="<TARGET>" targets="<TARGET_1> <TARGET_2>">
    <template>
        OUR HTML GOES HERE
    </template>
</turbo-stream>
```

There are seven actions:
- **after**: is added after the element with the target ID.
- **append**: is added at the end of the target
- **before**: is added before the element with the target ID.
- **prepend**: is added at the beginning of the target
- **remove**: is removed. Does not need any content.
- **replace**: will completely replace the existing element with the target ID.
- **update**: will replace the context of the target, but not the element itself.

### Stimulus

Generate a manifest of existing controllers
`./bin/rails stimulus:manifest:update`

There is also a generator
`rails generate stimulus controllerName`, that will update the manifest and create a skeleton file.

These are the stimulus structure:
- **controller**: The main file that contains the logic.
- **action**: The method that is called when the event is triggered.
- **target**: The element that the controller is attached to.
- **value**: The value that is passed to the action.

- **data-action**: The event that triggers the action, has three parts:
    - **eventName**: The name of the event, followed by an arrow (->).
    - **controllerName**: The name of the controller. This element ends with a hashtag (#).
    - **nameMethod**: The name of the method that will be called on the controller. Usually use a camelCase.