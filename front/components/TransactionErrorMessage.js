export function TransactionErrorMessage({ message, dismiss }) {
    return (
      <div>
        TX error: {message}
        <button type="button" onClick={dismiss}>
        </button>
      </div>
    )
  }