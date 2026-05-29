import type { TrackItemOutput } from '../dal/api'

type Props = {
	track: TrackItemOutput
	selectedTrackId: string | null
	onTrackSelect: (id: string | null) => void
}

export function TrackItem({ track, selectedTrackId, onTrackSelect }: Props) {
	return (
		<li>
			<div
				onClick={() => {
					onTrackSelect?.(track.id)

					// setSelectedTrack(track);
				}}
			>
				{track.attributes.title}
			</div>

			<audio
				src={track.attributes.attachments[0].url}
				controls
				style={{
					border: track.id === selectedTrackId ? '1px solid orange' : 'none'
				}}
			></audio>
		</li>
	)
}

export default TrackItem
