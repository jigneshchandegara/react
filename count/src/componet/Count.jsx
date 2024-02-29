import React,{useEffect,useState} from 'react'

const Count = () => {

    const [data, setdata] = useState(0)
    const [val, setval] = useState("");


    // useEffect(() => {

    //     console.log("continue count");
    //     setTimeout(() => {
    //         setdata(data + 1);
    //     }, 1000);
    // })

    useEffect(() => {

      console.log("useeffect start");
      setTimeout(() => {
        setdata(data + 1);
      }, 1000);

    },[val] )
    return (
        <>
            <h1>{data}</h1>
            <h2>{val}</h2>
            <button onClick={() => setval("jignesh")}>Click</button>


        </>
    )
}

export default Count