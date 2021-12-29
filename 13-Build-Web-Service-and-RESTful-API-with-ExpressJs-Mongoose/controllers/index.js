
exports.index = async (req, res) =>{
    const message = `
        <div style="text-align: center;">
            <h1>WELCOME TO ONLINE COURSES WEBSITE API</h1>
            <p>By Tsaniah Munfidah</p>
        <div>
    `;
res.send(message)
}