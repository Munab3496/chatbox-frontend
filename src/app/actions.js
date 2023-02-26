export const registerUserRequest = () => ({ type: "REGISTER_USERS_REQUEST" })
export const registerUserSuccess = message => ({ type: "REGISTER_USER_SUCCESS", payload: message })
export const registerUserFailed = error => ({ type: "REGISTER_USER_FAILED", payload: error })
export const loginUserRequest = () => ({ type: "LOGIN_USER_REQUEST" })
export const loginUserSuccess = message => ({ type: "LOGIN_USER_SUCCESS", payload: message })
export const loginUserFailed = error => ({ type: "LOGIN_USER_FAILED", payload: error })
export const getUsersRequest = () => ({ type: "GET_USERS_REQUEST" })
export const getUsersSuccess = users => ({ type: "GET_USERS_SUCCESS", payload: users })
export const getUsersFailed = error => ({ type: "GET_USERS_FAILED", payload: error })
export const getFriendsRequest = () => ({ type: "GET_FRIENDS_REQUEST" })
export const getFriendsSuccess = friends => ({ type: "GET_FRIENDS_SUCCESS", payload: friends })
export const getFriendsFailed = error => ({ type: "GET_FRIENDS_FAILED", payload: error })
export const addFriendRequest = () => ({ type: "ADD_FRIEND_REQUEST" })
export const addFriendSuccess = (friend, chat) => ({ type: "ADD_FRIEND_SUCCESS", payload: {friend, chat} })
export const addFriendFailed = error => ({ type: "ADD_FRIEND_FAILED", payload: error })
export const removeFriendRequest = () => ({ type: "REMOVE_FRIEND_REQUEST" })
export const removeFriendSuccess = (deletedFriendId, deletedChatId) => ({ type: "REMOVE_FRIEND_SUCCESS", payload: {deletedFriendId, deletedChatId} })
export const removeFriendFailed = error => ({ type: "REMOVE_FRIEND_FAILED", payload: error })
export const getChatsRequest = () => ({ type: "GET_CHATS_REQUEST" })
export const getChatsSuccess = chats => ({ type: "GET_CHATS_SUCCESS", payload: chats })
export const getChatsFailed = error => ({ type: "GET_CHATS_FAILED", payload: error })
export const getMessagesRequest = () => ({ type: "GET_MESSAGES_REQUEST" })
export const getMessagesSuccess = (messages, chatId) => ({ type: "GET_MESSAGES_SUCCESS", payload: {messages, chatId} })
export const getMessagesFailed = error => ({ type: "GET_MESSAGES_FAILED", payload: error })
export const sendMessageRequest = () => ({ type: "SEND_MESSAGE_REQUEST" })
export const sendMessageSuccess = (message) => ({ type: "SEND_MESSAGE_SUCCESS", payload: {message}})
export const addMessage = (message) => ({ type: "ADD_MESSAGE", payload: {message}})
export const sendMessageFailed = error => ({ type: "SEND_MESSAGE_FAILED", payload: error })

export const saveUserData = data => ({ type: "SAVE_USER_DATA", payload: data })
export const dnf = error => ({ type: "ERROR", payload: error })