import { FC, memo } from "react"

const Auth: FC<Auth> = props => {
  /*{ input_state : 초기 입력버튼
    
    , input_auth_state : 입력후 인증번호 입력버튼
    
    , auth_state :입력후 인증번호 입력창 보여주는 여부  }*/
  return (
    <article className="form-continer">
      <section className="form-auth">
        <input
          type="email"
          name={props.title}
          placeholder={props.title}
          required
          className="input-rose peer"
        />
        <input
          type="submit"
          disabled={props.input_state as boolean}
          value={props.title}
          placeholder={props.title}
          className="gradient-btn2 btn-peer-event"
        />
      </section>
      {props.auth_state ? (
        <section className="form-auth">
          <input type="number" name="email-auth" required className="input-rose peer" />
          <input
            type="submit"
            disabled={props.input_auth_state as boolean}
            value="auth"
            className="gradient-btn2 btn-peer-event"
          />
        </section>
      ) : null}
    </article>
  )
}
export default memo(Auth)
