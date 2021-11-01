# Learning Vuex

This project is to learn Vuex and how to use it in a Vue project.

## Learned things

- Store is the state of all application
- Mutations (Actions) are the only way to change the state
- commit is the way to trigger a mutation
- Its a bad practice to use async code inside mutations
- Getters are used to get the state and you can get it with changes or formatted, and you can use getters inside getters
- Actions are used to execute async mutations (is like an effect on ngrx) and you can dispatch actions inside actions
- Mapper helpers are used to map the actions and getters and you can use them more easily
- State modules are used to organize the state and you can order the state
- The state modules are like local state, you only can access to global state through the properties of rootState and rootGetters
- Namespaced modules are used to avoid problems with repeated namespaces
