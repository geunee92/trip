import { useQuery, useMutation, useQueryClient } from 'react-query'

import { getReviews, writeReview, removeReview } from '@remote/review'
import { useAtomValue } from 'jotai'
import { userAtom } from '@/atoms/user'

function useReview({ hotelId }: { hotelId: string }) {
  const user = useAtomValue(userAtom)
  const client = useQueryClient()

  const { data, isLoading } = useQuery(['reviews', hotelId], () =>
    getReviews({ hotelId }),
  )

  const { mutateAsync: write } = useMutation(
    async (text: string) => {
      const newReview = {
        createdAt: new Date(),
        hotelId,
        userId: user?.uid as string,
        text,
      }

      await writeReview(newReview)

      return true
    },
    {
      onSuccess: () => {
        client.invalidateQueries(['reviews', hotelId])
      },
    },
  )

  const { mutate: remove } = useMutation(
    ({ reviewId, hotelId }: { reviewId: string; hotelId: string }) => {
      return removeReview({ reviewId, hotelId })
    },
    {
      onSuccess: () => {
        client.invalidateQueries(['reviews', hotelId])
      },
    },
  )

  return { data, isLoading, write, remove }
}

export default useReview
