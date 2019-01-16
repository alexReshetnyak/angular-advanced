# Ngrx

# Redux

- Store
- state
- reducer
- dispatch

- middleware

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

action { type, payload }


# Ngrx (Redux + rxjs)
