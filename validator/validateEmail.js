const validateEmail=(email)=>{
    const result=email.match(/^[\w\.-]+@[\w\.-]+\.\w+$/)
    return result
}

module.exports=validateEmail