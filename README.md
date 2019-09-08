Hocs are a pattern where a function takes a component as an argument and returns a new component
it will look something like this : consnt newComponent = higherOrderComponent(originalComponent)
HOCs is to share common functionality between components

If you pass a props to the child component and if that child is using Hocs, it will be passed to Hocs not to child componnet. That's what we need to use {...this.props} inside of Hocs so props can pass to child

Second, you can also pass more than one parameter to HOCs. like export default withCounter(ClickCounter, incrementValue)