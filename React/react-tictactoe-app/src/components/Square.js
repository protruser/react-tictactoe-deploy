import React from 'react';
import './Square.css';

const Square = ({ onClick, value }) => {
    // constructor(props) {
    //     super(props); // 자식 클래스 내에서 부모 클래스의 생성자를 호출합니다.
    //     // React.Component 객체가 생성될 때 props 속성을 초기화하기 위해 부모 컴포넌트에게 props를 전달
    //     // 생성자 내부에서도 this.props를 정상적으로 사용할 수 있도록 보장하기 위해서.
    //     this.state = {
    //         value: null,
    //     };
    // }
    // 게임 상태를 유지할 필요가 없기 때문에 constructor를 지웠음

    return (
        <button className="square" onClick={onClick}>
            {value}
        </button>
    );
};

export default Square;
