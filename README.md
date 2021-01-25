# `next-branch-env` example

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) modified to demonstrate the [`next-branch-env`](https://github.com/lukeburns/next-branch-env/) library.

## Getting started

After forking this repo and installing dependences `npm install`, see the example `.env` and the `next.config.js` files.

First, run the app `npm run dev` and take note of the environment variables shown on `http://localhost:3000/` and at the `hello` end point `http://localhost:3000/api/hello`. Next.js ensures that only env vars prefixed with `NEXT_PUBLIC_` are exposed to the browser.

Next, checkout the `dev` branch
```
git checkout dev
```
and run the app again `npm run dev`.

Now you will see that the default environment variables are overridden by those prefixed with the current branch name `dev`. 

This isn't of particular use for local development, but it is useful for managing branch environments for git-deployed Vercel projects, since there isn't a mechanism for assigning environment variables to separate branches in the Vercel backend.

## How it works

In `next.config.js`, you will find the minimal setup for [`next-branch-env`](https://github.com/lukeburns/next-branch-env/).
```js
module.exports = require('next-branch-env')()()
```

In `.env`, you will find
```
# defaults
SECRET=f5b73b88d0d9d57c831d59c5aa9b09af
NEXT_PUBLIC_URI=https://my.app/

# `dev` branch overrides
DEV_SECRET=234110d1e212b484e310af108422b2c6
DEV_NEXT_PUBLIC_URI=http://dev.my.app/
```
For real projects, make sure `.env` is in your `.gitignore` file! For on Vercel, you'll need to set environment variables in your Vercel Project Settings.