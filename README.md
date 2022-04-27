# Multi-Step Form

Form with multiple steps and confirmation page.

## Technologies used

- HTML
- CSS
  - Tailwind
- JavaScript
  - React (Create React App)

## Quick Start

 Install latest dependencies
```
npm i or npm install
```
Run the application
```
npm start
```

Install Tailwind CSS
```
npm install -D tailwindcss postcss autoprefixer

npx tailwindcss init -p
```

The above installation will create two files, tailwind.config.js and postcss.config.js

Next you want to confgure your template paths. Open up tailwind.config.js and add a path to your content which is within the module.exports code block.

```js
module.exports = {
  content: ["./src/**/*.{html,js}"], // this is where you will update your paths
  theme: {
    extend: {},
  },
  plugins: [],
};
```

The next step is to add your Tailwind directives to your CSS.

Update your index.css file with the following:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

Lastly you want to check that you have installed Tailwind correctly, you can try it out in your index.html file as follows

```html
<h1 className="text-3xl font-bold underline">Hello world!</h1>
```

To see how to install Tailwind CSS to your app, you can follow the link here [Tailwind CSS](https://tailwindcss.com/docs/installation)

### Steps

Below I have run through the steps taken to ensure that I was using the correct process to build my form.

### Step 1

Create a public directory at the root to hold any images you wish to use, for me I only have the one which is the logo.

#### Step 2

Creating my components

Firstly I created a parent directory which I called SignupForm. Upon creating this I would then create my steps for completing this form which I would now create sub-directories which I named the following - UserDetails, PersonalDetails, Confirmation and Success.

## Author

- Github - [Hayden Buckley-Smith](https://www.github.com/hayden-93.com)
- Twitter - [@HBSDev](https://twitter.com/HBSDev)
- Website - (https://www.haydenbs.com)
