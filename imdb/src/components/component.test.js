import MyComponent from "./myComponent";
import TestRenderer from 'react-test-renderer';

const testRenderer = TestRenderer.create(<MyComponent/>)
const testInstance = testRenderer.rootReducer

expect(testInstance.findByType(SubComponent).props.foo).toBe('bar')
expect(testInstance.findByProps({className: "sub"}).children).toEqual(['Sub']);
