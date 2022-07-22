const Error = ({children}) => {
    return ( 
        <div className="bg-red-800 text-white uppercase font-bold mb-3 text-center rounded-lg py-3">
            <p>{children}</p>
        </div>
     );
}
 
export default Error;