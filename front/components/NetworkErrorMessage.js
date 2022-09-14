export function NetworkErrorMessage({ message, dismiss }) {
    return (
      <div>
        {message}
        <button type="button" onClick={dismiss}>
        </button>
      </div>
    )
  }