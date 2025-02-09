// components/Prompt.tsx


interface PromptProps {
    message: string;
    onConfirm: () => void;
    onCancel: () => void;
  }
  
  const Prompt: React.FC<PromptProps> = ({ message, onConfirm, onCancel }) => {
    return (
      <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center">
        <div className="bg-white p-6 rounded shadow-lg">
          <p>{message}</p>
          <div className="mt-4">
            <button
              onClick={onConfirm}
              className="bg-green-500 text-white px-4 py-2 rounded mr-4"
            >
              Yes
            </button>
            <button
              onClick={onCancel}
              className="bg-red-500 text-white px-4 py-2 rounded"
            >
              No
            </button>
          </div>
        </div>
      </div>
    );
  };
  
  export default Prompt;
  