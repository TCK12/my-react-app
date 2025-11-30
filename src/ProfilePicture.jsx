function ProfilePicture () {
    const imageUrl = './src/assets/dasha_taran.png';

    const handleClick = (e) => e.target.style.display = "NOnE";

    return (<img onClick={(e) => handleClick(e)} src={imageUrl} ></img>);
}

export default ProfilePicture;