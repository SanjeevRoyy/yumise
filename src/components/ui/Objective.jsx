import React from "react";

const Objective = () => {
  return (
    <>
      <div className="flex items-center justify-center p-20 space-between gap-32">
        <div>
          <h1 className="text-[#951B81] text-4xl font-bold font-postesenone  ">
            Objective
          </h1>
          <h1 className="text-[#951B81] text-4xl font-bold font-postesenone  ">
            Based
          </h1>
        </div>

        <p className="text-[#000] text-justify font-poppins text-ls font-light leading-6 tracking-wide mt-4">
          Our classes focus on improving communication skills such as speaking
          and listening, which are imperative among entrance examinations for
          both higher education and firms, and we have established a reputation
          as Be Seen solutions for improving communication skills.Unlike
          Japanese language school for Japanese students, the basic policy of
          our school is "Teaching Japanese as a second language." Our doors are
          open to all students, regardless of race and national origin, who wish
          to learn the Japanese language and to understand Japan. We want to
          nurture students into balanced, international people who can fluently
          speak the living Japanese language and have a deep understanding of
          Japanese culture.
        </p>
      </div>
      <div className="flex p-10 items-center  justify-center gap--20 ">
        <div className="relative w-1/3 h-56 rounded-2xl bg-gradient-to-tr from-[#E6CBF5] to-[#F7E7FC] p-8 shadow-xl">
          <h1 className="text-[#951B81] text-xl font-extrabold mb-3 uppercase">
            Student Visa Program
          </h1>
          <p className="text-[#505050] font-inter text-[12px] font-semibold leading-[20px] mb-6">
            Students can obtain a student visa to enter a university, graduate
            school or vocational school, or to find a job in Japan. We provide
            Japanese language classes and career guidance according to your
            level and career goals.
          </p>
          <button className="bg-[#951B81] text-white text-sm font-semibold px-4 py-2 rounded hover:bg-[#7a1566] transition">
            Read More
          </button>
        </div>

        <img
          className="rounded-2xl w-[400px] object-cover"
          src="assets/images/boys.png"
          alt="objective"
        />
      </div>
    </>
  );
};

export default Objective;
