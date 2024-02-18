import React from 'react'

const SignupPage = () => {
  return (
    <div>
        <h2>회원가입</h2>
        <div>
            <form>
                <div>
                    <label>이메일</label>
                    <input type="email" />
                </div>
                <div>
                    <label>비밀번호</label>
                    <input type="password" />
                </div>
                <div>
                    <label>비밀번호 확인</label>
                    <input type="password" />
                </div>
                <button type="submit">회원가입 하기</button>
            </form>
        </div>
    </div>
  )
}

export default SignupPage