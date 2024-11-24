# Ex2

---

# Important third part (design) notes:

Successful Login for the design part is "123" for both phone number and password inputs.
The rest -> incorrect.
After 3 failed tries -> you'll get to a failed state.

Enjoy!

---

```bash
npm install
```

### Run the development server

The codebase uses a development server to run the code. This is a server that
runs on your local machine, and allows you to view the code in your browser. To
run the development server, run the following command in your terminal:

```bash
npm run dev
```

## View the application in your browser

Once the server is running, you can view the application in your browser. To do
this, open Chrome (or Chromium), and type the following into the address bar:

```bash
http://localhost:3000
```

## Other commands you can run

The codebase is set up with a number of commands you can run. These are defined
in the `package.json` file, in the `scripts` section. The following are
available:

**Lint your code to detect style and some syntax errors**

```bash
npm run lint
```

**Compile a production build of your app**

```bash
npm run build
```

**Run the compiled production build of the server**

```bash
npm run start
```

**Print out some system info related to your server**

```bash
npm run info
```
