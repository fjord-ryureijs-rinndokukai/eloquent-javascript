function yourRobot({ place, parcels }, route) {
  const routesToPick = parcels.map((parcel) =>
    findRoute(roadGraph, place, parcel.place)
  )
  const routesToDeliver = parcels.map((parcel) =>
    findRoute(roadGraph, place, parcel.address)
  )
  const minLength = Math.min(
    ...[...routesToPick, ...routesToDeliver].map((route) => route.length)
  )
  const minRoute = [...routesToPick, ...routesToDeliver].find(
    (route) => route.length == minLength
  )
  return { direction: minRoute[0], memory: route.slice(1) }
}
