<counter>
  <div>
    <h2>Redux Counter:</h2>
    <p>
      <button onclick={onMinusClick}>-</button>
      {count}
      <button onclick={onPlusClick}>+</button>
    </p>
  </div>

  <script>
    this.bind('count') // bind whole state as count prop

    onPlusClick() {
      this.dispatch({type: 'INCREMENT'})
    }

    onMinusClick() {
      this.dispatch({type: 'DECREMENT'})
    }
  </script>
</counter>
