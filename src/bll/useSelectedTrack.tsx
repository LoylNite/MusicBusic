import { useEffect, useState } from 'react'
import { getTrack, type GetTrackDetailsOutputData } from '../dal/api'

type Props = {
	selectedTrackId: string | null
}

export function useSelectedTrack({ selectedTrackId }: Props) {
	const [selectedTrack, setSelectedTrack] = useState<GetTrackDetailsOutputData | null>(null)

	useEffect(() => {
		if (!selectedTrackId) {
			return
		}
		getTrack(selectedTrackId).then(json => setSelectedTrack(json.data))
	}, [selectedTrackId])

	return { selectedTrack }
}
