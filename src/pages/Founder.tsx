import React from "react";
import { Link } from "react-router-dom";

const Founder: React.FC = () => {
  const founder = {
    name: "Dr Angela Migowa",
    title: "Paediatric Rheumatologist",
    image: "angela-300x300.webp",
    bio: `Dr. Migowa is the Founder of Hope Arthritis Foundation, Founding President of the Paediatric Society of the African League Against Rheumatism (PAFLAR) and National Vice Chair of Kenya Paediatric Association (2020-2024). She is an Assistant Professor and Pediatric Rheumatologist in the department of Pediatrics and Child Health at Aga Khan University Medical College East Africa Nairobi, Kenya. She completed a postdoctoral fellowship in Pediatric Rheumatology at McGill University Health Centre, Montreal Canada and holds a Master's Degree in Paediatrics and Child Health (AKUH). She is currently a PHD Candidate at University of Ghent in Belgium and her research work is focused on addressing diagnostic challenges for paediatric rheumatic diseases in Kenya.

Her interests include Rheumatology, Clinical Immunology, Adolescent Medicine, Leadership and Governance. She is currently a member of the Paediatric Rheumatology European Society (PRES) global taskforce, PRES Lupus Working Group, PRES Scientific Committee, Swiss based JIR CLiPS project and involved in collaborations with the Kenya Pediatric Association, Kenya Women in Health Alliance, ArthRheuma Society of Kenya, Allergy Society of Kenya, Association of Women in Rheumatology(AWIR), African League Against Rheumatism(AFLAR),Canadian Rheumatology Association(CRA), American College of Rheumatology(ACR), European League Against Rheumatism (EULAR), Medical Women's International Association(MWIA) and Women Leaders in Global Health Movement(WLGH).

In order to raise awareness for pediatric rheumatology and primary immunodeficiencies, she has held several lectures and conference presentations across Africa, Europe and North America among medical students, doctors, nurses and patient support groups. She has pioneered the implementation of the first A project in Kenya aimed at raising awareness for primary immunodeficiencies in Africa. She partners with patient support groups such as International Patient Organisation for Primary Immunodeficiencies (IPOPI) and Rare Disease Society of Kenya to raise awareness and advocate for patients with rheumatological and other rare diseases.

Through collaborative efforts with the PAFLAR leadership team, they have secured grants to carry out educational activities across Africa in Paediatric Rheumatology which culminated in the virtual and hybrid PAFLAR Congresses that has led to publication of over 190 abstracts in the Oxford Journal showcasing Paediatric Rheumatology Research across Africa to the global community. She is a certified RCUK EPLS Instructor.

She was recently declared the winner of Top 40 under 40 women by Business Daily Africa as one of the most influential women in Kenya https://top40.businessdailyafrica.com/candidates/dr-angela-migowa/ and featured in the Global Lancet Journal for her advocacy in Paediatric Rheumatology https://www.thelancet.com/journals/lancet/article/PIIS0140-6736(22)00572-4/fulltext . She was also featured as one of the pioneer African women Rheumatologists in the article "Global excellence in rheumatology: Africa-The contribution of African women rheumatologists" https://www.frontiersin.org/articles/10.3389/fmed.2022.1032122/full`,
  };

  return (
    <section className="py-16 bg-gray-50 mt-16">
      <div className="mx-auto px-4 max-w-6xl">
        <div className="mb-6">
          <Link
            to="/"
            className="flex items-center text-orange-500 hover:text-orange-600 transition-colors mb-4"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Back to Home
          </Link>
        </div>
        
        <div className="bg-white rounded-lg shadow-md overflow-hidden p-8 flex flex-col items-center">
          <img
            src={`/img/panels/${founder.image}`}
            alt={founder.name}
            className="w-40 h-auto object-cover rounded-full mb-6"
          />
          <h1 className="text-3xl font-bold text-gray-800 mb-2 text-center">
            {founder.name}
          </h1>
          <h2 className="text-xl text-orange-600 mb-6 text-center">{founder.title}</h2>
          <div className="w-24 h-1 bg-orange-500 mb-8" />
          <div
            className="prose max-w-none text-gray-700 leading-relaxed"
            style={{ whiteSpace: "pre-line" }}
          >
            {founder.bio}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Founder;