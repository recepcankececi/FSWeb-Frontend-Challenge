import { useApp } from '../context/AppContext';

const Profile = () => {
  const { data } = useApp();
  const { profile } = data;

  return (
    <section className="bg-white dark:bg-gray-900 transition-colors">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-12">
          {profile.title}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-primary dark:text-purple-400 mb-6">
              {profile.basicInfo.title}
            </h3>
            <div className="space-y-4">
              <div className="flex">
                <span className="font-semibold text-gray-900 dark:text-white w-40">Doğum Tarihi</span>
                <span className="text-gray-600 dark:text-gray-400">{profile.basicInfo.birthDate}</span>
              </div>
              <div className="flex">
                <span className="font-semibold text-gray-900 dark:text-white w-40">İkamet Şehri</span>
                <span className="text-gray-600 dark:text-gray-400">{profile.basicInfo.city}</span>
              </div>
              <div className="flex">
                <span className="font-semibold text-gray-900 dark:text-white w-40">Eğitim Durumu</span>
                <span className="text-gray-600 dark:text-gray-400">{profile.basicInfo.education}</span>
              </div>
              <div className="flex">
                <span className="font-semibold text-gray-900 dark:text-white w-40">Tercih Ettiği Rol</span>
                <span className="text-gray-600 dark:text-gray-400">{profile.basicInfo.preferredRole}</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-primary dark:text-purple-400 mb-6">
              {profile.aboutMe.title}
            </h3>
            <div className="space-y-4 text-gray-600 dark:text-gray-400 leading-relaxed">
              <p>{profile.aboutMe.description1}</p>
              <p>{profile.aboutMe.description2}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
