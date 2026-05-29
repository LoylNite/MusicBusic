import { useSelectedTrack } from '../bll/useSelectedTrack'

// import { selectedTrackId } from './trackList';

type Props = {
	selectedTrackId: string | null
}

export function TrackDetails({ selectedTrackId }: Props) {
	const { selectedTrack } = useSelectedTrack({ selectedTrackId })
	return (
		<>
			<ul>
				<div>
					<h3>Details</h3>
					{!selectedTrack && !selectedTrackId && 'Track isnt selected'}
					{!selectedTrack && selectedTrackId && 'Loading'}
					{selectedTrack && selectedTrackId && selectedTrack.id !== selectedTrackId && 'Loading'}
					{selectedTrack && selectedTrackId && selectedTrack.id === selectedTrackId && (
						<div>
							<h3>Name: {selectedTrack.attributes.title}</h3>
							<h4>Lyricks</h4>
							<p> {selectedTrack.attributes.lyrics}</p>
						</div>
					)}
				</div>
			</ul>
		</>
	)
}
