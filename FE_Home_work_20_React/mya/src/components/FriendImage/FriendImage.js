import style from './FriendImage.module.css'

function FriendImage(){
    return(
        <div className={style.friend_image}>
        <p>
            Приехав к нам однажды, многие наши клиенты становятся постоянными, а часть из них даже друзьями.
        </p>
        <p>
            А также в нашей мастерской можно отремонтировать электросамокат и электровелосипед.
        </p>
        </div>
    )
}
export default FriendImage;