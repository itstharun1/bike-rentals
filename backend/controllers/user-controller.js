import User from "../model/user.js"
import Bike from "../model/bike.js"

import jwt from 'jsonwebtoken'

import bcrypt from 'bcrypt'

// sign up api
export const signUpUser =async(request,response)=>{
    try{
        const {name,email,password}=request.body
        const userExist=await User.findOne({email})
        if(userExist){
            return response.status(400).json({message:"User already exist"})
            
        }

        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds);
        const user = new User({
            name,
            email,
            password:hashedPassword
            })
            const SECRET_KEY = 'tharun'
                const token=jwt.sign({id:user._id},SECRET_KEY,{expiresIn:'1d'})
                
            const userSave=await user.save()
            response.status(201).json({message:"User created successfully",token})
            console.log('user created')
            }
                catch(error){
                    response.status(500).json({message:error.message})
                    }


}

// login api
export const loginUser = async (request, response) => {
    try {
        const { email, password } = request.body
        const user = await User.findOne({ email})
        if (!user) {
            return response.status(400).json({ message: "Invalid email" })
            }
            const isValidPassword = await bcrypt.compare(password, user.password)
            if (!isValidPassword) {
                return response.status(400).json({ message: "Invalid  password" })
                }
                const SECRET_KEY = 'tharun'
                const token = jwt.sign({ id: user._id }, SECRET_KEY, { expiresIn: '1d'
                    })
                    const tharun = (user.name);
                    const userId = (user.id);
                    response.status(200).json({ message: "Login successfully", token,tharun,userId })
                    console.log('login successful')
                    
                    }
                    catch (error) {
                        response.status(500).json({ message: error.message })
                        }
                    }


// create a router for upload data from front-end that include image
export const uploadData = async (request, response) => {
    try {
        const {name,bikeName,mobileNumber,rentMoney,image,userId} = request.body
        const bike = new Bike({
            name,
            bikeName,
            mobileNumber,
            rentMoney,
            image,
            userId
            })
            const userSave = await bike.save()
            response.status(201).json({ message: "User created successfully" })
            console.log('user created')
            }
            catch (error) {
                response.status(500).json({ message: error.message })
                }
            }

// get bikes data from Bike database
export const getBikes = async (request, response) => {
    try {
        const bikes = await Bike.find()
        response.status(200).json(bikes)
        }
        catch (error) {
            response.status(500).json({ message: error.message })
            }
        }

// get details of single bike useing path params id
export const getBikeDetails = async (request, response) => {
    try {
        const id = request.params.id
        const bike = await Bike.findById(id)
        response.status(200).json(bike)
        }
        catch (error) {
            response.status(500).json({ message: error.message })
            }
        }

export const getMyUploads = async (request, response) => {
            try {
                const id = request.params.id
                const bike = await Bike.find({ userId: id })
                
                response.status(200).json(bike)
                }
                catch (error) {
                    response.status(500).json({ message: error.message })
                    }
                }
// get all data that match path param id from bike data base

export const UpdateData = async (request, response) => {
    try {
        const id = request.params.id
        const bike = await Bike.findById(id)
        response.status(200).json(bike)
        }
        catch (error) {
            response.status(500).json({ message: error.message })
            }
        }




export const UpdateDataofbike = async (req, response) => {
    //api for updateing bike useing pathparam id
    try {
        const id = req.params.id
       const bike = await Bike.findByIdAndUpdate({_id:id},{name:req.body.name},{bikeName:req.body.bikeName},{mobileNumber:req.body.mobileNumber},{rentMoney:req.body.rentMoney},{image:req.body.image},{userId:req.body.userId})
        response.status(200).json(bike)
        }
        catch (error) {
            response.status(500).json({ message: error.message })
            } 

}
//api for delete the item
export const DeleteItem = async (request, response) => {
    try {
        const id = request.params.id
        const bike = await Bike.findByIdAndDelete(id)
        response.status(200).json("bike deleted")
        }
        catch (error) {
            response.status(500).json({ message: error.message })
            }
        }