import { useEffect, useState } from "react";

const Cells = (props: { date }) => {
  const submitDate = async (submitDate) => {
    await fetch("/api/saveBirthday", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(submitDate),
    });
  };

  const [birthDay, setBirthday] = useState(props.date);

  useEffect(() => {
    submitDate(birthDay);
  }, [birthDay]);

  const birthDate = +new Date(birthDay);

  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth();
  const day = now.getDate();

  const today = +new Date(year, month, day);

  const diffTime = today - birthDate;

  const daysSinceBirth = diffTime / (1000 * 60 * 60 * 24);
  const daysOndeath = 365.25 * 85;

  const cellClickModal = (i) => {
    i + 1 < daysSinceBirth / 7
      ? alert("過ぎ去った時間は取り戻せない！")
      : alert(
          `生後${i + 1}週 (${Math.floor(
            ((i + 1) * 7) / 365,
          )}歳) の君はどこで、何をしているのだろう？`,
        );
  };

  return (
    <div className="flex flex-col flex-grow justify-center items-center">
      <p>
        your birthday:{" "}
        <input
          type="date"
          name="birthday"
          className="text-black"
          value={birthDay ? birthDay : props.date}
          onChange={(e) => {
            setBirthday(e.target.value);
          }}
        />
      </p>

      <div className="p-8 py-4 leading-3">
        {birthDay !== "" ? (
          [...Array(Math.floor(daysOndeath / 7))].map((_, i) => (
            <input
              type="checkbox"
              key={`week ${i + 1}`}
              className="scale-75"
              checked={i + 1 < daysSinceBirth / 7}
              onClick={(e) => cellClickModal(i)}
              readOnly
            />
          ))
        ) : (
          <></>
        )}

        <p className="py-4 text-center">
          {birthDate
            ? `生後${Math.ceil(
                (today - birthDate) / (1000 * 60 * 60 * 24 * 7),
              )}週目/`
            : ""}
          推定寿命
          {Math.floor(daysOndeath / 7)}週
        </p>
      </div>
    </div>
  );
};

export default Cells;
