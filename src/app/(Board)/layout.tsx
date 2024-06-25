const BoardLayout = ({ children, parallel }: layout) => {
  return (
    <div>
      {children}
      {parallel}
    </div>
  )
}
//parallel route 적용
export default BoardLayout
