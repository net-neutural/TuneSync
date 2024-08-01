import { AlbumsList } from '@/components/AblumList'
import { playlistNameFilter } from '@/helpers/filter'
import { Playlist } from '@/helpers/types'
import { useNavigationSearch } from '@/hooks/useNavigationSearch'
import { useAlbums, usePlaylists, useTracks } from '@/store/library'
import { defaultStyles } from '@/styles'
import { useRouter } from 'expo-router'
import { useMemo } from 'react'
import { View } from 'react-native'

const AlbumsScreen = () => {
	const router = useRouter()

	const search = useNavigationSearch({
		searchBarOptions: {
			placeholder: 'Find in collections',
		},
	})
	const { tracks } = useTracks()

	const { albums } = useAlbums(tracks)
	const { playlist, setPlaylist } = usePlaylists((state) => state)
	const filteredAlbums = useMemo(() => {
		return [...playlist, ...(albums?.filter(playlistNameFilter(search)) || [])]
	}, [albums, playlist, search])

	const handleAlbumsPress = (playlist: Playlist, type: string) => {
		console.log('type', type)

		router.push(`/(tabs)/collections/${playlist.name}::${type}`)
	}

	return (
		<View style={defaultStyles.container}>
			<AlbumsList albums={filteredAlbums} onAlbumPress={handleAlbumsPress} />
		</View>
	)
}

export default AlbumsScreen