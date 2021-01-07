module.exports = (length) => {
	const alfabet = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz"
    const random = []
    for (let i = 0; i < length; i++)
    	random.push(alfabet[Math.floor(Math.random() * 61)])
    
    return random.join("")
}