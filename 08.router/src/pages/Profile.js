import { useParams } from 'react-router-dom';

const data = {
  eunmi: {
    name: '전은미',
    description: '학생',
  },
  haseo: {
    name: '김하서',
    description: '강사',
  },
};

const Profile = () => {
  const params = useParams();
  const profile = data[params.username];

  return (
    <div>
      <h1>프로필</h1>
      {profile ? (
        <div>
          <h2>{profile.name}</h2>
          <p>{profile.description}</p>
        </div>
      ) : (
        <p>존재하지 않는 프로필입니다.</p>
      )}
    </div>
  );
};

export default Profile;
