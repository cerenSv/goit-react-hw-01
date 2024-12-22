import style from './User.module.css';

function User({
    name,
    tag,
    location,
    image,
    stats,
}) {
  return (
      <div className={style.bodyCenter}>
        <div className={style.userCard}>
        <div className={style.userCardHeader}>
            <img
            src={image}
            alt="User avatar"
            />
            <p className={style.userName}>{name}</p>
            <p className={style.userTextInfo}>@{tag}</p>
            <p className={style.userTextInfo}>{location}</p>
        </div>

        <ul className={style.userCardFooter}>
            <li>
                <span>Followers</span>
                <span className={style.total}>{stats.followers}</span>
            </li>
            <li>
                <span>Views</span>
                <span className={style.total}>{stats.views}</span>
            </li>
            <li>
                <span>Likes</span>
                <span className={style.total}>{stats.likes}</span>
            </li>
        </ul>
    </div>
    </div>

  );
}

export default User;