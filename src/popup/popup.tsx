import { sendMessage } from '../messaging';

export function Popup() {
  return (
    <div>
      <h1>Popup</h1>

      <form
        onSubmit={(e) => {
          e.preventDefault();

          sendMessage('hello', {
            name: e.currentTarget.name,
          });
        }}
      >
        <input type="text" name="name" />
        <button type="submit">Greet</button>
      </form>
    </div>
  );
}
