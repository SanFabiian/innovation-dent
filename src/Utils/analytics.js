const analyticsTracking = (event) => {
    if(typeof window !== 'undefined') {
        gtag('send', 'event', 'click', event, {
            nonInteraction: true
        })
    }
}

export default analyticsTracking