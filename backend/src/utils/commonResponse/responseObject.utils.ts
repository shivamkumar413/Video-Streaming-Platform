 
export const customSuccessResponse = (data : any, message : any)=>{
    return{
        success : true,
        message,
        data,
    }
}

export const internalServerErrorResponse = (error : any) => {
    return {
        success: false,
        err: error,
        data: null,
        message: 'Internal server error'
    };
};

export const customErrorResponse = (error : any) => {
    if (!error.message && !error.explanation) {
        return internalServerErrorResponse(error);
    }
    return {
        success: false,
        err: error.explanation,
        data: {},
        message: error.message
    };
};
