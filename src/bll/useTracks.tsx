import { useEffect, useState } from 'react'
import { getTracks, type TrackItemOutput } from '../dal/api'

type Props = {
	onTrackSelect: (id: string | null) => void
}

export function useTracks({ onTrackSelect }: Props) {
	const [tracks, setTracks] = useState<Array<TrackItemOutput> | null>(null)

	useEffect(() => {
		getTracks().then(json => setTracks(json.data))
	}, [])

	return {
		tracks: tracks,
		refresh: () => {
			onTrackSelect(null)
		}
	}
}
