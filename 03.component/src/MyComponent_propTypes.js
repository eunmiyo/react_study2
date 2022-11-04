import PropTypes from 'prop-types' 

// function MyComponent(){}
const MyComponent = ({ name, forNumber, children }) => {
    // const { name, children } = props
    return (
        <div>
            <div>안녕 {name} 새로운 컴포넌트 입니다.</div> <br />
            칠드런 값은 {children} 입니다.<br />
            좋아하는 숫자는 {forNumber} 입니다.
        </div>
    )
}

MyComponent.defaultProps = {
    name: '기본이름'
}

MyComponent.propTypes = {
    name: PropTypes.string,
    forNumber: PropTypes.number.isRequired
}

export default MyComponent