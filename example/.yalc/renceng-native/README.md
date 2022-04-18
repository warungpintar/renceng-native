# renceng-native
<p align="center">
  <img src="./logo.png">
</p>


renceng-native is an implementation of Renceng Design Language System for react-native apps.

## Structure

```txt
/src         # source package
/dist        # build package
/example     # example/storybook react-native package
  .ondevice  # react-native storybook
  .storybook # web storybook
```
## How to run

Build main package

```bash
$ yarn install && build
```

Install example apps

```bash
$ cd example && yarn install && fix-dependency
```

Run web storybook

```bash
$ yarn storybook
```

Run react-native storybook
> Make sure to run emulator first

```bash
$ yarn android
```

## How to develop new component
Go to root package (renceng-native/*here*)

Create new component under
```txt
/src/components
```

Build package with
```bash
$ yarn build
```

or you can use this to build package everytime a change occurs
```bash
$ yarn start
```

To test out new component, go to example apps
```bash
$ cd example
```

Update renceng-native
> Example apps is using local dependency for renceng-native, hence this script is needed everytime you want to try out new renceng-native build 
```bash
$ yarn update
```

## How to contribute
Create new branch from development using
```txt
feat/branch-name for feature branch
fix/branch-name for fix branch
chore/branch-name for chore branch
```
Develop using above guidelines

Create pull request to development

Create new issue in Issues if you find any issue/bug

## Roadmap
- [x] Base package
- [x] Storybook react-native
- [x] Storybook web
- [x] View component
- [ ] Text component
- [ ] Button component
- [ ] Image component
- [ ] Icon component
- [ ] Divider
- [ ] ...
- [ ] Publish to npm
- [ ] Deploy storybook web
