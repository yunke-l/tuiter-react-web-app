import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { profileThunk, logoutThunk, updateUserThunk } from "../services/auth-thunks";

function ProfileScreen() {
  const { currentUser } = useSelector((state) => state.user);
  const [profile, setProfile] = useState(currentUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [savedProfile, setSavedProfile] = useState(currentUser);

  const handleInputChange = (event, field) => {
    const newProfile = { ...profile, [field]: event.target.value };
    setProfile(newProfile);
  };

  const save = () => {
    dispatch(updateUserThunk(profile)).then(() => {
      setSavedProfile(profile);
    });
  };

  useEffect(() => {
    const fetchProfile = async () => {
      const { payload } = await dispatch(profileThunk());
      setProfile(payload);
    };
    fetchProfile();
  }, [dispatch]);

  return (
      <div>
        <h1>Profile Screen</h1>

        <h2>{savedProfile && (`Welcome, ${savedProfile.firstName} ${savedProfile.lastName}`)}</h2>

        {profile && (
            <div>
              <div>
                <label>First Name</label>
                <input
                    type="text"
                    value={profile.firstName}
                    onChange={(event) => handleInputChange(event, "firstName")}
                />
              </div>
              <div>
                <label>Last Name</label>
                <input
                    type="text"
                    value={profile.lastName}
                    onChange={(event) => handleInputChange(event, "lastName")}
                />
              </div>
            </div>
        )}

        <button
            className="profile-button"
            onClick={() => {
              dispatch(logoutThunk());
              navigate("/tuiter/login");
            }}
        >
          Logout
        </button>
        <button className="profile-button" onClick={save}>
          Save
        </button>
      </div>
  );
}

export default ProfileScreen;


