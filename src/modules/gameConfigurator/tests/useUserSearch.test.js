import useUserSearch from "../hooks/useUserSearch";
import { renderHook, act, render, fireEvent, screen } from "@testing-library/react";

const players = [{"id":1,"name":"Álvaro","avatar":"https://eu.ui-avatars.com/api/?background=345B63&color=FFFFFF&name=Álvaro","time":0,"points":0},
    {"id":2,"name":"Joan","avatar":"https://eu.ui-avatars.com/api/?background=345B63&color=FFFFFF&name=Joan","time":0,"points":0},
    {"id":3,"name":"K","avatar":"https://eu.ui-avatars.com/api/?background=345B63&color=FFFFFF&name=K","time":0,"points":0},
    {"id":0,"name":"Jose","avatar":"https://eu.ui-avatars.com/api/?background=345B63&color=FFFFFF&name=Jose","time":0,"points":0}];

jest.mock('../../../pages/Offline', () => ({
    isOffline: false
}))

beforeEach(()=>{
    window.crawlear = {
        fbBase: {
            isUserLogged: jest.fn(() => true)
        },
        fb: {
            userSearch: jest.fn((value, callback) => { callback(); return players })
        }
    }
  });

afterEach(()=> {
    delete window.crawlear;
});

test("initial render", () => {
    const onUserSeachPlayerAdd = jest.fn()
    const onUserClick = jest.fn()
    const onPlusAddUserClick = jest.fn()
    const inputRef = { current: {  value: "123" } }

    const { result } = renderHook(() => useUserSearch(onUserSeachPlayerAdd, onUserClick, onPlusAddUserClick, inputRef))

    expect(result.current[0]).toStrictEqual([])
    expect(result.current[1]).toBe("")
})

test("userSearch", () => {
    const onUserSeachPlayerAdd = jest.fn()
    const onUserClick = jest.fn()
    const onPlusAddUserClick = jest.fn()
    const inputRef = { current: {  value: "123" } }

    const { result } = renderHook(() => useUserSearch(onUserSeachPlayerAdd, onUserClick, onPlusAddUserClick, inputRef))
    const userSearch = result.current[3]

    act(() => {
        userSearch({ target: { value: "Jose" }})
    })

    expect(window.crawlear.fb.userSearch).toHaveBeenCalled()
})

test("addButton value", () => {
    const onUserSeachPlayerAdd = jest.fn()
    const onUserClick = jest.fn()
    const onPlusAddUserClick = jest.fn()
    const inputRef = { current: {  value: "123" } }

    const { result } = renderHook(() => useUserSearch(onUserSeachPlayerAdd, onUserClick, onPlusAddUserClick, inputRef))
    const addButton = result.current[2]

    expect(addButton.props.className).toBe("buttonControlTextPlus")
    expect(addButton.props.onClick).not.toBe(undefined)
})

test("addButton interaction", () => {
    const onUserSeachPlayerAdd = jest.fn()
    const onUserClick = jest.fn()
    const onPlusAddUserClick = jest.fn()
    const inputRef = { current: {  value: "123" } }

    const { result } = renderHook(() => useUserSearch(onUserSeachPlayerAdd, onUserClick, onPlusAddUserClick, inputRef))
    const addButton = result.current[2]
    render(addButton)

    const button = screen.getByRole('button')
    fireEvent.click(button)

    expect(onPlusAddUserClick).toHaveBeenCalledWith({
        uid: "",
        displayName: "123"
    })
    expect(addButton.props.className).toBe("buttonControlTextPlus")
    expect(addButton.props.onClick).not.toBe(undefined)
})

test("userClick", () => {
    const onUserSeachPlayerAdd = jest.fn()
    const onUserClick = jest.fn()
    const onPlusAddUserClick = jest.fn()
    const inputRef = { current: {  value: "123" } }

    const { result } = renderHook(() => useUserSearch(onUserSeachPlayerAdd, onUserClick, onPlusAddUserClick, inputRef))
    const userClick = result.current[4]
    const returnValue = { target: { nextElementSibling: { getAttribute: jest.fn(() => "uid123") } }}

    userClick(returnValue)

    expect(onUserClick).toHaveBeenCalledWith("uid123")
})
