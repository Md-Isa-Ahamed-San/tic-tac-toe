

const History = ({history,historySet}) => {
    return (
        <div >
            {
                history && history.map((eachHistory,idx)=>(
                    <button className="flex p-2 m-2 rounded-md border-2 border-gray-300" key={idx} onClick={()=>historySet(idx)}>History no:{idx+1}</button>
                ))
            }
        </div>
    );
};

export default History;