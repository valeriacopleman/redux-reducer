export function manageFriends(state, action){
    switch (action.type) {
        case 'ADD_FRIEND':
          return {
            ...state,
            friends: [...state.friends, {
                hometown: action.friend.hometown,
                id:action.friend.id,
                name:action.friend.name,
            }]
          }
        case 'REMOVE_FRIEND':
            let newFriends = state.friends.filter(friend => 
                {return friend.id !== action.id})
            return {friends: newFriends};
       
        default:
          return state;
      }
}
