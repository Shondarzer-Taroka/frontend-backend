import { useNavigate } from "react-router-dom";



const ErrorPage = () => {
    let navigate = useNavigate()

    function goBack() {
        navigate(-1)
    }
    function goHome() {
        navigate('/')
    }
    return (
        <div>
            <h1 className='text-[80px] font-bold font-poppins text-center'>404</h1>
            <div className='flex text-center justify-center mt-3 text-white'>
                <button className='bg-teal-800 px-4 py-2 rounded-lg' onClick={goBack}>Go Back</button>
                <button className='bg-purple-600 px-4 py-2 rounded-lg ml-2' onClick={goHome}>Home</button>
            </div>
        </div>
    );
};

export default ErrorPage;