function customRender(ReactElement,Container) {
    const domElement=document.createElement(ReactElement.type)
    domElement.innerHTML=ReactElement.children
    for (const prop in ReactElement.props) 
    {
      domElement.setAttribute(prop,ReactElement.props[prop])  
    }
    Container.appendChild(domElement)
}


const ReactElement={
    type : 'a',
    props:{
        href:'https://google.com',
        target:'_blank',
    },
    children:'Click Me to visit google'
};

const mainContainer=document.querySelector('#root')
customRender (ReactElement,mainContainer)
