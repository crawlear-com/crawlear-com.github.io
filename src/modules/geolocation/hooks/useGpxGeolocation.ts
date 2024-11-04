import * as React from 'react'

const initialGpxDataString = `<?xml version="1.0" encoding="UTF-8" standalone="no" ?><gpx xmlns="http://www.topografix.com/GPX/1/1" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.topografix.com/GPX/1/1 http://www.topografix.com/GPX/1/1/gpx.xsd" version="1.1" creator="murbit GPX Tracker"><trk><trkseg>`

function useGpxGeolocation(): Array<string> {
    const [locationCount, setlocationCount] = React.useState<number>(0)
    const [gpxDataString, setGpxDataString] = React.useState(initialGpxDataString)

    React.useEffect(() => {
      function success(position: GeolocationPosition) {
          setGpxDataString((previousData) => {
            if (locationCount < 1) navigator.geolocation.getCurrentPosition(success, error)
            setlocationCount(locationCount+1)
            return previousData.concat(`<trkpt lon="${position.coords.longitude}" lat="${position.coords.latitude}"><ele>${position.coords.altitude}</ele><time>${position.timestamp}</time><speed>${position.coords.speed}</speed></trkpt>
                <trkpt lon="${position.coords.longitude}" lat="${position.coords.latitude}"><ele>${position.coords.altitude}</ele><time>${position.timestamp}</time><speed>${position.coords.speed}</speed></trkpt>`)
        })
      }

      function error() {

      }

      if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(success, error);
      }
    }, [])

    if (locationCount >= 1) console.log(gpxDataString.concat('</trkseg></trk></gpx>'))
    return [locationCount >= 1 ? gpxDataString.concat('</trkseg></trk></gpx>') : ""]
}

export default useGpxGeolocation