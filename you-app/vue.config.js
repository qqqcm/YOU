module.exports = {
    devServer:{
        proxy:{
            'api':{
                target:'http://localhost:9000',
                changeOrigin:true
            }
        }
    }
}