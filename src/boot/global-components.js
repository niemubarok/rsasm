const globalComponents = {
    'CardDoctor' : require('components/~Global/CardDoctor.vue').default,
    
}

export default async({app})=>{
    Object.entries(globalComponents).forEach(([name, component]) =>{
        app.component(name, component)
    })
}