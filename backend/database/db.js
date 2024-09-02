import mongoose from 'mongoose';

const connection = async(username,password)=>{
    const URL =`mongodb+srv://${username}:${password}@cluster0.nmdmc.mongodb.net/test?retryWrites=true&w=majority&appName=Cluster0`;
    
    try {
        await mongoose.connect(URL);
        console.log('Connected to MongoDB');
        } catch (error) {
            console.log('Error connecting to MongoDB:', error);
            }
}

export default connection