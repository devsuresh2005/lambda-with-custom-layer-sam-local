// Import the math-layer
const mathLayer = require('math-layer');

export const handler = async (event: any): Promise<any> => {

    const eventBody = JSON.parse(event.body);
    const number1 = parseInt(eventBody.number1);
    const number2 = parseInt(eventBody.number2); 

    return {
        statusCode: 200,
        body: JSON.stringify({
            addition: mathLayer.add(number1, number2), // Call the layer function add
            subtraction: mathLayer.subtract(number1, number2), // Call the layer function subtract
        })
    }
}