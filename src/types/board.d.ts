type post = {
  userId: string
  id: string
  title: string
  body: string
}[]

type images = (Omit<post[number], "body"> & { thumbnailUrl: string; url: string })[]
