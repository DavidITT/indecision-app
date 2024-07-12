export const sleep = (seconds:number = 3) => {
    return new Promise(resolve => {
        setTimeout(resolve, seconds * 1000)
    })
}