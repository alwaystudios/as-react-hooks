# as-react-hooks

React hooks

## useInterval

Executes a callback with a continuous delay

```
    useInterval(getTwitterFeedUpdates, 1000)
```

## useLocalStorage

Hook that supports server side rendering when using local storage

```
    const storage = useLocalStorage()
```

## useWindow

Hook that supports server side rendering when using the Window object

```
    const _window = useWindow()
```

## useCookie

```
    setCookie('cookie-name', 'some value')
    getCookie('cookie-name')
    deleteCookie('cookie-name')
```

## useAsync

Resolves an async function

```
  const { state, callback } = useAsync(async () => {
    await promiseTimeout(2000);
    return "test";
  });

  useEffect(() => {
    if (!state.called) {
      callback();
    }
  }, [callback, state]);
```

## useEffectAsync

useEffect for asyn functions

```
  useEffectAsync(async () => {
    await promiseTimeout(2000);
    return "test";
  }, []);
```

## useThrottledRequests

Async request parallel execution engine with throttling

```
  const { throttleActions, throttleProgress } = useThrottleRequests(10) // max parallelisation = 10
  const sampleApiCall = async () => {
    try {
      const response = await fetch(...)
      const response = await response.json()

      throttleActions.requestSucceededWithData(response)
    } catch (error) {
      throttleActions.requestFailedWithError(error)
    }
  }

  const { state, callback } = useAsync(async() => {
      const requestsToMake = [sampleApiCall, /** some other api calls **/]
      await throttleActions.queueRequests(requestsToMake);
  });

  ...

  <button onClick={callback}>Fire</button>
  {JSON.stringify(state)}
  {throttleProgress.loading && <div>Loading</div>}
  {throttleProgress.values.length > 0 && (
    <div>
      {throttleProgress.values.length} requests completed successfully
    </div>
  )}
  {throttleProgress.errors.length > 0 && (
    <div>{throttleProgress.errors.length} requests errored</div>
  )}
```

## useShoppingCart

MyProductType must have an id of type number or string

```
  const myProduct = {
    id: 1,
    name: 'Apples'
  }

  const { items, updateCart, removeProduct, clearItems } = <MyProductType>useShoppingCart()

  updateCart(myProduct, 2)
  updateCart(myProduct, -1) // 1 apple now in cart
  removeProduct(myProduct) // cart empty
```

## useStringFilter

Query over a data set

```
  const data = [
    { id: 1, name: 'one' },
    { id: 2, name: 'two' },
    { id: 13, name: 'thirteen' },
  ]

  const {
    queryString,
    filteredItems,
    setFilter,
  } = useStringFilter(data, ['id', 'name'])

  setFilter('1')
  console.log(filteredItems)
```

## useOutsideClick

Responds to click events outside of a component

```
  export const MyComponent = () => {
    const [toggle, setToggle] = useState(false)
    const ref = useRef<HTMLDivElement>(null)

    useOutsideClick(ref, () => {
      setToggle(!toggle);
    })

    return (
      <div ref={ref}>{toggle ? <div>toggle ON</div> : <div>toggle OFF</div>}</div>
    )
  }

```

## useSteps

Run through a series of sequential steps

```
  export const MyComponent = () => {
    const { step, incrementStep, decrementStep } = useSteps(3)

    ...
  }

```

## useTimeout

Runs a callback after specified timeout. Provides `clear` and `reset` functionality

```
  export const MyComponent = () => {
    const [count, setCount] = useState(10)
    const { clear, reset } = useTimeout(() => setCount(0), 1000)

    return (
      <div>
        <div>{count}</div>
        <button onClick={() => setCount(c => c + 1)}>Increment</button>
        <button onClick={clear}>Clear timeout</button>
        <button onClick={reset}>Reset timeout</button>
      </div>
    )
  }

```

## useToggle

Toggle state

```
  export const MyComponent = () => {
    const [value, toggle] = useToggle(true)

    ...
  }

```

## useRenderCount

Determines how many times a component is rendered

```
  export const MyComponent = () => {
    const count = useRenderCount()

    ...
  }

```

## useDebug

Debugger hook outputs to console:

```
  {
    changedProps: Object
    renderCount: number
    lastRendered: timestamp
    timeSinceLastRender: timestamp
  }
```

```
  export const MyComponent = (props) => {
    useDebug('MyComponent', props)

    ...
  }

```

## useDebounce

Debounce hook runs a callback after a delay but resets that timeout if a dependency changes.
In this example the alert will not occur if the button is clicked continuously within a 1s time frame.

```
  export const MyComponent = () => {
    const [count, setCount] = useState(10)
    useDebounce(() => alert(count), 1000, [count])

    return (
      <div>
        <div>{count}</div>
        <button onClick={() => setCount(c => c + 1)}>Increment</button>
      </div>
    )
  }

```

## useUpdateEffect

Run a callback when dependencies change (do not run on first render)

```
  export const MyComponent = () => {
    const [count, setCount] = useState(10)
    useUpdateEffect(() => alert(count), [count])

    return (
      <div>
        <div>{count}</div>
        <button onClick={() => setCount(c => c + 1)}>Increment</button>
      </div>
    )
  }
```

## useArray

Common array manipulation functions

```
  export const MyComponent = () => {
    const { array, set, push, remove, filter, update, clear } = useArray([1, 2, 3, 4, 5])

    return (
      <div>
        <div>{array.join(', ')}</div>
        <button onClick={() => set([1, 2])}>Set</button>
        <button onClick={() => push(7)}>Push</button>
        <button onClick={() => remove(1)}>Remove</button>
        <button onClick={() => filter(n => n < 3)}>Filter</button>
        <button onClick={() => update(1, 9)}>Update</button>
        <button onClick={() => clear}>Clear</button>
      </div>
    )
  }
```
