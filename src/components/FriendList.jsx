import css from './FriendList.module.css';
import friends from '../../friends.json';

function FriendList() {
    return (
        <div className={css.bodyCenter}>
            <ul className={css.friendsUL}>
                {friends.map(friends => {
                    return (
                        <li className={css.friend} key={friends.id}>
                            <img className={css.avatar} src={friends.avatar} alt="Avatar" width="48" />
                            <p className={css.name}>{friends.name}</p>
                            <p className={friends.isOnline ? css.online : css.offline}>
                                {friends.isOnline ? "Online" : "Offline"}
                            </p>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default FriendList;