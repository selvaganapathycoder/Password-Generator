import { useState } from "react";

const charset = {
  upper: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  lower: "abcdefghijklmnopqrstuvwxyz",
  number: "0123456789",
  symbol: "!@#$%^&*()_+~`|}{[]:;?><,./-=",
};

function App() {
  const [length, setLength] = useState(12);
  const [includeUpper, setIncludeUpper] = useState(true);
  const [includeLower, setIncludeLower] = useState(true);
  const [includeNumber, setIncludeNumber] = useState(true);
  const [includeSymbol, setIncludeSymbol] = useState(false);
  const [password, setPassword] = useState("");

  const generatePassword = () => {
    let chars = "";
    if (includeUpper) chars += charset.upper;
    if (includeLower) chars += charset.lower;
    if (includeNumber) chars += charset.number;
    if (includeSymbol) chars += charset.symbol;

    let newPassword = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * chars.length);
      newPassword += chars[randomIndex];
    }
    setPassword(newPassword);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(password);
    alert("Password copied to clipboard!");
  };

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-indigo-500 to-purple-600 text-white p-4"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1500&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="bg-white/30 backdrop-blur-lg border border-white/40 text-gray-800 rounded-xl p-6 w-full max-w-md shadow-lg">
        <h1 className="text-xl font-bold mb-4 text-center">Password Generator</h1>

        <div className="mb-4">
          <label className="block font-medium">Length: {length}</label>
          <input
            type="range"
            min="4"
            max="32"
            value={length}
            onChange={(e) => setLength(Number(e.target.value))}
            className="w-full"
          />
        </div>

        <div className="mb-4 space-y-2">
          <label className="flex items-center">
            <input
              type="checkbox"
              checked={includeUpper}
              onChange={() => setIncludeUpper(!includeUpper)}
              className="mr-2"
            />
            Include Uppercase
          </label>
          <label className="flex items-center">
            <input
              type="checkbox"
              checked={includeLower}
              onChange={() => setIncludeLower(!includeLower)}
              className="mr-2"
            />
            Include Lowercase
          </label>
          <label className="flex items-center">
            <input
              type="checkbox"
              checked={includeNumber}
              onChange={() => setIncludeNumber(!includeNumber)}
              className="mr-2"
            />
            Include Numbers
          </label>
          <label className="flex items-center">
            <input
              type="checkbox"
              checked={includeSymbol}
              onChange={() => setIncludeSymbol(!includeSymbol)}
              className="mr-2"
            />
            Include Symbols
          </label>
        </div>

        <button
          onClick={generatePassword}
          className="bg-indigo-600 w-full text-white font-semibold py-2 rounded hover:bg-indigo-700 mb-4"
        >
          Generate Password
        </button>

        <div className="bg-gray-100 p-2 rounded flex justify-between items-center">
          <span className="truncate">{password}</span>
          <button
            onClick={copyToClipboard}
            className="bg-indigo-500 text-white px-2 py-1 rounded ml-2 hover:bg-indigo-600"
          >
            Copy
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
