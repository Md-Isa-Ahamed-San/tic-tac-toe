

const History = ({ history, historySet }) => {
    return (
      <div className="bg-white p-4 rounded-lg shadow-md">
        <h2 className="text-xl font-bold mb-4 text-gray-700">Game History</h2>
        <div className="flex flex-col gap-2">
          {history && history.map((eachHistory, idx) => (
            <button
              className="px-4 py-2 text-sm bg-white border border-gray-300 
              rounded-md hover:bg-gray-50 transition-colors focus:outline-none 
              focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              key={idx}
              onClick={() => historySet(idx)}
            >
              Move #{idx + 1}
            </button>
          ))}
        </div>
      </div>
    );
  };

export default History;