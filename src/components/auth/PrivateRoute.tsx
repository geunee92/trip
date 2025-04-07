import { Navigate } from 'react-router-dom'

import { useAtomValue } from 'jotai'
import { userAtom } from '@/atoms/user'

function PrivateRoute({ children }: { children: React.ReactNode }) {
  const user = useAtomValue(userAtom)

  if (user == null) {
    return <Navigate to="/signin" replace={true} />
  }

  return <>{children}</>
}

export default PrivateRoute
