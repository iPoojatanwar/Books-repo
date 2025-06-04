import Book from "../Model/bookModel.js";
 export const getbook= async (req ,res)=>{
    try {
       
    const book=await Book.find()
     res.status(200).json(book)   

    } catch (error) {
        res.status(500).json("book not found")
     console.log(error)   
    }
}