import { TrackItem } from './trackItem'
import { useTracks } from '../bll/useTracks'

type Props = {
	selectedTrackId: string | null

	onTrackSelect: (id: string | null) => void
}

export function TrackList({ selectedTrackId, onTrackSelect }: Props) {
	const { tracks, refresh } = useTracks({ onTrackSelect })

	if (tracks === null) {
		return (
			<div>
				<span>Loading</span>
			</div>
		)
	}

	return (
		<>
			<div>
				<button
					style={{ display: 'block' }}
					onClick={() => {
						refresh()
					}}
				>
					reset selection
				</button>
			</div>

			<ul>
				{tracks.map(track => {
					return (
						<TrackItem
							key={track.id}
							track={track}
							selectedTrackId={selectedTrackId}
							onTrackSelect={onTrackSelect}
						/>
					)
				})}
			</ul>
		</>
	)
}
