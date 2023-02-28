# SuperViz + Three Vue.js VUE DEMO


<p align="center">
   <a href="https://superviz.com/" target="blank"><img src="https://avatars.githubusercontent.com/u/56120553?s=200&v=4" width="120" alt="SuperViz Logo" /></a>
</p>

## Dependencies

* Node.js v16.x
* Yarn / NPM

## Quick start

Clone the project repository:

```bash
git@github.com:SuperViz/sdk-demo.git
```

From the project root, run `yarn` or `npm` to install the dependencies:

Using yarn
```bash
yarn
```

Using npm
```bash
npm install
```

To properly use this project, you will need to create an .env file following the example given in .env.example.
You will also need to set your developer key to the value of the `VITE_SUPERVIZ_DEVELOPER_TOKEN` environment variable in the created file.

After that, the demo is ready to be used. To run the development environment, from root, run:

Using yarn
```bash
yarn dev
```

Using npm
```bash
npm run dev
```

## Initializing the demo

To start the demo you must fill in the fields below:

* Room id: id of the room that the user will enter;
* User id: id of the user who will enter the meeting;
* User name: name of the user who will enter the meeting;
* Avatar URL: link to avatar model (GLB or GLTF);
* Avatar scale: the scale of the model;
* Avatar height: the Y position of the avatar inside the tour;
* Is host candidate: determines whether the user is allowed to receive the host role;
* Enable Avatars: enable or disable avatar creation;
* Enable Pointers: enable or disable pointer (if avatars are disabled, `isPointersEnabled` is forced to false);

