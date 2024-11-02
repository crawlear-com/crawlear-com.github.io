import { fireEvent, render, screen } from "@testing-library/react"
import ControlText from "../../components/ControlText"

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

test('Basic render', () => {
    const onValueChange = jest.fn()

    render(<ControlText value={0}
        onValueChange={(val)=> {
            onValueChange(val, 0, 0);
        }}
        maxValue={3} text={'text to show'} step={1} />)

    expect(screen.getByText('text to show')).toBeInTheDocument()
    expect(screen.getByText('+')).toBeInTheDocument()
    expect(screen.getByText('-')).toBeInTheDocument()
})

test('+ click', () => {
    const onValueChange = jest.fn()

    render(<ControlText value={0}
        onValueChange={(val)=> {
            onValueChange(val, 0, 0);
        }}
        maxValue={3} text={'text to show'} step={1} />)

    fireEvent.click(screen.getByText('+'))

    expect(onValueChange).toHaveBeenCalledWith(1, 0, 0)
})

test('+ click to max value', () => {
    const onValueChange = jest.fn()

    render(<ControlText value={0}
        onValueChange={(val)=> {
            onValueChange(val, 0, 0);
        }}
        maxValue={1} text={'text to show'} step={1} />)

    const plus = screen.getByText('+')

    fireEvent.click(plus)
    fireEvent.click(plus)

    expect(onValueChange).toHaveBeenCalledWith(1, 0, 0)
})

test('- click', () => {
    const onValueChange = jest.fn()

    render(<ControlText value={1}
        onValueChange={(val)=> {
            onValueChange(val, 0, 0);
        }}
        maxValue={3} text={'text to show'} step={1} />)

    fireEvent.click(screen.getByText('-'))

    expect(onValueChange).toHaveBeenCalledWith(-1, 0, 0)
})

test('- click at 0', () => {
    const onValueChange = jest.fn()

    render(<ControlText value={0}
        onValueChange={(val)=> {
            onValueChange(val, 0, 0);
        }}
        maxValue={3} text={'text to show'} step={1} />)

    fireEvent.click(screen.getByText('-'))

    expect(onValueChange).not.toHaveBeenCalled()
})

test('- click to min value', () => {
    const onValueChange = jest.fn()

    render(<ControlText value={1}
        onValueChange={(val)=> {
            onValueChange(val, 0, 0);
        }}
        maxValue={1} text={'text to show'} step={1} />)

    const less = screen.getByText('-')

    fireEvent.click(less)
    fireEvent.click(less)

    expect(onValueChange).toHaveBeenCalledWith(-1, 0, 0)
})