async function Part3() {
  const data = await Promise.all([
    await (await fetch(process.env.BOARD_MOCK_DATA as string)).json(),
    await (await fetch(process.env.BOARD_MOCK_IMAGE as string)).json()
  ])
  console.log(data)
  return (
    <main>
      <h1>Board</h1>
    </main>
  )
}

export default Part3
