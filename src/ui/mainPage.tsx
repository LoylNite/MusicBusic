import { TrackList } from './trackList'
import { TrackDetails } from './trackDetails'
import { useTrackId } from '../bll/useTrackId'

export function MainPage() {
	const { trackId, handleTrackSelect } = useTrackId()

	return (
		<>
			<h1>Music Player</h1>
			<div style={{ display: 'flex' }}>
				<TrackList
					selectedTrackId={trackId}
					onTrackSelect={handleTrackSelect}
				/>
				<TrackDetails selectedTrackId={trackId} />
			</div>
		</>
	)
}
