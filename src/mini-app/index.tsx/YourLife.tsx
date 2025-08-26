// inspired by https://www.youtube.com/watch?v=arj7oStGLkU

import { useEffect, useState } from 'react';

const Cells = () => {
  const getCookie = () => {
    const value = `; ${document.cookie}`;
    const parts = value.split('; userDate=');
    if (parts.length === 2) {
      return parts.pop().split(';').shift();
    }
    return null;
  };

  const [birthDay, setBirthday] = useState('');

  const birthDate = new Date(birthDay);

  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth();
  const day = now.getDate();

  const today = new Date(year, month, day);

  const diffTime = +today - +birthDate;

  const daysSinceBirth = diffTime / (1000 * 60 * 60 * 24);
  const daysOndeath = Math.floor(365.25 * 76.5);

  const setCookie = (submitDate: string) => {
    document.cookie = `userDate=${submitDate}; path=/; expires=${today.setDate(
      today.getDate() + 400,
    )}`;
  };

  // biome-ignore lint/correctness/useExhaustiveDependencies: <intended only to run on initial mount>
  useEffect(() => {
    const cookie = getCookie();
    if (cookie) {
      setBirthday(cookie);
    }
  }, []);

  // biome-ignore lint/correctness/useExhaustiveDependencies: <func useCookie() is not a dependency>
  useEffect(() => {
    setCookie(birthDay);
  }, [birthDay]);

  const cellClickModal = (i) => {
    i + 1 < daysSinceBirth / 7
      ? alert('過ぎ去った時間は取り戻せない！')
      : alert(
          `生後${i + 1}週 (${Math.floor(
            ((i + 1) * 7) / 365,
          )}歳) の君はどこで、何をしているのだろう？`,
        );
  };

  return (
    <div className="flex flex-col flex-grow justify-center items-center">
      <p>
        your birthday:{' '}
        <input
          type="date"
          name="birthday"
          className="text-black"
          value={birthDay ? birthDay : ''}
          onChange={(e) => {
            setBirthday(e.target.value);
          }}
        />
      </p>

      <div className="p-8 py-4 leading-3">
        {birthDay ? (
          [...Array(Math.floor(daysOndeath / 7))].map((_, i) => (
            <input
              type="checkbox"
              key={`week ${i + 1}`}
              className="scale-75"
              checked={i + 1 < daysSinceBirth / 7}
              onClick={(_e) => cellClickModal(i)}
              readOnly
            />
          ))
        ) : (
          <></>
        )}

        <p className="py-4 text-center">
          {birthDay
            ? `on Earth: ${Math.ceil(
                (+today - +birthDate) / (1000 * 60 * 60 * 24 * 7),
              )} weeks / `
            : ''}
          life expectancy: {Math.floor(daysOndeath / 7)} weeks
        </p>
      </div>
    </div>
  );
};

export default Cells;
