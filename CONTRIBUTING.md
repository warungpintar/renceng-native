# Structure

```txt
/src         # source package
/dist        # build package
/example     # example/storybook react-native package
  .ondevice  # react-native storybook
  .storybook # web storybook
```

# How to run

## With script
You can run all the required step with one command
```bash
$ ./first-setup.sh
```

or

## With Manual Step
### Install & build main package

```bash
$ yarn install && yarn build
```

### Install yalc

> renceng-native use yalc to manage local dependency

```bash
$ yarn global add yalc
```

or

```bash
$ npm i yalc -g
```

### Publish local build

```bash
$ yarn publish:local
```

### Install renceng-native with local dependency

```bash
$ cd example && yarn add:local
```

### Install storybook

```bash
$ yarn install
```

### Run web storybook

```bash
$ yarn storybook
```

### Run react-native storybook

> Make sure to run emulator first

```bash
$ yarn android
```

### For linux

> Make sure to run metro server

```bash
$ yarn start --reset-cache
```

# How to develop new component


### Go to root package (renceng-native/_here_)

### Create new component under

```txt
/src/components
```

### Build package with

```bash
$ yarn build
```

or you can use this to build package everytime a change occurs

```bash
$ yarn start
```

### Publish local build

```bash
$ yarn publish:local
# or you can use
$ ./update-local.sh
```

### To test out new component, go to example apps

```bash
$ cd example
```

### Update renceng-native

> Example apps is using local dependency for renceng-native, hence this script is needed everytime you want to try out new renceng-native build

```bash
$ yarn fetch:local
# or you can use
$ ./update-local.sh
```

# Git Branch

Create new branch from master using

```txt
feat/branch-name for feature branch
fix/branch-name for fix branch
chore/branch-name for chore branch
```

Develop using above guidelines

Create pull request to master

# Issues

If you find any issue/bug, feel free to create new issue in Github Issues
