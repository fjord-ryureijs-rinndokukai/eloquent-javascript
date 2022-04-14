function yourRobot({ place, parcels }, route) {
  if (route.length > 0) return { direction: route[0], memory: route.slice(1) }
  const routesToPick = parcels.filter((parcel) => place != parcel.place).map((parcel) =>
    findRoute(roadGraph, place, parcel.place)
  )
  const routesToDeliver = parcels.filter((parcel) => place == parcel.place).map((parcel) =>
    findRoute(roadGraph, place, parcel.address)
  )
  const minLength = Math.min(
    ...[...routesToPick, ...routesToDeliver].map((route) => route.length)
  )
  const minRoute = [...routesToPick, ...routesToDeliver].find(
    (route) => route.length == minLength
  )
  return { direction: minRoute[0], memory: minRoute.slice(1) }
}
