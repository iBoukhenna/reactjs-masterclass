// yarn add -D @testing-library/react-hooks
// yarn add -D react-test-renderer

import { useToggle } from './hooks'
import { renderHook, act} from '@testing-library/react-hooks'

test('toggle Hook', function () {
    const { result } = renderHook(() => useToggle(false))
    expect(result.current[0]).toBeFalsy()
    act(() => result.current[1]())
    expect(result.current[0]).toBeTruthy()
    act(() => result.current[1]())
    expect(result.current[0]).toBeFalsy()
})