# USDOT JPO Code Portal

The code for this website is organized into Vue components so that it can be easily modified. It provides a new standardized entry point to explore USDOT /code.

## Current Iteration Screenshot

![alt text](/src/assets/screenshots/USDOT-code-v2.png "Full USDOT JPO code site screenshot")

## Site Layout

- **Hero** - This section is the landing zone for site visitors, providing a brief description and a call to action.
- **Featured Code** - This section showcases several notable USDOT code repositories. Clicking on these cards allows the visitor to explore and contribute to the code.

## How to launch this app

1.  Clone the repository
2.  Download and install Node.js
3.  Check that Node is installed:

```
$ node -v
```

4.  Navigate to the client folder of the repository:

```
$ cd cloned-repo  
$ cd client
```

5.  Within the client folder:

```
$ npm install  
$ npm run serve
```

6.  Open your browser and navigate to http://localhost:8080/

## Dependencies

- Vue - JavaScript framework
- Bulma - CSS framework
