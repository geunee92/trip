import { useEffect } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'

import useReservation from '@/components/reservation/hooks/useReservation'
import Summary from '@/components/reservation/Summary'
import Spacing from '@shared/Spacing'
import Form from '@/components/reservation/Form'
import addDelimiter from '@/utils/addDelimiter'
import { userAtom } from '@/atoms/user'
import { useAtomValue } from 'jotai'

function ReservationPage() {
  const user = useAtomValue(userAtom)

  const navigate = useNavigate()

  const [searchParams] = useSearchParams()
  const startDate = searchParams.get('startDate') as string
  const endDate = searchParams.get('endDate') as string
  const nights = searchParams.get('nights') as string
  const roomId = searchParams.get('roomId') as string
  const hotelId = searchParams.get('hotelId') as string

  console.log(hotelId)

  useEffect(() => {
    if (
      [user, startDate, endDate, nights, roomId, hotelId].some((param) => {
        return param == null
      })
    ) {
      window.history.back()
    }
  }, [startDate, endDate, nights, roomId, hotelId, user])

  const { data, isLoading, makeReservation } = useReservation({
    hotelId,
    roomId,
  })

  if (data == null || isLoading === true) {
    return null
  }

  const { hotel, room } = data

  const handleSubmit = async (formValues: { [key: string]: string }) => {
    const newReservation = {
      userId: user?.uid as string,
      hotelId,
      roomId,
      startDate,
      endDate,
      price: room.price * Number(nights),
      formValues,
    }

    await makeReservation(newReservation)

    navigate(`/reservation/done?hotelName=${hotel.name}`)
  }

  const buttonLabel = `${nights}박 ${addDelimiter(
    room.price * Number(nights),
  )}원 예약하기`

  return (
    <div>
      <Summary
        hotelName={hotel.name}
        room={room}
        startDate={startDate}
        endDate={endDate}
        nights={nights}
      />

      <Spacing size={8} backgroundColor="gray100" />

      <Form
        onSubmit={handleSubmit}
        forms={hotel.forms}
        buttonLabel={buttonLabel}
      />
    </div>
  )
}

export default ReservationPage
