import './App.css';
import Main from './main';
import AudioPlayer from './Dancing/AudioPlayer';

function App() {
  const audioUrl = process.env.PUBLIC_URL + '/10 minutes lofi songs [Chill Space For Study].mp3';

  return (
    <div className="App">
      <Main />
      <AudioPlayer url={audioUrl} />
    </div>
  );
}

export default App;

