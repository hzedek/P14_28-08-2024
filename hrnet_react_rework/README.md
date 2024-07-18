[![forthebadge](https://forthebadge.com/images/badges/uses-html.svg)](https://forthebadge.com)[![forthebadge](https://forthebadge.com/images/badges/uses-css.svg)](https://forthebadge.com)[![forthebadge](https://forthebadge.com/images/badges/made-with-react.svg)](https://forthebadge.com)

# HRNET React : The React version of YOUR Human Ressources app.

HRNET has been the application used by thousands of companies over the years.
You asked for it and here it is : the dynamic, improved version of HRNET, made with React. Just for you.

## Table of Contents

1. Languages required
2. Home page
3. Employees page
4. Licensing

## 1 - Languages required

-  React
-  JS
-  CSS

## 2 - Home page

### • Form

The form is located inside the **Home page**. This is where you'll create formularies.

---

### • Missing a field ?

No problem.
The Form will let you know which field is missing when submitting your work.

---

### • Customize the modal "pop-up"

Once completed, the Form will display a "modal".
If you want, you can customize things such as : message, font color & size, and many more.
More details are available here : [LewisModal](https://www.npmjs.com/package/lewismodal).

### • Example

> After finding **<LewisModal>** inside the **return()** part of **Home.jsx**, all you need to do is add the **parameters** of your choice.
> Down below, we customize the **message**, the **font color** & its **size** :

```javascript
<LewisModal
   modalMessage={"Form Created !"}
   modalFontColor={"red"}
   modalFontSize={32}
   {and more...}
/>
```

> All the other options are available [here](https://www.npmjs.com/package/lewismodal) on the NPM platform.

## 3 - Employees page

### • Table

The table is placed inside the **Employees page**. Each of the forms will get located here once completed.

---

### • Description

The table is still composed of the following columns :

-  First name
-  Last name
-  Start day
-  Department
-  Birthday
-  Street
-  City
-  State
-  Zip code

---

### • Functions

With the table, you can...

-  Use the **search bar** to find something specific
-  **Order** over each column, from **top to bottom** and from **bottom to top**
-  Decide **how many rows to display** per page, from 5 to 100
-  Switch pages using the arrows on bottom right

## 4 - Licensing

This project is completely free & open under an MIT License.
