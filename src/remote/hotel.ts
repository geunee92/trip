import {
  QuerySnapshot,
  collection,
  limit,
  query,
  getDocs,
  startAfter,
  getDoc,
  doc,
} from 'firebase/firestore'

import { COLLECTIONS } from '@/constants'
import { Hotel } from '@/models/hotel'

import { store } from './firebase'

export async function getHotels(pageParams?: QuerySnapshot<Hotel>) {
  const hotelsQuery =
    pageParams == null
      ? query(collection(store, COLLECTIONS.HOTEL), limit(10))
      : query(
          collection(store, COLLECTIONS.HOTEL),
          // 커서를 기준으로
          startAfter(pageParams),
          // 10개를 가져온다.
          limit(10),
        )

  const hotelsSnapshot = await getDocs(hotelsQuery)

  const items = hotelsSnapshot.docs.map(
    (doc) =>
      ({
        id: doc.id,
        ...doc.data(),
      }) as Hotel,
  )

  const lastVisible = hotelsSnapshot.docs[hotelsSnapshot.docs.length - 1]

  return {
    items,
    lastVisible,
  }
}

export async function getHotel(id: string) {
  const snapshot = await getDoc(doc(store, COLLECTIONS.HOTEL, id))

  return {
    id,
    ...snapshot.data(),
  } as Hotel
}
