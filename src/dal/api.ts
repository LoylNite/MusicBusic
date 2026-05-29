export type GetTrackDetailsOutputData = {
	id: string
	attributes: {
		title: string
		lyrics: string | null
	}
}

export const getTrack = (selectedTrackId: string) => {
	const promise: Promise<{ data: GetTrackDetailsOutputData }> = fetch(
		'https://musicfun.it-incubator.app/api/1.0/playlists/tracks/' + selectedTrackId,
		{
			headers: {
				'api-key': import.meta.env.VITE_API_KEY
			}
		}
	).then(res => res.json())

	return promise
}

export type TrackItemOutput = {
	id: string
	attributes: {
		title: string
		attachments: Array<{ url: string }>
	}
}

export const getTracks = () => {
	const promise: Promise<{ data: Array<TrackItemOutput> }> = fetch('https://musicfun.it-incubator.app/api/1.0/playlists/tracks', {
		headers: {
			'api-key': import.meta.env.VITE_API_KEY
		}
	}).then(res => res.json())
	return promise
}
