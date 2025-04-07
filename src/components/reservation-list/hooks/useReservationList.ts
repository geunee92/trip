import { useQuery } from 'react-query'
import { getReservations } from '@remote/reservation'
import { useAtomValue } from 'jotai'
import { userAtom } from '@/atoms/user'

export default function useReservationList() {
  const user = useAtomValue(userAtom)

  const { data, isLoading } = useQuery(
    ['reservations', user?.uid],
    () => getReservations({ userId: user?.uid as string }),
    {
      enabled: user != null,
    },
  )

  return { data, isLoading }
}
