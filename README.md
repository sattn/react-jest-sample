初期構築
```bash
$ create-react-app react-jest-sample --typescript
$ cd react-jest-sample
$ npm install eslint eslint-config-prettier eslint-plugin-prettier -D
$ npm install --save react-router-dom
$ npm install --save @types/react-router-dom
$ npm install --save use-react-router
$ npm i enzyme @types/enzyme enzyme-to-json @types/enzyme-to-json enzyme-adapter-react-16 @types/enzyme-adapter-react-16 -D
```

### Memo
create-react-appの場合、jestがデフォルトで入る。enzymeだけ入れれば良い。
src直下に作成したsetupTests.jsは、テストコードにおいてオートインポートされるよ。

> configure({ adapter: new Adapter() });

つまり、これを毎回書かなくて良くなる。

### Reference
* [jestjs.io](https://jestjs.io/docs/ja/tutorial-react)
* [Enzyme](https://airbnb.io/enzyme/)
