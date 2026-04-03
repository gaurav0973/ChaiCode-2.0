

/*
function getResponse(data: (number[]| string[] | null)) {
    return {
        success: true,
        status: 200,
        data,
    };
}
const numberArray = getResponse([1,2,3])
const stringArray = getResponse(["hello", "kya hai"])
*/
function getResponse<T>(data: T[]) {
    return {
        success: true,
        status: 200,
        data,
    };
}
const mix = getResponse([1, "Wrangling", true]).data
const numberArray = getResponse([1,2,3]).data
const stringArray = getResponse(["hello", "kya hai"]).data


// 2. Generic type
/*
type APIResponse = {
    data: any, // yaha par user/blog 
    isError: boolean
}

type UserAPIResponce = APIResponse
type BlogAPIResponce = APIResponse
*/
type APIResponse<T> = {
    data: T,
    isError: boolean
}
type User = {name: string; age: number}
type Blog = {title: string; views: number}
type UserAPIResponce = APIResponse<User>
type BlogAPIResponce = APIResponse<Blog>


// 3. Generic Interface
interface Result<T> {
    data: T;
    errorMsg: string | null;
}
function fetchData<T>(url : string): Result<T>{
    // Simulating an API call
    if (url === "valid") {
        return {
            data: {} as T, // Type assertion to satisfy the return type
            errorMsg: null,
        };
    } else {
        return {
            data: {} as T,
            errorMsg: "Failed to fetch data",
        };
    }

}
const userResult = fetchData<User>("valid");
const blogResult = fetchData<Blog>("invalid");