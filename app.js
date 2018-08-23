var r=new Ractive({
    el:'#container',
    template:'#template'
})
r.on({
    
    'clicked':()=>{
    var high=r.get('high')
    var weight=r.get('weight')
    var bmi=weight/(high*high)
    r.set('BMI',bmi)
    }
 
})