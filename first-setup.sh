#!/bin/sh

yarn install
yarn prepare-husky
yarn build
yarn global add yalc
yalc publish:local
cd example
yarn add:local
yarn install
yarn android
yarn storybook
