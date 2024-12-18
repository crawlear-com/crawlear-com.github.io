import { render, screen, fireEvent } from "@testing-library/react";
import ButtonOrSpinner from "../components/ButtonOrSpinner";
import Spinner from "../../../components/Spinner";

jest.mock("../../../components/Spinner")
jest.mock('react-i18next', () => ({
    useTranslation: () => {
        return {
            t: (str) => str,
            i18n: {
                changeLanguage: () => new Promise(() => {}),
            }
        };
    }
}));

test('render Button od spinner, not loading', () => {
    const onLoadData = jest.fn()
    const setIsLoading = jest.fn()
    render(<ButtonOrSpinner isLoading={false} setIsLoading={setIsLoading} onLoadData={onLoadData} />)

    expect(screen.getByRole('button')).toBeInTheDocument()
})

test('render Button od spinner, loading', () => {
    const onLoadData = jest.fn()
    const setIsLoading = jest.fn()
    render(<ButtonOrSpinner isLoading={true} setIsLoading={setIsLoading} onLoadData={onLoadData} />)

    expect(screen.queryByRole('button')).not.toBeInTheDocument()
    expect(screen.getByText('Spinner')).toBeInTheDocument()
})

test('load data', () => {
    const onLoadData = jest.fn()
    const setIsLoading = jest.fn()
    render(<ButtonOrSpinner isLoading={false} setIsLoading={setIsLoading} onLoadData={onLoadData} />)

    const button = screen.queryByRole('button')

    fireEvent.click(button)

    expect(onLoadData).toHaveBeenCalled()
    expect(setIsLoading).toHaveBeenCalledWith(true)
})

