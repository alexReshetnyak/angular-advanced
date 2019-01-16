# Ngrx

# Redux

- Store
- state
- reducer
- dispatch

Store {
  private state;

  private reducer(state, action) {
    switch(action) {
      return state.clone();
    }
  }

  public dispatch(action) {
    return reducer(this.state, action)
  }
}


# Ngrx
