interface album {
  thumbnailUrl: string
  url: string
  albumId: string
}

interface post {
  userId: string
  id: string
  title: string
  body: string
}

type detail_box = Pick<post, "id"> & { scale?: boolean }

type images = (Omit<post, "body"> & Omit<album, "albumId">)[]

type dynamic_image = Omit<post, "body" | "userId"> & album

type dynamic_params = { params: { id: string } }
