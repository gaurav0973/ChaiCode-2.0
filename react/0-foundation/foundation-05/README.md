- useEffect
runs on
    - on component mount(load) => componen tpage par aaya => spa par => single page application par
    - on dependency array change in data
```jsx
useEffect(()=>{

    return () => {
        //cleanup => unmoount par chalta hai => single page application par
    }
}, ["dependency array"])

```
- single page application
