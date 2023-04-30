## Creating a Lambda function that utilizes a Custom Layer using NodeJS and Typescript and executing using SAM local

Complete Guide at <https://medium.com/@devsuresh2005/creating-a-lambda-function-that-utilizes-a-custom-layer-using-nodejs-and-typescript-and-executing-2eb15de6269a>

# To build the layer

* `cd match-layer`

* `npm install`

* `tsc`

Now the layer code should be built and available under `nodejs/node_modules/math-layer` directory and ready for linking to a lambda.

# To build the lambda

* `cd hello-lambda`

* `npm install`

* `tsc`

Now the lambda code should be build and available under `dist` directory and ready for incoking from SAM CLI.

# To inoke the lambda

* `sam local start-api`

Now you should be able to inoke the lambda from Postman using <http://127.0.0.1:3000/hello-lambda-layer-test> [POST] method.

Sample JSON payload: `{
    "number1": 3,
    "number2": 5
}`

![image](https://user-images.githubusercontent.com/4179730/235354360-c8e03aa1-5f7c-4291-99a5-265846fde906.png)

Thanks.
