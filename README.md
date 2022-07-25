<p align="center">
  <img src="./logo.png">
</p>

renceng-native is an implementation of Renceng Design Language System for react-native apps.







|  |  |  | 
| ----------- | ----------- | ----------- |
| ![Screen Shot 2022-07-25 at 07 31 23](https://user-images.githubusercontent.com/19938514/180672858-064a2807-245f-41bf-b3ae-a9357111fe23.png)       | ![Screen Shot 2022-07-25 at 07 31 58](https://user-images.githubusercontent.com/19938514/180672863-9f8c0f4e-0af8-487b-a825-6be055c5a20c.png)       | ![Screen Shot 2022-07-25 at 07 32 25](https://user-images.githubusercontent.com/19938514/180672865-7caa3d00-0ff5-43df-b823-8cb19a5d787d.png)       |
| ![Screen Shot 2022-07-25 at 07 33 41](https://user-images.githubusercontent.com/19938514/180672866-7d76b9ee-9185-46fd-876d-5675114f1510.png) | ![Screen Shot 2022-07-25 at 07 34 12](https://user-images.githubusercontent.com/19938514/180672868-68132b5d-7c97-4af2-a6d9-023b41bcb9a0.png) | ![Screen Shot 2022-07-25 at 07 34 44](https://user-images.githubusercontent.com/19938514/180672870-c70c3429-9729-4206-974e-31352e5f494b.png) |

# Install

```bash
$ npm install -s @warungpintar/renceng-native
```

or

```bash
$ yarn add @warungpintar/renceng-native
```

# Usage
```jsx
import { View, Text } from '@warungpintar/renceng-native';

const App = () => (
  <>
    <View mx={16} my={8}>
      <Text category="4xl" fontFamily="OpenSans-SemiBold">This is a text</Text>
    </View>
  </>
);
```

# Component Documentation & Demo
Storybook Web - Go to [https://renceng-native.netlify.app/](https://renceng-native.netlify.app/) or clone this repo and execute `yarn storybook` on example folder

Storybook React Native - clone this repo and execute `yarn android` on example folder

# Contributing
Want to contribute to this repo? Check out the [Contributing Docs](./CONTRIBUTING.md)
