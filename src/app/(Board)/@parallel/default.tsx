const Default = () => {
  return null
}
export default Default
/*
Parallel Route - Layout에서 여러개의 컴포넌트를 props로 받아 사용자에게 보여주는기술.
Layout에서 기본적으로 존재하는 Children Props도 Parallel Route이며 일반적으로 페이지 안에서
여러개의 컴포넌트를 동시에 사용하는것과 약간 다른개념이다.(동작방식이 다름)  

사용방법 - nextjs 14버전이나 그 이상의 버전에서 이기능을 사용하는 방법은 Parallel Route를 원하는 폴더에 @기호로 시작하는 폴더를 생성하면
Layout에 @뒤에있는 이름을 props로 받을 수 있다. (타입은 Children과 같은 React.ReactNode)
props로 받은  Parallel Route Component를 Children Props와 같이 사용하면 적용완료.
(해당 프로젝트에서는 페이지 요청을 Intercept하고 그Intercept한 Route를 Parallel로 보여주는 방식.)

유의사항 - 1. Parallel Route를 사용하는 경우 반드시 @로 시작해야한다. ( ex) ( (@part3 => O  , part3@=> X ) )
2. Parallel Route 특정 페이지에서만 보이게 사용하는 경우 Intercepting Route와 같이 Parallel Route의 폴더안에
같은 구조의 폴더구조를 가지고 있어야하며 그렇지 않은경우 에러가 발생한다. (매칭되는 Parallel Route가 없기 때문)
3. 2번의 문제를 해결하기위해 Defalut가 존재하며 Parallel Route폴더안에 defalut.jsx or defalut.tsx파일 생성후 매칭되는 컴포넌트가 없을때
보여줄 내용을 작성하면 된다.

사용후기 - 이번 프로젝트에서는 Parallel Route를 사용할 필요없이 Intercepting Route만으로 기능구현이 가능했지만 
새로운 버전에 적응하고 공부하기위한 프로젝트이니만큼 Parallel Route를 사용하여 구현하였다.
Parallel Route가 반드시 필요한 기능은 아니지만 코드를 분리하여 재사용성과 유지보수성을 높일수 있다는점과 
따로 Loading파일이나 Layout을 적용할수 있다는 점에서는 장점이 부각된다. 
*/
