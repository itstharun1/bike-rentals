import mongoose from 'mongoose';

const connection = async(URL)=>{
    
    try {
        await mongoose.connect(URL);
        console.log('Connected to MongoDB');
        } catch (error) {
            console.log('Error connecting to MongoDB:', error);
            }
}

export default connection