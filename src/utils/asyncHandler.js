//using promises to handle async errors in express routes

const asynchandler=(requestHandler)=>{
    (req, res, next) => {
        Promise.resolve(requestHandler(req, res, next))
        .catch((error) => next(error))
    }
}

export { asynchandler }

// const asyncHandler = () =>{}
// const asyncHandler = (fn) => {()=>{}}
// const asyncHandler = (fn) => async ()=>{}


// try catch wrapper for async route handlers
// const asyncHandler=(fn)=>async (req,res,next)=>{
//     try {
//         await fn(req, res, next);
//     } catch (error) {
//         res.status(error.code || 500).json({
//             success: false,
//             message: error.message || "Internal Server Error",
//         })
//     }
// }