interface ResponseDataSucceed {
    message: string
    statusCode:number
    data?:any
}

export function responseSucceed({message,statusCode,data}: ResponseDataSucceed){
    return {
        message: message,
        status: statusCode,
        data: data
    }
}