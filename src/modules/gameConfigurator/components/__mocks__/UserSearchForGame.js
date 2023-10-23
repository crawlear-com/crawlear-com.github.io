const UserSearchForGame = jest.fn().mockImplementation(({onUserSeachPlayerAdd, gameName, isForJudge}) => {
    return jest.fn(() => <div> UserSearchForGame </div>)
})

export default UserSearchForGame