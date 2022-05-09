This project is created for you to prepare yourself for the tasks at our agency.


## Make Yourself Familiar With Our Tech Stack

Before starting with your task you should have a basic understanding on how React works.
If you've never used React before consider going through the [React Tutorial](https://reactjs.org/tutorial/tutorial.html)
to understand its workings.

In addition, you will profit from going through the [Bulma](https://bulma.io/videos/) Tutorial to understand the creation
of responsive components with the help of Bulma Classes.

The third player in the game is [NextJS](https://nextjs.org/docs/getting-started), which gives us the advantage of 
Server Side Rendering. That is how we can boost the performance of our sites for a satisfying User Experience.
Learn the Basics of NextJS by attending the [NEXTJS Tutorial](https://nextjs.org/learn/basics/create-nextjs-app).

You can find an overview how we work with NextJS at Aleks&Shantu within the documentation folder in this project.
Please note that for this project we haven't set up any translation, so you can ignore all information about it.


## Hands On (The Task)

Now you've gotten a basic overview over all the technologies we use. Let's get started.

Implement a new Module according to the specifications that you've received via Email.

* Don't use jquery! 
* If you want to add animations, please use framer-motion.

One module 'Warnings' is already implemented in this project. 
Make your module appear above or underneath that module. :)


Vorlage: https://www.taophilippines.com/


### API Endpoints

A hint here. 
Use Firefox to see what the API endpoint returns. Try and to open
[https://dev.api.aunds-training.aleksundshantu.com/wp-json/wp/v2/pages?slug=%22home%22](https://dev.api.aunds-training.aleksundshantu.com/wp-json/wp/v2/pages?slug=%22home%22)
Firefox will render the JSON data in a well-formed way. That makes it easier to navigate your way through the returned values.

All data you need for the task at hand is delivered underneath this path.


### CSS Hints

You can find the basic style guide for this project [here](https://xd.adobe.com/view/65258278-9438-4dae-8849-fbef23e47499-3076/specs/)
You will find that the basic css variables and styles are already defined in src/styles/_global-vars.scss and src/styles/_main.scss.

Apart from that you can use your browsers web development tools to inspect the element, that you are going to implement and extract missing styles from there.

Please create a new scss file for component specific styles.

Follow the instructions below to set up and get started with development.


## Prerequisites

Now that you understand the basics, lets move on to what you need to have installed before you can start with the given task.

Make sure you have [nodejs with npm](https://nodejs.org/en/download/) installed. We usually use Node 14 LTS.
Install [yarn](https://classic.yarnpkg.com/en/docs/install).
Install [git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git).


## Getting Started With Git

Use a terminal for the following steps. Of course, you can also check out the project with an editor of your choice:

(If you are not familiar mit Git at all, you might want to have a look at these [Video tutorials](https://git-scm.com/videos) for a quick overview.)


Checkout the project from git
`````bash
git clone git@gitlab.com:aleksundshantu.com/training-frontend-next.js.git
`````

Enter the projects directory
`````bash
cd training-frontend-next.js
`````

Create a git branch to work on the requested component
`````bash
git checkout -b 'feature/<name-of-the-component>'
`````

Once you are done with your local development you can submit your work to Gitlab so we can review it:

Register all newly created files for the next commit.
`````bash
git add *
`````

Commit the files to the local git working tree.
`````bash
git commit -m "<Write a little comment on what you've done>"
`````

Push the changes to the remote repository.
`````bash
git push -u origin feature/<name-of-the-component>
`````

Now you should be ready to start developing.


## Getting Started With Development

Install all the projects dependencies by running:

`````bash
yarn install
`````

Then, run the development server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You'll be able to see the sample components that are already present in the project.
Underneath that component we'd like to see your new component added.

Changes will automatically be rendered.

The entry point for the displayed pages is `pages/index.js`.


## Things to Review Before You Commit Your Component

* Remove all console logs and commented out code blocks
* Mark all parts, that you couldn't finish for any reason, or where you've hard coded things with a TODO comment and elaborate briefly why you did so.
`// TODO: Your explanation here`.
* (Next JS Bulma) Make sure you have used the CSS best practices and made good use of Bulma classes
* (Next JS) Don't refer hard coded URL's in the code, add them to the projects respective .env file
* (Next JS) Run `yarn lint` and fix all errors and warnings (Hint `yarn lint --fix` might be your friend)
* (Next JS) Run `yarn build` & if there aren't any issues you are good to go


## Learn More


To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.


Follow these links to learn more about:
- [CSS Bulma](https://bulma.io/documentation/)
- [NextJS](https://nextjs.org/docs/getting-started)
- [ReactJS](https://reactjs.org/docs/getting-started.html)

- [Headless Wordpress mit NextJs Tutorial](https://academind.com/tutorials/nextjs-wordpress-headless-cms)
- [Wordpress API Endpoints](https://developer.wordpress.org/rest-api/reference/)


## Contact

If there are any question please don't hesitate to give me message franzi@aleksundshantu.com



