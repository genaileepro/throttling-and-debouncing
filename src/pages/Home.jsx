import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import _ from 'lodash';

export const Home = () => {
    const navigate = useNavigate();

    let timerId = null;

    const throttle = _.throttle(() => {
        console.log(`API 요청 실행! 2000ms 동안 추가요청 안받음!`);
    }, 2000);

    const debounce = _.debounce(() => {
        console.log(`마지막 요청으로부터 2000ms 지났으므로 API 요청 실행!`);
    }, 2000);

    const handleMove = () => {
        navigate(`/company`);
    };

    useEffect(() => {
        return () => {
            if (timerId) {
                clearTimeout(timerId);
            }
        };
    }, []);
    return (
        <div>
            <h2>Button 이벤트 예제</h2>
            <button onClick={throttle}>쓰로틀링 버튼</button>
            <button onClick={debounce}>디바운싱 버튼</button>
            <div>
                <button onClick={handleMove}>페이지 이동</button>
            </div>
        </div>
    );
};
