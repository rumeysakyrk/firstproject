import PropTypes from "prop-types";

function User ({name, surname, age, isLoggedIn, friends, location}) {


    return (
    <>
    <h1>{isLoggedIn ? `Adım ${name}, Soyadım ${surname} (${age}) ` : "giriş yapınız"} </h1>
    <br />
    <p> {location.title} {location.zip} </p>

    {friends.map((friend) => {
        return <div key={friend.id}> {friend.name} </div>;
    } )}
    </>   
);
 }

// prop type bir veri girişindeki verinin türünü belirlemekte oldukça kullanışlı
// prop type aynı zamanda veri türünün gerekliliğini de kontrol eder bunun için isRequired kullan
// kullanılan oneOfType kullanımı iki farklı türden herhangi birinin olmasını işaret eder
// özetle yaş değeri için hem age={20} hem de age="yirmi" gösterimi geçerlidir
 User.propTypes = {
    name: PropTypes.string.isRequired,
    surname: PropTypes.string,
    age:PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    isLoggedIn: PropTypes.bool,
    friends: PropTypes.array,
    location: PropTypes.shape({title: PropTypes.string, zip: PropTypes.number} )
    
 };

 User.defaultProps={
   surname: "no"
 };

export default User;