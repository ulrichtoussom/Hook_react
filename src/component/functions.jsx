


export const waitSync = function(duration) {
    const time = performance.now()

    while((performance.now() - time)< duration){}
    return null
        
}