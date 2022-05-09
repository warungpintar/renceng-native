#!/bin/sh

yarn build
yarn publish:local
cd example
yarn fetch:local
yarn install
yarn android
