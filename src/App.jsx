import Card from "./components/Card";
import emojiinformation from "../emoji-information";

function infopallete(emojiinfo) {
  return (
    <Card
      key={emojiinfo.id}
      id={emojiinfo.id}
      emoji={emojiinfo.emoji}
      name={emojiinfo.name}
      meaning={emojiinfo.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">{emojiinformation.map(infopallete)}</dl>
    </div>
  );
}

export default App;
