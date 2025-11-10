import React, { useEffect } from "react";

const Articles = () => {
  // SEO
  const seoTitle =
    "Pediatric Arthritis: Early Signs, Symptoms, Diagnosis, and Treatment Every Parent Should Know";
  const seoDescription =
    "Learn how to recognize the early signs of childhood arthritis, including pain, swelling, stiffness, and fatigue. Discover how pediatric rheumatologists diagnose and manage juvenile idiopathic arthritis to help children live active, healthy lives.";
  const seoKeywords = [
    "childhood arthritis symptoms",
    "juvenile idiopathic arthritis diagnosis",
    "signs of arthritis in children",
    "pediatric rheumatologist Kenya",
    "childhood joint pain causes",
    "early signs of juvenile arthritis",
    "treatment for childhood arthritis",
    "Hope Arthritis Foundation",
  ].join(", ");

  useEffect(() => {
    document.title = seoTitle;

    const upsertMeta = (name: string, content: string) => {
      let tag = document.querySelector(
        `meta[name="${name}"]`
      ) as HTMLMetaElement | null;
      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute("name", name);
        document.head.appendChild(tag);
      }
      tag.setAttribute("content", content);
    };

    upsertMeta("description", seoDescription);
    upsertMeta("keywords", seoKeywords);
  }, []);

  return (
    <section className="py-16 bg-gray-50 mt-14">
      <div className=" mx-auto px-4 max-w-6xl">
        {/* Back link */}
        <div className="mb-6 mt-10">
          <a
            href="/"
            className="flex items-center text-orange-500 hover:text-orange-600 transition-colors"
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
          </a>
        </div>

        {/* Header (mirrors ActivityDetail header style) */}
        <div className="bg-gradient-to-br from-orange-100/80 to-cyan-500/10 rounded-3xl py-16 shadow-md overflow-hidden">
          <div className="text-center mb-10 px-6">
            <h1 className="section-title gradient-title">
              Pediatric Arthritis: Recognizing the Signs and Taking Action Early
            </h1>
            <div className="w-24 h-1 bg-orange-500 mx-auto mt-4 mb-6" />
            <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
              Pediatric arthritis, often misunderstood as an adult-only disease,
              can significantly affect the lives of children. Understanding the
              signs, symptoms, and treatment is crucial for early diagnosis and
              effective management.
            </p>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed mt-4">
              At Hope Arthritis Foundation, our mission is to improve the
              quality of care and outcomes for children with rheumatic diseases
              through advocacy, education, and access to expert care.
            </p>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed mt-4">
              In this post, we explore the symptoms, investigations, and
              management of childhood arthritis, and highlight the red flags
              that parents, teachers, and healthcare professionals should never
              ignore.
            </p>
          </div>

          <div className="px-6 md:px-10">
            {/* Understanding Pediatric Arthritis */}
            <section className="mb-10">
              <h3 className="text-xl font-bold mb-3 text-gray-800">
                Understanding Pediatric Arthritis
              </h3>
              <p className="text-gray-700 mb-4">
                Juvenile Idiopathic Arthritis (JIA) is the most common form of
                chronic arthritis in children. However, several other autoimmune
                conditions can also cause chronic inflammation in the joints,
                including:
              </p>
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                <li>Systemic Lupus Erythematosus (SLE)</li>
                <li>Juvenile Dermatomyositis (JDM)</li>
                <li>Vasculitis</li>
              </ul>
              <p className="text-gray-700 mt-4">
                These disorders cause the body's immune system to attack healthy
                tissues, resulting in joint inflammation, pain, and swelling.
                Without early intervention, they can lead to long-term
                complications such as joint deformities, growth issues, and
                disability.
              </p>
            </section>

            {/* Common Signs and Symptoms */}
            <section className="mb-10">
              <h3 className="text-xl font-bold mb-3 text-gray-800">
                Common Signs and Symptoms of Childhood Arthritis
              </h3>
              <p className="text-gray-700 mb-4">
                Recognizing early symptoms of pediatric arthritis is key to
                ensuring timely medical care. Watch for the following warning
                signs:
              </p>
              <ol className="list-decimal list-inside space-y-4 text-gray-700">
                <li>
                  <span className="font-semibold">Joint Pain</span>
                  <p>
                    Persistent joint pain, especially in the morning or after
                    rest, is a common sign of arthritis in children. Unlike
                    injuries, arthritis pain improves with movement and may be
                    worse after inactivity.
                  </p>
                </li>
                <li>
                  <span className="font-semibold">Swelling</span>
                  <p>
                    Unexplained or recurring joint swelling, often in the knees,
                    wrists, or ankles, can indicate underlying inflammation.
                  </p>
                </li>
                <li>
                  <span className="font-semibold">Stiffness</span>
                  <p>
                    Morning stiffness that makes it difficult for a child to get
                    out of bed or move freely is a hallmark of arthritis.
                  </p>
                </li>
                <li>
                  <span className="font-semibold">Fatigue</span>
                  <p>
                    Children with arthritis may feel tired or low in energy,
                    even after adequate rest. This can affect school performance
                    and playtime.
                  </p>
                </li>
                <li>
                  <span className="font-semibold">Fever</span>
                  <p>
                    Unexplained or recurring fevers, especially in the evening,
                    may point to systemic juvenile arthritis.
                  </p>
                </li>
                <li>
                  <span className="font-semibold">Eye Inflammation</span>
                  <p>
                    Some children develop uveitis, a painful eye inflammation
                    that causes redness, blurred vision, and light sensitivity.
                    Untreated, it can lead to vision loss.
                  </p>
                </li>
                <li>
                  <span className="font-semibold">Rash</span>
                  <p>
                    A pink or salmon-colored rash appearing on the trunk or
                    limbs, especially alongside fever, may suggest systemic
                    juvenile arthritis.
                  </p>
                </li>
              </ol>
            </section>

            {/* Distinguish pain */}
            <section className="mb-10">
              <h3 className="text-xl font-bold mb-3 text-gray-800">
                How to Distinguish Arthritis Pain from Other Causes
              </h3>
              <p className="text-gray-700 mb-3">
                Not all joint pain means arthritis. It's important to know the
                difference:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>
                  <span className="font-semibold">Arthritis pain →</span> Worse
                  in the morning, improves with movement, and often comes with
                  stiffness or swelling.
                </li>
                <li>
                  <span className="font-semibold">Injury-related pain →</span>{" "}
                  Worse in the evening, improves with rest, and worsens with
                  activity.
                </li>
              </ul>
              <p className="text-gray-700 mt-4">
                A detailed medical history, physical exam, and imaging or lab
                tests are crucial to confirm the cause and guide proper
                treatment.
              </p>
            </section>

            {/* Red Flags */}
            <section className="mb-10">
              <h3 className="text-xl font-bold mb-3 text-gray-800">
                Red Flags Requiring Immediate Medical Attention
              </h3>
              <p className="text-gray-700 mb-3">
                See a doctor or pediatric rheumatologist if your child has:
              </p>
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                <li>Joint pain or swelling lasting more than six weeks</li>
                <li>Morning stiffness or difficulty walking</li>
                <li>Eye redness or pain without an infection</li>
                <li>Unexplained fevers, fatigue, or weight loss</li>
                <li>Rash associated with joint symptoms</li>
              </ul>
              <p className="text-gray-700 mt-3">
                Prompt medical evaluation can prevent joint damage and long-term
                disability.
              </p>
            </section>

            {/* Diagnosis */}
            <section className="mb-10">
              <h3 className="text-xl font-bold mb-3 text-gray-800">
                How Pediatric Arthritis Is Diagnosed
              </h3>
              <p className="text-gray-700 mb-3">
                A pediatric rheumatologist will perform several assessments to
                confirm the diagnosis, including:
              </p>
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                <li>
                  <span className="font-semibold">Physical Examination:</span>{" "}
                  Checking joints for swelling, tenderness, warmth, or limited
                  range of motion.
                </li>
                <li>
                  <span className="font-semibold">Blood Tests:</span> Measuring
                  inflammation markers (ESR, CRP) and detecting autoantibodies
                  like ANA or rheumatoid factor.
                </li>
                <li>
                  <span className="font-semibold">Imaging Studies:</span>{" "}
                  X-rays, ultrasound, or MRI scans help visualize joint
                  inflammation and detect early damage.
                </li>
              </ul>
            </section>

            {/* Treatment */}
            <section className="mb-10">
              <h3 className="text-xl font-bold mb-3 text-gray-800">
                Treatment and Management of Childhood Arthritis
              </h3>
              <p className="text-gray-700 mb-4">
                There is no cure for most types of childhood arthritis, but
                early and consistent treatment can help children lead full,
                active lives.
              </p>
              <ol className="list-decimal list-inside space-y-3 text-gray-700">
                <li>
                  <span className="font-semibold">Medications</span>
                  <p className="mt-2">
                    Depending on disease severity, treatment may include:
                  </p>
                  <ul className="list-disc list-inside ml-5 mt-2 space-y-1">
                    <li>NSAIDs for pain relief</li>
                    <li>
                      DMARDs (e.g., methotrexate) to control immune activity
                    </li>
                    <li>Biologic agents targeting inflammation</li>
                    <li>
                      Corticosteroids for short-term control of severe
                      inflammation
                    </li>
                  </ul>
                </li>
                <li>
                  <span className="font-semibold">
                    Physical and Occupational Therapy
                  </span>
                  <p className="mt-2">
                    Structured exercises help maintain mobility, strength, and
                    function while reducing stiffness.
                  </p>
                </li>
                <li>
                  <span className="font-semibold">Nutrition and Lifestyle</span>
                  <p className="mt-2">
                    Encouraging a balanced diet, regular low-impact exercise,
                    and adequate rest supports overall health and energy levels.
                  </p>
                </li>
                <li>
                  <span className="font-semibold">
                    Emotional and Psychosocial Support
                  </span>
                  <p className="mt-2">
                    Children with chronic illness benefit greatly from
                    counseling, peer support, and school-based accommodations to
                    help them thrive academically and socially.
                  </p>
                </li>
              </ol>
            </section>

            {/* Why early diagnosis matters */}
            <section className="mb-10">
              <h3 className="text-xl font-bold mb-3 text-gray-800">
                Why Early Diagnosis Matters
              </h3>
              <p className="text-gray-700 mb-3">
                Early detection and treatment of juvenile arthritis can:
              </p>
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                <li>Reduce pain and inflammation</li>
                <li>Prevent joint damage and deformities</li>
                <li>Preserve growth and mobility</li>
                <li>Enhance long-term quality of life</li>
              </ul>
              <p className="text-gray-700 mt-3">
                With proper care, most children can enjoy normal activities,
                from school to sports, without limitations.
              </p>
            </section>

            {/* HAF Commitment */}
            <section className="mb-10">
              <h3 className="text-xl font-bold mb-3 text-gray-800">
                Hope Arthritis Foundation's Commitment
              </h3>
              <p className="text-gray-700 mb-3">
                At Hope Arthritis Foundation, we are dedicated to transforming
                pediatric rheumatology care across Africa by:
              </p>
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                <li>
                  <span className="font-semibold">
                    Improving Access to Quality Care:
                  </span>{" "}
                  Advocating for earlier diagnosis and equitable services for
                  all children.
                </li>
                <li>
                  <span className="font-semibold">Training and Education:</span>{" "}
                  Providing boot camps, workshops, and online courses to empower
                  healthcare workers and parents.
                </li>
                <li>
                  <span className="font-semibold">Awareness and Advocacy:</span>{" "}
                  Promoting early recognition of childhood arthritis and
                  dispelling myths surrounding the disease.
                </li>
              </ul>
              <p className="text-gray-700 mt-4">
                If you're a parent, teacher, or healthcare professional,
                understanding the signs of pediatric arthritis is the first step
                toward giving children the care they deserve.
              </p>
              <p className="text-gray-700 mt-3 font-medium">
                Let's work together to ensure no child suffers in silence.
              </p>
            </section>

            {/* Author */}
            <section className="mt-12 p-6 bg-white rounded-2xl shadow border border-gray-100">
              <h4 className="font-bold text-gray-800 mb-2">Written by:</h4>
              <p className="text-gray-700">
                Dr. Angela Migowa, MBChB, MMed, Paediatric Rheumatology, PhD
                <br />
                Pediatric Rheumatologist & Founder, Hope Arthritis Foundation
              </p>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Articles;
