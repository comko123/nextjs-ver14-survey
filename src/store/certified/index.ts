import { create } from "zustand"

// hook기반으로 생성을 한다.
export const useCertifiedState = create<Certified_State>(set => ({
  // 상태선언
  email: true,
  email_auth: false,
  phone: false,
  phone_auth: false,
  submit: false

  // 함수를 사용하여 set사용시 상태 가져와 변경가능
  //   increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
  //   removeAllBears: () => set({ bears: 0 }),
}))

export const useCertifiedAuth = create<Certified_State>(set => ({
  // 상태선언
  email: false,
  phone: false
}))
