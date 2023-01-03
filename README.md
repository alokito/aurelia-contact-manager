# Purpose

This repo is my (Alok's) first attempt to learn Aurelia. 

## Initial Reactions

Since I am totally new to this framework, it should not shock anyone that my first reactions are to notice all the things that are different from my current favorite framework, React+Hooks. 

At a high level, I have serious concerns about how easy it will be to change a large Aurelia project. There are basically two main issues, the reliance on mutability via bindings, and the separation between the view template and the object. I have grown attached to immutability, and to everything being typescript. Some more specific points:

- Not sure that it is a good thing that there is no base class for the classes that underly views. Not sure which methods are available, and how to spell them.
- Magic methods like "configureRouter", "canDeactivate" and "activate"  that get called by the framework seem like an anti-pattern.
- The lack of static type checking on .bind, .trigger, .delegate etc in the templates make it feel like a recipe for typos and difficult refactoring. If you change the name of a method in a class, how can you be sure you caught all references to it in an html template?
- The view templates introduce a whole new language that replicate what is already available in javascript. For example, do we need another for loop like "repeat.for"? Reminds me of knockout.js more than anything.
- I basically don't like the separation between view and typescript object. Why not just make everything typescript like React?
- Aurelia mentions that it has require for views instead of using import. Why not use import for views too? It's possible if everything is javascript. Then things like F12 for code navigation will work.
- The lack of custom components such as JSX hurt scalability and encapsulation. You can do something similar with Aurelia modules, but they are much more heavy weight and complicated than a simple react component. Modules do too much; they are like react components plus hooks plus mutability.
- The $parent special value that only exists within the view? More special case stuff...

However, I will try to keep an open mind. The best way to learn new things is often to find someone who loves it.

## Next Steps

I'd like to write a React version of contact manager for compare and contrast purposes.

Update: see https://github.com/alokito/react-contact-manager

# `aurelia-contact-manager`

This project is bootstrapped by [aurelia-cli](https://github.com/aurelia/cli).

For more information, go to https://aurelia.io/docs/cli/webpack

## Run dev app

Run `npm start`, then open `http://localhost:8080`

You can change the standard webpack configurations from CLI easily with something like this: `npm start -- --open --port 8888`. However, it is better to change the respective npm scripts or `webpack.config.js` with these options, as per your need.

To enable Webpack Bundle Analyzer, do `npm run analyze` (production build).

To enable hot module reload, do `npm start -- --hmr`.

To change dev server port, do `npm start -- --port 8888`.

To change dev server host, do `npm start -- --host 127.0.0.1`

**PS:** You could mix all the flags as well, `npm start -- --host 127.0.0.1 --port 7070 --open --hmr`

For long time aurelia-cli user, you can still use `au run` with those arguments like `au run --env prod --open --hmr`. But `au run` now simply executes `npm start` command.

## Build for production

Run `npm run build`, or the old way `au build --env prod`.

## Unit tests

Run `au test` (or `au jest`).

To run in watch mode, `au test --watch` or `au jest --watch`.
