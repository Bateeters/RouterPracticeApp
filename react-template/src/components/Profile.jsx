import { useParams, Link } from "react-router-dom";
import DefaultProfile from "./DefaultProfile";
import Spinach from "./Spinach";
import Popeye from "./Popeye";

const profileComponents = {
    popeye: Popeye,
    spinach: Spinach,
    // Add new imports here when needed
}

const Profile = () => {
  const { name } = useParams();

  const SelectedProfile = name ? profileComponents[name] || DefaultProfile : DefaultProfile;

  return (
    <div>
        <h1>Hello from profile page!</h1>
        <p>So, how are you?</p>
        <hr />
        <h2>The profile visited is here:</h2>
        <SelectedProfile />
        <hr />
        <h3>Check out some of these other profiles:</h3>
        <ul>
            {Object.keys(profileComponents)
            .filter((key) => key !== name)
            .map((profileName) => (
                <li key={profileName}>
                    <Link to={`/profile/${profileName}`}>
                        Visit {profileName.charAt(0).toUpperCase() + profileName.slice(1)}
                    </Link>
                </li>
            ))}
        </ul>
    </div>
  );
};

export default Profile;
