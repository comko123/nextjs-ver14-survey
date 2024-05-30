import { create } from "zustand"

export const useCertifiedState = create<Certified_Parse<"create_filter">>(set => ({
  // 추가 인증 input
  email: false,
  phone: false,
  second_certified: (title: Auth["title"]) => set(state => ({ ...state, [title]: !state[title] }))
}))

export const useCertifiedAuth = create<Certified_Parse<"second_certified">>(set => ({
  // 필터 생성
  email: false,
  phone: false,
  create_filter: (title: Auth["title"]) => set(state => ({ ...state, [title]: !state[title] }))
}))
