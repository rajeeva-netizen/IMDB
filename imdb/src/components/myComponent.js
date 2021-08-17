import SubComponent from './subComponent'

export default function MyComponent(){
    
    return(
        <>
            <SubComponent foo = 'bar'/>
            <p className = 'my'> Hello</p>
        </>
    )
}